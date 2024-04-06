import express, { response } from "express";
import Model from "../models/Model.js"


const router = express.Router();


//CREATE
router.post("/post", async (req, res) => {
    const newModel = new Model(req.body);
    try {
        const savedModel = await newModel.save();
        res.status(200).json(savedModel);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});

//GETALL
router.get('/getAll', (req, res) => {
    res.send('Get All API');
})

//UPDATE
router.put('/update/:id', async (req, res) => {
    try {
        const updatedModel = await Model.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(updatedModel);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
})

export default router;