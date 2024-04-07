import express, { response } from "express";
import TaxModel from "../models/TaxModel.js";

const router = express.Router();

// Tax API Route for POST method, For creating a new tax model
router.post("/post", async (req, res) => {
  const newTaxModel = new TaxModel(req.body);
  try {
    const savedTaxModel = await newTaxModel.save();
    res.status(200).json(savedTaxModel);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});


//Tax API Route for GETALL method, getting all the tax models from the database
router.get("/get", async (req, res) => {
  try {
    const taxModels = await TaxModel.find();
    res.status(200).json(taxModels);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});


//Tax API Route for GET method, getting single tax model from the database
router.get("/get/:id", async (req, res) => {
  try {
    const taxModel = await TaxModel.findById(req.params.id);
    res.status(200).json(taxModel);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//Tax API Route for PUT method, For updating tax model
router.put("/update/:id", async (req, res) => {
  try {
    const updatedTaxModel = await TaxModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTaxModel);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// Tax API Route for DELETE method, For deleting particular tax model from database
router.delete("/delete/:id", async (req, res) => {
  try {
    await TaxModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted.");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

export default router;
