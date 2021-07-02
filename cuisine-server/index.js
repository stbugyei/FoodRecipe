const path = require("path");
const express = require("express");
const cors = require('cors');

// Load from env vars
const port = process.env.PORT || 5000;

const compression = require("compression");
const BUILD_PATH = "public";


const app = express(); // create express app

// Use prerender io middleware 
//app.use(prerender.set('prerenderToken', 'iw6KzzunJODdprq82fjU'));

//====catch policy functions static files====//
function setNoCache(res) {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    res.setHeader("Expires", date.toUTCString());
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Cache-Control", "public, no-cache");
}

function setLongTermCache(res) {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    res.setHeader("Expires", date.toUTCString());
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
}

app.use(compression());

app.use(
    express.static(BUILD_PATH, {
        extensions: ["htm", "html"],
        setHeaders(res, path) {
            if (path.match(/(\.html|\/sw\.js)$/)) {
                setNoCache(res);
                return;
            }

            if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|json)$/)) {
                setLongTermCache(res);
                console.log('I matched')
            }
        },
    }),
);



// add middlewares
app.use(cors());


app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.static("public"));

app.get("*", (req, res) => {
    setNoCache(res);
    console.log(res)
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


// start express server on port 5000
app.listen(port, () => {
    console.log("server started on port 5000");
});

