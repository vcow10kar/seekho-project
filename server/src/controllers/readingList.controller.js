const express = require("express");

const router = express.Router();

const ReadingList = require("../models/readingList.model");

// Creating a reading_list

router.post("/", async (req, res) => {
  let readingList = await ReadingList.create(req.body);
  res.status(200).send({ readingList });
});

// Getting all reading_lists

router.get("/", async (req, res) => {
  let readingLists = await ReadingList.find().lean().exec();
  res.status(200).send({ readingLists });
});

// Getting a reading_list by id

router.get("/:id", async (req, res) => {
  let readingList = await ReadingList.findById(req.params.id)
  .populate('user')
  .populate({path: 'book'})
  .populate({path: 'academic'})
  .lean().exec();

  console.log(readingList);
  res.status(200).send({ readingList });
});

// Updating a reading_list by id

router.patch("/:id/books", async (req, res) => {

  let readingList;
  readingList = await ReadingList.findById(req.params.id);
  readingList = await ReadingList.count({_id: req.params.id, book: {$in: [req.body.book]}});

  if(readingList === 0) {
    readingList = await ReadingList.findByIdAndUpdate(
      req.params.id,
      {$push: {book: req.body.book}}
    ).exec();

    res.status(200).send({ readingList });
  } else {
    console.log("Book present");
    res.status(400).send({message: "Book already in Reading List"});
  }
});

// Deleting a reading_list by id

router.delete("/:id", async (req, res) => {
  let readingList = await ReadingList.findByIdAndDelete(req.params.id);
  res.status(200).send({ readingList });
});
module.exports = router;
