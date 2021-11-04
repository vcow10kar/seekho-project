const express = require("express");
const router = express.Router();
const Genre = require("../models/genre.model");

/*******  Post a Genre  ********/

router.post("/", async (req, res) => {
  let genre = await Genre.create(req.body);
  res.status(201).send({ genre });
});

/********** Get all Genre *********/

router.get("/", async (req, res) => {
  let genre = await Genre.find().lean().exec();
  res.status(200).send({ genre });
});

/******** fetch genre by genre_id *********/

router.get("/:id", async (req, res) => {
  let genre = await Genre.findById(req.params.id).lean().exec();
  res.status(200).send({ genre });
});

/*********  update genre by genre_id  **********/
router.patch("/:id", async (req, res) => {
  let genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).send({ genre });
});

// Delete genre by genre_id

router.delete("/:id", async (req, res) => {
  let genreDeleted = await Genre.findByIdAndDelete(req.params.id);
  res.status(200).send({ genreDeleted });
});

module.exports = router;
