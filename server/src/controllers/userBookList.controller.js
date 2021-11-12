const express = require("express");

const router = express.Router();

const UserBookList = require("../models/userBookList.model");
const ReadingList = require("../models/readingList.model");

// Creating a userBook_list

router.post("/", async (req, res) => {
  let userBookList = await UserBookList.create(req.body);
  res.status(200).send({ userBookList });
});

// Getting all userBook_lists

router.get("/", async (req, res) => {
  let userBookLists = await UserBookList.findById(req.params.id)
  
  res.status(200).send({ userBookLists });
});

// Getting a userBook_list by id

router.get("/:id", async (req, res) => {
  let userBookList = await UserBookList.findById(req.params.id).populate('user')
  .populate({path: 'book', populate: {path: "category"}})
  .populate({path: 'academic'})
  .lean().exec();

  //console.log(userBookList);
  res.status(200).send({ userBookList });
});


//Check if book is present in book list 
router.get("/checkBookList/:id", async (req, res) => {

  let bookList = await UserBookList.count({_id: req.params.id, book: {$in: [req.body.book]}});

  if(bookList === 0) {
    res.status(200).send({ message: false });
  } else {
    res.status(400).send({message: true});
  }
});


//Updating Book List by Id

router.patch("/:id/books", async (req, res) => {

  let bookList;
  bookList = await UserBookList.findById(req.params.id);
  bookList = await UserBookList.count({_id: req.params.id, book: {$in: [req.body.book]}});

  if(bookList === 0) {
    bookList = await UserBookList.findByIdAndUpdate(
      req.params.id,
      {$push: {book: req.body.book}}
    ).exec();

    res.status(200).send({ bookList });
  } else {
    console.log("Book present");
    res.status(400).send({message: "Book already in User Book List"});
  }
});

// Deleting a userBook_list by id

router.delete("/:id", async (req, res) => {
  let userBookList = await UserBookList.findByIdAndDelete(req.params.id);
  res.status(200).send({ userBookList });
});
module.exports = router;
