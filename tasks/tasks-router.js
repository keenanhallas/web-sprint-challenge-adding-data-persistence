const express = require("express");

const db = require("../data/db-helper");

const router = express.Router();

//Get all tasks for a project
router.get("/", (req, res) => {
    res.status(200).send("<h1>This will be a list of project tasks</h1>");
});

//Get a specific task - not part of mvp
router.get("/:id", (req, res) => {
    res.status(200).send("<h1>This would be a specific task</h1>");
});

//Post a new task for a project
router.post("/", (req, res) => {
    res.status(200).send("<h1>This will be where you post tasks for a project</h1>")
});

module.exports = router;