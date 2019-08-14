const db = require('./data/dbConfig');

module.exports = {
    getRecipes,
    getShoppingList,
    // getInstructions
}

function getRecipes(){
    return db('recipes');
}

// function getIngredients(){
//     return db('ingredients');
// }

function getShoppingList(recipe_id){
    return db('recipes')
        // .join('ingredients', 'recipes.id', 'ingredients.recipe_id')
        // .join('instructions', 'recipes.id', 'instructions.recipe_id')
        // .join('linked', 'recipes.id', 'linked.recipe_id')
        // .select('recipes.*', 'ingredients.ingredient_name', 'instructions.step_number', 'instructions.description')
        .where('recipes.id', '=', recipe_id, )
        .then(res => {
            const newRes = res[0]
            return db('ingredients')
            .where('ingredients.recipe_id', '=', newRes.id)
            .then(ing_res => {
                return db('linked')
                .where('linked.recipe_id', '=', newRes.id, 'and', 'linked.ingredient_id', '=', ing_res.id)
                .then(inst_res => {
                    console.log(inst_res)
                    const mapped_ing_res = ing_res.map(mapped => {
                        return {...mapped}
                    })
                    // return {...newRes, ingredients: mapped_ing_res}
                })
            })

        });
}        

// .select('recipes.name', 'ingredients.ingredients_name', 'ingredients.quantity')
