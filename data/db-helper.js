const db = require("../data/connection");
const { resource } = require("../api/server");

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    getTasks,
    addTask
};

function getProjects() {
    return db("projects");
}

function addProject(project) {
    return db("projects")
        .insert(project);
}

function getResources(projectId) {
    return db
        .select("resources.name", "resources.description")
        .from("tasks")
        .join("resources", "tasks.resource_id", "=", "resources.resource_id")
        .join("projects", "tasks.project_id", "=", "projects.project_id")
        .where("projects.project_id", "=", projectId);
}

function addResource(resource) {
    return db("resources")
        .insert(resource);
}

function getTasks(projectId) {
    return db.select("step_number as Step", "description as Description", "notes as Notes")
        .from("tasks")
        .where({ project_id: projectId })
        .orderBy("step_number");
}

function addTask(task, projectId) {
    return db("tasks")
        .insert(task);
}

// function getShoppingList(recipe_id) {
//     return db
//         .select("ingredient_name as Ingredient", "quantity", "unit")
//         .from("steps")
//         .join("dishes", "dishes.id", "=", "steps.dish_id")
//         .join("ingredients", "ingredients.id", "=", "steps.ingredient_id")
//         .where({ dish_id: recipe_id });
// }