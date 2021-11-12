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
  let readingList = await ReadingList.findById(req.params.id).populate('user')
  .populate({path: 'book', populate: {path: "category"}})
  .populate({path: 'academic'})
  .lean().exec();
  //console.log("Reading List", readingList);
  res.status(200).send({ readingList });
});

//Check if book is present in read list 
router.get("/checkReadList/:id/:bookId", async (req, res) => {
  //console.log(req.params);
  let readingList = await ReadingList.count({_id: req.params.id, book: {$in: [req.params.bookId]}});

  //console.log(readingList);

  if(readingList === 0) {
    res.status(200).send({ message: false });
  } else {
    res.status(200).send({message: true});
  }
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

router.patch("/books/:id", async (req, res) => {

  console.log("Removing a book from the reading list!");
  let readingList;
  readingList = await ReadingList.findById(req.params.id);
  readingList = await ReadingList.count({_id: req.params.id, book: {$in: [req.body.book]}});

  if(readingList > 0) {
    readingList = await ReadingList.findByIdAndUpdate(
      req.params.id,
      {$pull: {book: req.body.book}}
    ).exec();

  res.status(200).send(req.body );
  } else {
    console.log("Book not present");
    res.status(400).send({message: "Book not in Reading List"});
  }
});
module.exports = router;
