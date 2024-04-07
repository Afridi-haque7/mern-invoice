import mongoose from "mongoose";
const { Schema } = mongoose;

// Creating a database schema object for Service Details
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
  taxType: {
    type: String,
    required: true,
  },
  taxRate: {
    type: Number,
    required: true,
  }
});

// Exporting the service schema
export default mongoose.model("ServiceModel", ServiceSchema);