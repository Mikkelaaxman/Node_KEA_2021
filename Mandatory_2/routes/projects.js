const router = require("express").Router();

const projects = [{
        title: "Website using Node.js - Mandatory 1",
        description: "Notes on what we have learned during class implemented in Node.js",
        startDate: new Date("2021"),
        endDate: new Date("2021"),
        gitLink: "https://github.com/Mikkelaaxman/Node_KEA_2021/tree/main/Mandatory_1"
    },
    {
        title: "This website using Node.js - Mandatory 2",
        description: "Personal portfolio implemented in Node.js with routes and improved readability",
        startDate: new Date("2021"),
        endDate: new Date("2021"),
        gitLink: ""
    },
    {
        title: "Express wide web",
        description: "Diffrent technics implemented in Node.js",
        startDate: new Date("2021"),
        endDate: new Date("2021"),
        gitLink: "https://github.com/victorwp288/kea_node/tree/main/4._Express_Wide_Web"
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};