import express, { response } from "express";
import Model from "../models/Model.js";

const router = express.Router();

//CREATE
router.post("/post", async (req, res) => {
  const newModel = new Model(req.body);
  // console.log(newModel);
  try {
    const savedModel = await newModel.save();
    res.status(200).json(savedModel);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

//GETALL
router.get("/get", async (req, res) => {
  try {
    const models = await Model.find();
    res.status(200).json(models);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});


//GET
router.get("/get/:id", async (req, res) => {
  try {
    const model = await Model.findById(req.params.id);
    res.status(200).json(model);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//UPDATE
router.put("/update/:id", async (req, res) => {
  try {
    const updatedModel = await Model.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedModel);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// DELETE
router.delete("/delete/:id", async (req, res) => {
  try {
    await Model.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted.");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

export default router;
