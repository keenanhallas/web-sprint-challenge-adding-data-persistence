const db = require("../data/connection");

module.exports = {
    getProjects,
    addProject
    // getRecources,
    // addResource,
    // getTasks,
    // addTasks
};

function getProjects() {
    return db("projects");
}

function addProject(project) {
    return db("projects")
        .insert(project);
}