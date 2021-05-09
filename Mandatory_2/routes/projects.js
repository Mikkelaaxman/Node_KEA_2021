const router = require("express").Router();

const projects = [{
    
        title: "This website using Node.js - Mandatory 2",
        description: "Personal portfolio implemented in Node.js with routes and improved readability",
        startDate: new Date("2021"),
        endDate: new Date("2021"),
        gitLink: "https://github.com/Mikkelaaxman/Node_KEA_2021/tree/main/Mandatory_2"
    },        
    {
        title: "Website using Node.js - Mandatory 1",
        description: "Notes on what we have learned during class implemented in Node.js",
        startDate: new Date("2021"),
        endDate: new Date("2021"),
        gitLink: "https://github.com/Mikkelaaxman/Node_KEA_2021/tree/main/Mandatory_1"
    },
    {
        title: "Co2 Calculator for Grønrejs.dk",
        description: "Javascript and google maps API used to calculate and compare Co2",
        startDate: new Date("2021"),
        endDate: new Date("2021"),
        gitLink: "https://github.com/Mikkelaaxman/GroenrejsCo2"
    },
    {
        title: "Programming Exam 2020 - Java, Spring",
        description: "24 hour Exam in Java using Spring, JPA and showcasing inheritance and MVC",
        startDate: new Date("2020"),
        endDate: new Date("2020"),
        gitLink: "https://github.com/Mikkelaaxman/Exam2020"
    }
    
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};