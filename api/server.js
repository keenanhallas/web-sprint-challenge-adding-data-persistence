const express = require("express");
const helmet = require("helmet");
const db = require("../data/connection");

//import routes here?
const projectsRouter = require("../projects/projects-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).send("<h1>Data Persistence Sprint Challenge!</h1>");
});

server.get("/resources", (req, res) => {
    db("resources")
        .then(resources => {
            res.status(200).json({ resources: resources });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        })
});

server.get("/tasks", (req, res) => {
    db("tasks")
        .then(tasks => {
            res.status(200).json({ tasks: tasks });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        })
});

server.use("/projects", projectsRouter);

module.exports = server;