const express = require("express");

const db = require("../data/db-helper");

const router = express.Router();

//Get all resources for a project
router.get("/", (req, res) => {
    const projectId = req.projectId;
    
    db.getResources(projectId)
        .then(resources => {
            res.status(200).json({ resources: resources })
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

//Get a specific resource - not part of mvp
router.get("/:id", (req, res) => {
    res.status(200).send("<h1>This would be a specific resource</h1>");
});

//Post a new resource for a project
router.post("/", (req, res) => {
    const resource = req.body;

    db.addResource(resource)
        .then(response => {
            res.status(201).json({ message: "Resource added!" })
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

module.exports = router;