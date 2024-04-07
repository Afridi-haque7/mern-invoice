import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import taxRoute from "./routes/tax.js"
import serviceRoute from "./routes/service.js"
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

// Connecting to server
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

// Database disconnection message
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
})

// middlewares
app.use(express.json());
app.use("/api/tax", taxRoute);
app.use("/api/service", serviceRoute);


// Server hosted at localhost:8000 port
app.listen(8000, () => {
  connect();
  console.log("Connected to backend.");
});
