import express, { response } from "express";
import TaxModel from "../models/TaxModel.js";

const router = express.Router();

//CREATE
router.post("/post", async (req, res) => {
  const newTaxModel = new TaxModel(req.body);
  // console.log(newModel);
  try {
    const savedTaxModel = await newTaxModel.save();
    res.status(200).json(savedTaxModel);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

//GETALL
router.get("/get", async (req, res) => {
  try {
    const taxModels = await TaxModel.find();
    res.status(200).json(taxModels);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});


//GET
router.get("/get/:id", async (req, res) => {
  try {
    const taxModel = await TaxModel.findById(req.params.id);
    res.status(200).json(taxModel);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//UPDATE
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

// DELETE
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
