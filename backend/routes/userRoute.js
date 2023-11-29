import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fileUpload from 'express-fileupload';
import crypto from 'crypto';
import sgMail from '@sendgrid/mail';
import User from "../models/User.js";
import JobPosting from "../models/JobPosting.js";


const router = express.Router();

router.use(fileUpload());


// Filtering and searching for Job Posting
// multiple choose: all support except the vacancy announcement type
// http://localhost:3031/job-postings/filter?agency=Department%20of%20Defense&bureau=Defense%20Commissary%20Agency&appointment_type=Permanent&vacancy_announcement_types=NON-DE&grade=7&job_series_number=1144&job_series_title=Commissary Management&announcement_locations=HI&announcement_locations=CA
router.get('/job-postings/filter', async (req, res) => {
  try {
    const query = {};

    // Trasfer non-array object to array
    function toArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    
    // for agency, bureau, appointment_type 和 job_series_title use Regular Expression
    ['agency', 'bureau', 'appointment_type', 'job_series_title'].forEach(field => {
      if (req.query[field] && req.query[field] !== 'ALL') {
        query[field] = { $in: toArray(req.query[field]).map(item => new RegExp(item, 'i')) };
      }
    });
    
    // for grade 和 job_series_number use number directly
    ['grade', 'job_series_number'].forEach(field => {
      if (req.query[field] && req.query[field] !== 'ALL') {
        const values = toArray(req.query[field]).map(item => parseInt(item, 10)).filter(item => !isNaN(item));
        if (values.length > 0) {
          query[field] = { $in: values };
        } else {
          return res.status(400).send({ message: `Invalid ${field} value provided.` });
        }
      }
    });
    
    // for the state, use regular expression to match it with the end of the location string
    if (req.query.announcement_locations && req.query.announcement_locations !== 'ALL') {
      let locations = req.query.announcement_locations;
      if (!Array.isArray(locations)) {
        locations = [locations];
      }
      query.announcement_locations = { $in: locations.map(loc => new RegExp('\\b' + loc.trim() + '\\b', 'i')) };
    }
    
    // Special handling for vacancy_announcement_types with 'ALL', 'DE', and 'Non-DE' options
    if (req.query.vacancy_announcement_types) {
      if (req.query.vacancy_announcement_types === 'DE') {
        query.vacancy_announcement_types = { $regex: '\\bDE\\b', $options: 'i' };
      } else if (req.query.vacancy_announcement_types === 'NON-DE') {
        query.vacancy_announcement_types = { $not: { $regex: '\\bDE\\b', $options: 'i' } };
      }
    }
      // If 'ALL' is selected, we don't need to filter by this field
    

    console.log(query);
    const jobPostings = await JobPosting.find(query);
    const filteredJobPostings = jobPostings.map(posting => ({
      agency: posting.agency,
      bureau: posting.bureau,
      appointment_type: posting.appointment_type,
      vacancy_announcement_types: posting.vacancy_announcement_types,
      job_series_number: posting.job_series_number,
      job_series_title: posting.job_series_title,
      grade: posting.grade,
      announcement_locations: posting.announcement_locations
    }));
    res.json(filteredJobPostings );
    // Convert JSON to CSV
    // const json2csvParser = new Parser();
    // const csv = json2csvParser.parse(jobPostings);

    // Set the headers to prompt for download
    // res.setHeader('Content-disposition', 'attachment; filename=job-postings.csv');
    // res.set('Content-Type', 'text/csv');

    // Send the CSV file data as a download
    // res.status(200).end(csv);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error in fetching job postings", error });
  }
});

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
  console.log("Request received:", request.body); // Log the incoming request body
  try {
    const { email } = request.body;
    
    // Generate a unique token
    const token = crypto.randomBytes(20).toString('hex');
    console.log("Generated token:", token); // Log the generated token
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 2); // token expires in 2 hours

    // create a new user instance and collect the data
    const user = new User({
      email,
      confirmationToken: token,
      tokenExpiration: expiration
    });
    console.log("User object before saving:", user); // Log the user object before saving

    // save the new user details
    await user.save();
    console.log("User saved successfully"); // Log after saving user

    // Email content
    const msg = {
      to: email,
      from: 'uscclearinitiative@gmail.com', // Replace with your verified sender
      subject: 'Complete your registration',
      text: `Click the link to set your password and complete the registration process: https://usc-clear-initiative.wm.r.appspot.com/Register?complete=true&token=${token}`,
    };
    console.log("Email message:", msg); // Log the email message content

    // Send the email
    await sgMail.send(msg);
    console.log("Email sent successfully"); // Log after attempting to send the email

    // Send a successful response
    response.status(201).send({ message: 'Check your email to complete registration.', token: token });
  } catch (error) {
    console.error("Error occurred in /users/requestEmailConfirmation route:", error); // Log any error that occurs
    response.status(500).send({ message: "Error occurred", error });
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

      // Ensure we don't change the admin status for "uscclearinitiative@gmail.com"
      if (user.email === "uscclearinitiative@gmail.com") {
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
