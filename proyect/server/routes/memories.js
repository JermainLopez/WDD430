const sequenceGenerator = require("./sequenceGenerator");
const Memory = require("../models/memory");
var express = require("express");

var router = express.Router();

router.get("/", (req, res, next) => {
    Memory.find()
        .populate("group")
        .then((memories) => {
            res.status(200).json({
                message: "Retrieved memories from database.",
                memories: memories,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "There was a problem retrieving memories from the database.",
                error: err,
            });
        });
});

router.post("/", (req, res, next) => {
    const maxMemoryId = sequenceGenerator.nextId("memories");

    const memory = new Memory({
        id: maxMemoryId,
        name: req.body.name,
        description: req.body.description,
        phone: req.body.phone,
        imageUrl: req.body.imageUrl,
        group: req.body.group,
    });
    memory
        .save()
        .then((createdMemory) => {
            res.status(201).json({
                message: "Memory added successfully.",
                memory: createdMemory,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "There was a problem creating the Memory.",
                error: err,
            });
        });
});





router.put("/:id", (req, res, next) => {
    Memory.findOne({ id: req.params.id })
        .then((memory) => {
            memory.name = req.body.name;
            memory.description = req.body.description;
            memory.phone = req.body.phone;
            memory.imageUrl = req.body.imageUrl;
            memory.group = req.body.group;

            Memory.updateOne({ id: req.params.id }, memory)
                .then((result) => {
                    res.status(204).json({
                        message: "Memory updated successfully",
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "There was a problem updating the memory.",
                        error: err,
                    });
                });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Memory not found.",
                error: err,
            });
        });
});

router.delete("/:id", (req, res, next) => {
    Memory.findOne({ id: req.params.id })
        .then((memory) => {
            Memory.deleteOne({ id: req.params.id })
                .then((result) => {
                    res.status(204).json({
                        message: "Memory deleted successfully",
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "There was a problem deleting the Memory.",
                        error: err,
                    });
                });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Memory not found.",
                error: err,
            });
        });
});

module.exports = router;