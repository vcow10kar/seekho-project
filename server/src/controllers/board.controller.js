const express = require("express");

const router = express.Router();

const Board = require("../models/board.model");


//CREATE A BOARD

router.post("/", async (req, res) => {

    let board = await Board.create(req.body);

    res.status(201).send({ board });
});


// GET ALL BOARDS

router.get("/", async (req, res) => {

    let boards = await Board.find().lean();

    res.status(200).send({ boards });
});


// GET A BOARD BY ID

router.get("/:id", async (req, res) => {

    let board = await Board.findById(req.params.id).lean();

    res.status(200).send({ board });
});


// UPDATE A BOARD BY ID
router.patch("/:id", async (req, res) => {
    let board = await Board.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).send({ board });

});

// DELETE A BOARD BY ID

router.delete("/:id", async (req, res) => {


    let deletedboard = await Board.findByIdAndDelete(req.params.id);

    res.status(200).send({ deletedboard });

});

module.exports = router;