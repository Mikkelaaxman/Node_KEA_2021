const express = require("express");
const app = express();

app.get("/search", (req, res)=> {

    res.send(req.query);
});

app.get("/telegram/:message", (req, res)=> {
    const message = req.params.message;
    res.send(message);
});

app.get("/telegram/:message/:name", (req, res)=> {
    const message = req.params.message;
    res.send({message: message} );
});

app.post("/anything", (req, res)=> {
    send({});
})

app.listen(8080);