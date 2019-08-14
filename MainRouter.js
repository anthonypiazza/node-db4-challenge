const express = require('express');
const Recipes = require('./recipesDb');
// const Ingredients = require()

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch( err => {
        res.status(500).json({ error: "Couldn't get recipes from DB" })
    });
})


router.get('/:id', (req, res) => {
    const { id } = req.params
    Recipes.getShoppingList(id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch( err => {
        res.status(500).json({ error: "Couldn't get recipes from DB" })
    });
})

module.exports = router;