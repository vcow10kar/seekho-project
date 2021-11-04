const express = require("express");

const router = express.Router();

const UserBookList = require("../models/userBookList.model");

// Creating a userBook_list

router.post("/", async (req, res) => {
  let userBookList = await UserBookList.create(req.body);
  res.status(200).send({ userBookList });
});

// Getting all userBook_lists

router.get("/", async (req, res) => {
  let userBookLists = await UserBookList.find().lean().exec();
  res.status(200).send({ userBookLists });
});

// Getting a userBook_list by id

router.get("/:id", async (req, res) => {
  let userBookList = await UserBookList.findById(req.params.id).lean().exec();
  res.status(200).send({ userBookList });
});

// Updating a userBook_list by id

// router.patch("/:id", async (req, res) => {
//   let userBookList = await UserBookList.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     {
//       new: true,
//     }
//   );

//   res.status(200).send({ userBookList });
// });

// Deleting a userBook_list by id

router.delete("/:id", async (req, res) => {
  let userBookList = await UserBookList.findByIdAndDelete(req.params.id);
  res.status(200).send({ userBookList });
});
module.exports = router;
