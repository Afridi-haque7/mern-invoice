import express, { response } from "express";
import ServiceModel from "../models/ServiceModel.js";

const router = express.Router();


//Service API Route for POST method, For creating a new service model
router.post("/post", async (req, res) => {
  const newServiceModel = new ServiceModel(req.body);
  console.log(newServiceModel);
  try {
    const savedServiceModel = await newServiceModel.save();
    res.status(200).json(savedServiceModel);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});


//Service API Route for GETALL method, For getting all service models from database
router.get("/get", async (req, res) => {
  try {
    const serviceModels = await ServiceModel.find();
    res.status(200).json(serviceModels);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});


//Service API Route for GET method, For getting a particular service model from database
router.get("/get/:id", async (req, res) => {
  try {
    const serviceModel = await ServiceModel.findById(req.params.id);
    res.status(200).json(serviceModel);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//Service API Route for PUT method, For updating an existing service model
router.put("/update/:id", async (req, res) => {
  try {
    const updatedServiceModel = await ServiceModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedServiceModel);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//Service API Route for DELETE method, For deleting an existing service model
router.delete("/delete/:id", async (req, res) => {
  try {
    await ServiceModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted.");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});


export default router;