const express = require("express");

const resourcesRouter = require("../resources/resources-router");
const tasksRouter = require("../tasks/tasks-router");

const db = require("../data/db-helper");

const router = express.Router();

//Get all projects
router.get("/", (req, res) => {
    db.getProjects()
        .then(projects => {
            res.status(200).json({ projects: projects })
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

//Get a specific project - not part of mvp
router.get("/:id", (req, res) => {
    res.status(200).send("<h1>This would be a specific project</h1>");
});

//Post a project
router.post("/", (req, res) => {
    const project = req.body;

    db.addProject(project)
        .then(response => {
            res.status(201).json({ message: "Project added!" })
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

router.use("/:id/resources", setId, resourcesRouter);
router.use("/:id/tasks", setId, tasksRouter);

function setId(req, res, next) {
    req.projectId = req.params.id;
    next();
}

module.exports = router;
