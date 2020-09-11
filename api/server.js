const express = require("express");
const helmet = require("helmet");

//import routes here?
const projectsRouter = require("../projects/projects-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).send("<h1>Data Persistence Sprint Challenge!</h1>");
});

server.use("/projects", projectsRouter);

module.exports = server;