const express = require("express");

const router = express.Router();

const Book = require("../models/book.model");


//CREATE A BOOK

router.post("/", async (req, res) => {

    let book = await Book.create(req.body);

    res.status(201).send({ book });
});


// GET ALL BOOKS

router.get("/", async (req, res) => {

    let book = await Book.find().lean();

    res.status(200).send({ book });
});


// GET A BOOK BY ID

router.get("/:id", async (req, res) => {

    let book = await Book.findById(req.params.id).lean();

    res.status(200).send({ book });
});


// UPDATE A BOOK BY ID
router.patch("/:id", async (req, res) => {
    let book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).send({ book });

});

// DELETE A BOOK BY ID

router.delete("/:id", async (req, res) => {


    let deletedbook = await Book.findByIdAndDelete(req.params.id);

    res.status(200).send({ deletedbook });

});

//Get Book by Category

router.get("/category/:id", async(req, res) => {
    let books = await Book.find({
        category: { $eq: req.params.id },
      }).lean().exec();

    res.status(200).send({books});
})

module.exports = router;