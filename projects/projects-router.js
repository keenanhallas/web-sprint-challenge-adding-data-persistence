const express = require("express");

const resourcesRouter = require("../resources/resources-router");
const tasksRouter = require("../tasks/tasks-router");

const db = require("../data/db-helper");

const router = express.Router();

//Get all projects
router.get("/", (req, res) => {
    res.status(200).send("<h1>This will be a list of projects</h1>");
});

//Get a specific project - not part of mvp
router.get("/:id", (req, res) => {
    res.status(200).send("<h1>This would be a specific project</h1>");
});

//Post a project
router.post("/", (req, res) => {
    res.status(200).send("<h1>This will be where you post projects</h1>")
});

router.use("/:id/resources", resourcesRouter);
router.use("/:id/tasks", tasksRouter);

module.exports = router;
