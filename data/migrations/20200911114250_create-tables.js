
exports.up = function(knex) {
    return knex.schema
        .createTable("projects", tbl => {
            tbl.increments("project_id");
            tbl.string("name", 128)
                .notNullable();
            tbl.string("description");
            tbl.boolean("completed").default(false);
        })
        .createTable("resources", tbl => {
            tbl.increments("resource_id");
            tbl.string("name", 128)
                .notNullable();
            tbl.string("description");
        })
        .createTable("tasks", tbl => {
            tbl.increments("task_id");
            tbl.integer("project_id")
                .unsigned()
                .notNullable()
                .references("project_id")
                .inTable("projects")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.integer("step_number")
                .unsigned()
                .notNullable();
            tbl.string("description")
                .notNullable();
            tbl.string("notes");
            tbl.integer("resource_id")
                .unsigned()
                .notNullable()
                .references("resource_id")
                .inTable("resources")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.boolean("completed").default(false);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects");
};