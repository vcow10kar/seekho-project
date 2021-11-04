const express = require("express");
const router = express.Router();
const Author = require("../models/author.model");

/*******  Post an Author  ********/

router.post("/", async (req, res) => {
  let author = await Author.create(req.body);
  res.status(201).send({ author });
});

/********** Get all Author *********/

router.get("/", async (req, res) => {
  let author = await Author.find().lean().exec();
  res.status(200).send({ author });
});

/******** fetch Author by author_id *********/

router.get("/:id", async (req, res) => {
  let author = await Author.findById(req.params.id).lean().exec();
  res.status(200).send({ author });
});

/*********  update Author by author_id  **********/
router.patch("/:id", async (req, res) => {
  let author = await Author.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).send({ author });
});

/*********  Delete Author by author_id  **********/

router.delete("/:id", async (req, res) => {
  let authorDeleted = await Author.findByIdAndDelete(req.params.id);
  res.status(200).send({ authorDeleted });
});

module.exports = router;
