import mongoose from "mongoose";
const { Schema } = mongoose;

// Creating database Schema for storing Tax details in the database
const TaxSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

// Exporting the tax schema
export default mongoose.model("TaxModel", TaxSchema);