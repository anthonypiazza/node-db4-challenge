
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', recipes => {
        recipes.increments('id');
        recipes.text('recipe_name')
            .notNullable();
    })
    .createTable('ingredients', ingredients => {
        ingredients.increments('id');
        ingredients.text('ingredient_name')
            .notNullable();
        ingredients.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

    })
    .createTable('instructions', instruct => {
        instruct.increments();
        instruct.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        instruct.integer('step_number')
            .unsigned()
            .notNullable();
        instruct.text('description')
            .notNullable();
    })
    .createTable('linked', linked => {
        linked.increments();
        linked.integer('ingredient_id')
            //positive integer
            .unsigned()
            //required
            .notNullable()
            //references primary key
            .references('id')
            //in ingredients table
            .inTable('ingredients')
            //what happens if the recipe is deleted -- 
            .onDelete('CASCADE')
            //what happens if the recipe is updated -- 
            .onUpdate('CASCADE');
        linked.integer('recipe_id')
            //positive integer
            .unsigned()
            //required
            .notNullable()
            //references primary key
            .references('id')
            //in recipe table
            .inTable('recipes')
            //what happens if the recipe is deleted -- 
            .onDelete('CASCADE')
            //what happens if the recipe is updated -- 
            .onUpdate('CASCADE');
        linked.float('quantity')
            .unsigned()
            .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('linked')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
