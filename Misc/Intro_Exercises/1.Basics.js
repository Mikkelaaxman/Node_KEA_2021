// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constants

const firstName = "Anders";
const lastName = "Latif";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

// concatenation
console.log("My first name is " + firstName + " and my last name is " + lastName);

// string literal
console.log(`My first name is ${firstName} and my last name is ${lastName}`);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2

const thisYear = parseInt(year) + number;
console.log(thisYear);

const currentYear = Number(year) + number;
console.log(currentYear);

console.log(Number("123abc"));
console.log(parseInt("123abc456"));

console.log(+ year + number);


// --------------------------------------
