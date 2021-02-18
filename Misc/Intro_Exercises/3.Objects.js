// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 

console.log(myObj.message); // dot notation

console.log(myObj["message"]); // square notation

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const Mikkel = {
    name: "Mikkel Åxman",
    age: 30
};

console.log(Mikkel);

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true;
stackOverflow.exercise = 3;
console.log(stackOverflow);

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
console.log(thisSong);

delete thisSong.description;

thisSong.about = "Just a tribute";

console.log(thisSong);
// --------------------------------------


