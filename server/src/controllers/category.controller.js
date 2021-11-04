const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

/*******  Post a Category  ********/

router.post("/", async (req, res) => {
  let category = await Category.create(req.body);
  res.status(201).send({ category });
});

/********** Get all Category *********/

router.get("/", async (req, res) => {
  let category = await Category.find().lean().exec();
  res.status(200).send({ category });
});

/******** fetch Category by category_id *********/

router.get("/:id", async (req, res) => {
  let category = await Category.findById(req.params.id).lean().exec();
  res.status(200).send({ category });
});

/*********  update Category by category_id  **********/
router.patch("/:id", async (req, res) => {
  let category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).send({ category });
});

/*********  Delete Category by category_id  **********/

router.delete("/:id", async (req, res) => {
  let categoryDeleted = await Category.findByIdAndDelete(req.params.id);
  res.status(200).send({ categoryDeleted });
});

module.exports = router;
