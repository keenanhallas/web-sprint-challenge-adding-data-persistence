const server = require("./api/server");

const PORT = process.env.PORT || 3334;

server.listen(PORT, () => console.log("server up..."));