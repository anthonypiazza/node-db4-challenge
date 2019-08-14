
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          id: 1, 
          ingredient_name: 'Chicken', 
          recipe_id: 1
        },
        {
          id: 2, 
          ingredient_name: 'Broth', 
          recipe_id: 1
        },
        {
          id: 3, 
          ingredient_name: 'Vegetables', 
          recipe_id: 1
        },
        {
          id: 4, 
          ingredient_name: 'Flour', 
          recipe_id: 1
        },
        {
          id: 5, 
          ingredient_name: 'Avocado', 
          recipe_id: 3
        },
        {
          id: 6, 
          ingredient_name: 'Toast', 
          recipe_id: 3
        },
        {
          id: 7, 
          ingredient_name: 'Seeds', 
          recipe_id: 3
        },
        {
          id: 8, 
          ingredient_name: 'Ham', 
          recipe_id: 2
        },
        {
          id: 9, 
          ingredient_name: 'Eggs', 
          recipe_id: 2
        },
      ]);
    });
};
