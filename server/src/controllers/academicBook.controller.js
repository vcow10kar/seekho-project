const express = require('express');

const router = express.Router();

const AcademicBook = require('../models/academicBook.model');

//CREATE AN ACADEMIC BOOK
router.post("/", async (req, res) => {
    let book = await AcademicBook.create(req.body);
    res.status(201).send({ book });
});

//GET ALL ACADEMIC BOOKs
router.get("/", async (req, res) => {
    let books = await AcademicBook.find().lean();
    res.status(200).send(books);
})

//GET AN ACADEMIC BOOK BY ID
router.get("/:id", async (req, res) => {
    let book = await AcademicBook.findById(req.params.id).lean();
    res.status(200).send({ book });
})

//UPDATE AN ACADEMIC BOOK BY ID
router.patch('/:id', async (req, res) => {
    let book = await AcademicBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send({ book });
})

//DELETE AN ACADEMIC BOOK
router.delete('/:id', async (req, res) => {
    let deleteBook = await AcademicBook.findByIdAndDelete(req.params.id);
    res.status(200).send({ deleteBook });
})


//Get Books by Subjects

router.get("/subject/:id", async(req, res) => {
    let books = await AcademicBook.find({
        subject_id: { $eq: req.params.id },
      }).lean().exec();

    res.status(200).send({books});
})

module.exports = router;