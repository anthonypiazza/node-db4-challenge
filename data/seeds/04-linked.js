
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('linked').del()
    .then(function () {
      // Inserts seed entries
      return knex('linked').insert([
        {id: 1, ingredient_id: 1, recipe_id: 1, quantity: 1.54},
        {id: 2, ingredient_id: 2, recipe_id: 1, quantity: 2.54},
        {id: 3, ingredient_id: 3, recipe_id: 1, quantity: 3.54},
        {id: 4, ingredient_id: 1, recipe_id: 2, quantity: 3.00}
      ]);
    });
};
