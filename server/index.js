import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import taxRoute from "./routes/routes.js"
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
})

// middlewares
app.use(express.json());
app.use("/api/tax", taxRoute);


app.listen(8000, () => {
  connect();
  console.log("Connected to backend.");
});
