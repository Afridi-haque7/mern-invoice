import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";


const app = express();
dotenv.config();

const connect = async () => {
try {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Connected to mongoDb");
} catch (error) {
  throw error;
}
}

app.listen(8000, () => {
    connect()
    console.log("Connected to backend:");
});