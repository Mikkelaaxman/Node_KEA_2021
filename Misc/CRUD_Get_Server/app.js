"use strict"
const express = require("express");
const app = express();

let recipe = [
    {
        id: 1,
        title: "pizza", 
        numberOfIngredients: 2,
        timeToMake: "1 min"
    },
    {
        id: 2,
        title: "burger",
        numberOfIngredients: 2,
        rating: 1
    }

];

const AUTOINCREMENT = recipe.length;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/recipe", (req, res) => {
    res.send({recipe: recipe});
});

app.get("/recipe/:id", (req, res) => {
    const recipeId = Number(req.params.id);     //Cast to number because id in URL will always be string

    const recipeFound = recipe.find(entry => entry.id === recipeId);
    res.send({data : recipeFound});
});

app.listen(8080);