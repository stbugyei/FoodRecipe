const path = require("path");
const express = require("express");
const cors = require('cors')

const app = express(); // create express app

app.use(cors())

const port = process.env.PORT || 5000;

// add middlewares
app.use(require('prerender-node').set('prerenderToken', 'iw6KzzunJODdprq82fjU'));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


// start express server on port 5000
app.listen(port, () => {
  console.log("server started on port 5000");
});

