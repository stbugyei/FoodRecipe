const path = require("path");
const express = require("express");
const cors = require('cors');

// Load from env vars
const port = process.env.PORT || 5000;

const compression = require("compression");

// duration to cache the resource
const duration = 31536000

const app = express(); // create express app


let setCache = function (req, res, next) {

    // catch for GET requests
    if (req.method === 'GET') {
        res.set('Cache-control', `public, max-age=${duration}`)
    } else {
        // catch for other requests 
        res.set('Cache-control', `no-store`)
    }
    // call next() to pass on the request
    next()
}

app.use(setCache)

app.use(compression());


// add middlewares
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.static(path.join(__dirname, "..", "build"), {
    maxAge: duration
}))

app.use(express.static("public"));


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


// start express server on port 5000
app.listen(port, () => {
    console.log("server started on port 5000");
});

