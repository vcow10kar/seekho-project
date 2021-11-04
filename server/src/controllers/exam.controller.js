const express = require("express");

const router = express.Router();

const Exam = require("../models/exam.model");


//CREATE A EXAM

router.post("/", async (req, res) => {

    let exam = await Exam.create(req.body);

    res.status(201).send({ exam });
});


// GET ALL EXAMS

router.get("/", async (req, res) => {

    let exams = await Exam.find().lean();

    res.status(200).send({ exams });
});


// GET AN EXAM BY ID

router.get("/:id", async (req, res) => {

    let exam = await Exam.findById(req.params.id).lean();

    res.status(200).send({ exam });
});


// UPDATE A EXAM BY ID
router.patch("/:id", async (req, res) => {
    let exam = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).send({ exam });

});

// DELETE A EXAM BY ID

router.delete("/:id", async (req, res) => {


    let deletedexam = await Exam.findByIdAndDelete(req.params.id);

    res.status(200).send({ deletedexam });

});

module.exports = router;