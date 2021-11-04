const express = require("express");

const router = express.Router();

const Grade = require("../models/grade.model");


//CREATE A GRADE

router.post("/", async (req, res) => {

    let grade = await Grade.create(req.body);

    res.status(201).send({ grade });
});


// GET ALL GRADES

router.get("/", async (req, res) => {

    let grades = await Grade.find().lean();

    res.status(200).send({ grades });
});


// GET A GRADE BY ID

router.get("/:id", async (req, res) => {

    let grade = await Grade.findById(req.params.id).lean();

    res.status(200).send({ grade });
});


// UPDATE A GRADE BY ID
router.patch("/:id", async (req, res) => {
    let grade = await Grade.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).send({ grade });

});

// DELETE A GRADE BY ID

router.delete("/:id", async (req, res) => {


    let deletedgrade = await Grade.findByIdAndDelete(req.params.id);

    res.status(200).send({ deletedgrade });

});

module.exports = router;