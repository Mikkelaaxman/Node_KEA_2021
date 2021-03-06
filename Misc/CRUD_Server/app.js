"use strict"
const express = require("express");
const app = express();

//tell it to parse json

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

let AUTOINCREMENT = recipe.length;

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

app.post("/recipe", (req,res) =>{
    //get entity
    const newRecipe = req.body;
    //Serverside gives it id
    newRecipe.id = ++AUTOINCREMENT;
    //send it back 
    recipe.push(newRecipe);
    res.send({data: newRecipe})
});

app.patch("/recipe/:id", (req,res) => {
    let recipeUpdated = false;
    recipe = recipe.map(entry => {
        if (recipe.id === Number(req.params.id)){
            recipeUpdated = true;
            return { ...recipe, ...req.body, id: recipe.id };
        }
        return recipe;
    })
    res.send({data: recipeUpdated});
})

app.delete("/recipe/:id", (req,res) =>{
    recipe = recipe.filter(entry => recipe.id !== Number(req.params.id));
    res.send({message: "recipe Deleted"})
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(PORT));
});