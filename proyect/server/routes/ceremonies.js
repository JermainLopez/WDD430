const sequenceGenerator = require("./sequenceGenerator");
const Ceremony = require("../models/ceremony");
var express = require("express");

var router = express.Router();

router.get("/", (req, res, next) => {
    Ceremony.find()
        .populate("group")
        .then((ceremonies) => {
            res.status(200).json({
                message: "Retrieved ceremonies from database.",
                ceremonies: ceremonies,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "There was a problem retrieving ceremonies from the database.",
                error: err,
            });
        });
});

router.post("/", (req, res, next) => {
    const maxCeremonyId = sequenceGenerator.nextId("ceremonies");

    const ceremony = new Ceremony({
        id: maxCeremonyId,
        name: req.body.name,
        description: req.body.description,
        phone: req.body.phone,
        imageUrl: req.body.imageUrl,
        group: req.body.group,
    });
    ceremony
        .save()
        .then((createdCeremony) => {
            res.status(201).json({
                message: "Ceremony added successfully.",
                ceremony: createdCeremony,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "There was a problem creating the Ceremony.",
                error: err,
            });
        });
});

router.put("/:id", (req, res, next) => {
    Ceremony.findOne({ id: req.params.id })
        .then((ceremony) => {
            ceremony.name = req.body.name;
            ceremony.description = req.body.description;
            ceremony.phone = req.body.phone;
            ceremony.imageUrl = req.body.imageUrl;
            ceremony.group = req.body.group;

            Ceremony.updateOne({ id: req.params.id }, ceremony)
                .then((result) => {
                    res.status(204).json({
                        message: "Ceremony updated successfully",
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "There was a problem updating the ceremony.",
                        error: err,
                    });
                });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Ceremony not found.",
                error: err,
            });
        });
});

router.delete("/:id", (req, res, next) => {
    Ceremony.findOne({ id: req.params.id })
        .then((ceremony) => {
            Ceremony.deleteOne({ id: req.params.id })
                .then((result) => {
                    res.status(204).json({
                        message: "Ceremony deleted successfully",
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "There was a problem deleting the Ceremony.",
                        error: err,
                    });
                });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Ceremony not found.",
                error: err,
            });
        });
});

module.exports = router;