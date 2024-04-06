import mongoose from "mongoose";
const { Schema } = mongoose;


const ServiceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  disType: {
    type: String,
    required: true,
  },
  disValue: {
    type: Number,
    required: true,
  },
  tax: {
    type: String,
    required: true,
  }
});

export default mongoose.model("ServiceModel", ServiceSchema);