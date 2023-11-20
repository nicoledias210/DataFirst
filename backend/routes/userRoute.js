import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fileUpload from 'express-fileupload';
import crypto from 'crypto';
import sgMail from '@sendgrid/mail';
import User from "../models/User.js";

const router = express.Router();

router.use(fileUpload());
sgMail.setApiKey('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'); 

// POST method for User Register (WITHOUT EMAIL VERIFICATION)
router.post("/users/register", (request, response) => {
  // hash the password
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = new User({
        email: request.body.email,
        password: hashedPassword,
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            email: result.email,
            _id: result._id,
            isAdmin: result.isAdmin || false
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

// POST method for User Registration with email send
router.post("/users/requestEmailConfirmation", async (request, response) => {
  try {
      const { email } = request.body;

      // Generate a unique token
      const token = crypto.randomBytes(20).toString('hex');
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 2); // token expires in 2 hours

      // create a new user instance and collect the data
      const user = new User({
          email,
          confirmationToken: token,
          tokenExpiration: expiration
      });

      // save the new user details
      await user.save();

      // Email content
      const msg = {
          to: email,
          from: 'kechengliu16@163.com', // Change it in the sendgrid
          subject: 'Complete your registration',
          text: `Click the link to set your password and complete the registration process: http://localhost:3000/Register?complete=true&token=${token}`,
      };

      // Send the email
      await sgMail.send(msg);

      response.status(201).send({ message: 'Check your email to complete registration.',
                                  token: token});

  } catch (error) {
      response.status(500).send({
          message: "Error occurred",error
          
      });
  }
});

// POST method for email confirmation to finish the register
router.post("/users/completeRegistration/:token", async (request, response) => {
  try {
      const { token } = request.params;
      const { password } = request.body;

      const user = await User.findOne({ confirmationToken: token, tokenExpiration: { $gt: new Date() } });

      if (!user) {
          return response.status(400).send({
              message: "Invalid or expired token."
              // Removed the _id return here since the user doesn't exist in this case
          });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      user.isConfirmed = true;
      user.confirmationToken = undefined; // clear the token
      user.tokenExpiration = undefined; // clear the token expiration

      await user.save();

      response.status(200).send({
          message: 'Registration complete. You can now login.',
          _id: user._id
      });

  } catch (error) {
      response.status(500).send({
          message: "Error occurred",
          error
      });
  }
});



// POST method for User SignIn
router.post("/users/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
            _id: user._id,
            isAdmin: user.isAdmin || false
          });
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

// PUT method to change password
router.put("/users/:id/password", async (request, response) => {
  const userId = request.params.id;
  const currentPassword = request.body.currentPassword;
  const newPassword = request.body.newPassword;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return response.status(404).send({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return response.status(401).send({
        message: "Current password is incorrect",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    response.status(200).send({
      message: "Password updated successfully",
    });

  } catch (e) {
    response.status(500).send({
      message: "Error updating password",
      error: e,
    });
  }
});


// PUT method for change admin status
router.put("/users/:id/admin", async (request, response) => {
  try {
      // Fetch the user by the ID provided in the request parameter
      const user = await User.findById(request.params.id);

      // Check if the user exists
      if (!user) {
          return response.status(404).send({ message: "User not found" });
      }

      // Ensure we don't change the admin status for "admin@mola.lab"
      if (user.email === "admin@mola.lab") {
          return response.status(403).send({ message: "Cannot change the admin status for this user." });
      }

      // Toggle the isAdmin value
      user.isAdmin = !user.isAdmin;

      // Save the updated user
      await user.save();

      response.status(200).send({ message: "isAdmin status updated successfully", user });

  } catch (error) {
      response.status(500).send({ message: "Error updating user's admin status", error });
  }
});

// DELETE method for deleting a user
router.delete("/users/:userId/delete", async (req, res, next) => {
  try {
    const { userId } = req.params;  // Destructure userId from req.params

    const user = await User.findByIdAndRemove(userId);
    
    if (user) {
      return res.status(200).json({
        status: 200,
        message: "User deleted successfully",
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: "No user found",
      });
    }

  } catch (err) {
    return next(err);
  }
});

// GET method for fetching a user by their email
router.get("/users", async (request, response) => {
  try {
      // Get the email from the query parameter
      const { email } = request.query;

      if (!email) {
          return response.status(400).send({ message: "Email query parameter is required." });
      }

      // Fetch the user by email
      const user = await User.findOne({ email: email });

      // Check if the user exists
      if (!user) {
          return response.status(404).send({ message: "User not found." });
      }

      // Send the user data as response
      response.status(200).send(user);

  } catch (error) {
      response.status(500).send({ message: "Error fetching user by email.", error });
  }
});
export default router;
