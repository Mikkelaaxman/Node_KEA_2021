"use strict";

//importing express  
const express = require("express");
const app = express();

//Create global variable Date using js date
const d = new Date();


// For one line const app = require("express")();
// could also be import {  } from "module"; but doesnt work with node
            //the callback (response from client)
app.get("/", (request, response) => {
    response.send({});
});

// create a new route on the endpoint me that returns a json object that represents you
app.get("/me", (req, res) => {
    const me = {
        codingNoob: true
    };
    res.send(me);
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
      //  UTCHours: d.getUTCHours() giver -1 time, så london time? 
    };
    res.send(time);
});

//Starting server and hanging
app.listen(8080);
