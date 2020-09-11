const express = require("express");

const db = require("../data/db-helper");

const router = express.Router();

//Get all resources for a project
router.get("/", (req, res) => {
    res.status(200).send("<h1>This will be a list of project resources</h1>");
});

//Get a specific resource - not part of mvp
router.get("/:id", (req, res) => {
    res.status(200).send("<h1>This would be a specific resource</h1>");
});

//Post a new resource for a project
router.post("/", (req, res) => {
    res.status(200).send("<h1>This will be where you post resources for a project</h1>")
});

module.exports = router;