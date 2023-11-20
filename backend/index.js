import express from "express";
import cors from "cors";
import logger from "morgan";
import mongoose from "mongoose";
import config from "./config.js";
import postsRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT || 3031;
const dbUrl = config.dbUrl;

const options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDb = async () => {
  try {
    await mongoose.connect(dbUrl, options);
    console.log('Successfully connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
};

connectToDb();

app.use(logger("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", postsRouter);

app.listen(port, () => {
  console.log("Running on " + port);
});

export default app;
