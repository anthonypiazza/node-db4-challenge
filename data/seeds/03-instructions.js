
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, recipe_id: '1', step_number: 1, description: 'Step 1'},
        {id: 2, recipe_id: '1', step_number: 2, description: 'Step 2'},
        {id: 3, recipe_id: '1', step_number: 3, description: 'Step 3'}
      ]);
    });
};
