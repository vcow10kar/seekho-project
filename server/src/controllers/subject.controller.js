const express = require("express");

const router = express.Router();

const Subject = require("../models/subject.model");


//CREATE A SUBJECT

router.post("/", async (req, res) => {

    let subject = await Subject.create(req.body);

    res.status(201).send({ subject });
});


// GET ALL SUBJECTS

router.get("/", async (req, res) => {

    let subjects = await Subject.find().lean();

    res.status(200).send({ subjects });
});


// GET A SUBJECT BY ID

router.get("/:id", async (req, res) => {

    let subject = await Subject.findById(req.params.id).lean();

    res.status(200).send({ subject });
});


// UPDATE A SUBJECT BY ID
router.patch("/:id", async (req, res) => {
    let subject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).send({ subject });

});

// DELETE A SUBJECT BY ID

router.delete("/:id", async (req, res) => {


    let deletedsubject = await Subject.findByIdAndDelete(req.params.id);

    res.status(200).send({ deletedsubjectss });

});

module.exports = router;