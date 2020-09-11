const express = require("express");

const db = require("../data/db-helper");

const router = express.Router();

//Get all tasks for a project
router.get("/", (req, res) => {
    const projectId = req.projectId;
    
    db.getTasks(projectId)
        .then(tasks => {
            res.status(200).json({ tasks: tasks })
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

//Get a specific task - not part of mvp
router.get("/:id", (req, res) => {
    res.status(200).send("<h1>This would be a specific task</h1>");
});

//Post a new task for a project
router.post("/", (req, res) => {
    const task = req.body;
    const projectId = req.projectId;

    db.addTask(task, projectId)
        .then(response => {
            res.status(201).json({ message: "Task added!" })
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

module.exports = router;