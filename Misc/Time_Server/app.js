"use strict";

//importing express  
const express = require("express");
const app = express();

//Create global variable Date using js date. i feel global is better than creating it every method but might be wrong. 
const d = new Date();


// For one line const app = require("express")();
// could also be import {  } from "module"; but doesnt work with node
            //the callback (response from client)
app.get("/", (request, response) => {
    response.send("Go to /day, /month or /time");
});

//get date. Starts at 1
app.get("/day", (req, res) => {
    const date = {
        day: d.getDate()
    };
    res.send(date);
});

//get month. Starts at 0 so we need to "correct"
app.get("/month", (req, res) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = {
        currentMonth: months[d.getMonth()]
    };
    res.send(month);
});

//get Time
app.get("/time", (req, res) => {
    const time = {
        hours: d.getHours(),
        minutes: d.getMinutes(),
        seconds: d.getSeconds(),
      //  UTCHours: d.getUTCHours() gives -1 hour, so london time? 
    };
    res.send(time);
});

//Starting server and hanging
app.listen(8080);
