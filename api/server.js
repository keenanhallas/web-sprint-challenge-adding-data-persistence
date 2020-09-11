const express = require("express");
const helmet = require("helmet");

//import routes here?

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/", (req, res) => {
    res.status(200).send("<h1>Data persistence sprint challenge!</h1>");
});

module.exports = server;