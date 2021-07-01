const path = require("path");
const express = require("express");
const fetch = require("node-fetch");
const cors = require('cors');

const NodeCache = require("node-cache");
const myCache = new NodeCache( { stdTTL: 3600, checkperiod: 3000 } );
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

const API_KEY = 9973533
//const API_KEY = `${process.env.REACT_APP_FOOD_API_KEY}`
const urlIngredient = `https://www.themealdb.com/api/json/v2/`
const urlcocktail = `https://www.thecocktaildb.com/api/json/v2/`
const urlCountry = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag'

//ingredientList
app.get('/ingredientList', (req, res) => {
    if (myCache.has("ingredientList")) {
        return res.send(myCache.get("ingredientList"));

    } else {
        fetch(`${urlIngredient}/${API_KEY}/list.php?i=list`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("ingredientList", json);
                res.send(json);
            });
    }
});


//categoryList
app.get('/categoryList', (req, res) => { 
    if (myCache.has("categoryList")) {
        return res.send(myCache.get("categoryList"));

    } else {
        fetch(`${urlIngredient}/${API_KEY}/categories.php`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("categoryList", json);
                res.send(json);
            });
    }
});


//recentMeal
app.get('/recentMeal', (req, res) => { 
    if (myCache.has("recentMeal")) {
        return res.send(myCache.get("recentMeal"));

    } else {
        fetch(`${urlIngredient}/${API_KEY}/latest.php`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("recentMeal", json);
                res.send(json);
            });
    }
});


//ingredientCockList
app.get('/ingredientCockList', (req, res) => { 
    if (myCache.has("ingredientCockList")) {
        return res.send(myCache.get("ingredientCockList"));

    } else {
        fetch(`${urlcocktail}/${API_KEY}/list.php?i=list`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("ingredientCockList", json);
                res.send(json);
            });
    }
});


//popularCockList
app.get('/popularCockList', (req, res) => { 
    if (myCache.has("popularCockList")) {
        return res.send(myCache.get("popularCockList"));

    } else {
        fetch(`${urlcocktail}/${API_KEY}/popular.php`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("popularCockList", json);
                res.send(json);
            });
    }
});


//recentDrinks
app.get('/recentDrinks', (req, res) => { 
    if (myCache.has("recentDrinks")) {
        return res.send(myCache.get("recentDrinks"));

    } else {
        fetch(`${urlcocktail}/${API_KEY}/latest.php`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("recentDrinks", json);
                res.send(json);
            });
    }
});


//countryInfo
app.get('/countryInfo', (req, res) => { 
    if (myCache.has("countryInfo")) {
        return res.send(myCache.get("countryInfo"));

    } else {
        fetch(urlCountry)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("countryInfo", json);
                res.send(json);
            });
    }
});


//mealCountryInfo
app.get('/mealCountryInfo', (req, res) => { 
    if (myCache.has("mealCountryInfo")) {
        return res.send(myCache.get("mealCountryInfo"));

    } else {
        fetch(`${urlIngredient}/${API_KEY}/list.php?a=list`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("mealCountryInfo", json);
                res.send(json);
            });
    }
});


//alcohol
app.get('/alcohol', (req, res) => { 
    if (myCache.has("alcohol")) {
        return res.send(myCache.get("alcohol"));

    } else {
        fetch(`${urlcocktail}${API_KEY}/filter.php?a=Alcoholic`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("alcohol", json);
                res.send(json);
            });
    }
});


//nonAlcohol
app.get('/nonAlcohol', (req, res) => { 
    if (myCache.has("nonAlcohol")) {
        return res.send(myCache.get("nonAlcohol"));

    } else {
        fetch(`${urlcocktail}${API_KEY}/filter.php?a=Non_Alcoholic`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("nonAlcohol", json);
                res.send(json);
            });
    }
});


//randomCocktailGenerator
app.get('/randomCocktailGenerator', (req, res) => { 
    if (myCache.has("randomCocktailGenerator")) {
        return res.send(myCache.get("randomCocktailGenerator"));

    } else {
        fetch(`${urlcocktail}${API_KEY}/randomselection.php`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("randomCocktailGenerator", json);
                res.send(json);
            });
    }
});


//randomCocktail
app.get('/randomCocktail', (req, res) => { 
    if (myCache.has("randomCocktail")) {
        return res.send(myCache.get("randomCocktail"));

    } else {
        fetch(`${urlcocktail}${API_KEY}/random.php`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("randomCocktail", json);
                res.send(json);
            });
    }
});


//randomRecipe
app.get('/randomRecipe', (req, res) => { 
    if (myCache.has("randomRecipe")) {
        return res.send(myCache.get("randomRecipe"));

    } else {
        fetch(`${urlIngredient}${API_KEY}/random.php`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("randomRecipe", json);
                res.send(json);
            });
    }
});


//randomRecipeGenerator
app.get('/randomRecipeGenerator', (req, res) => { 
    if (myCache.has("randomRecipeGenerator")) {
        return res.send(myCache.get("randomRecipeGenerator"));

    } else {
        fetch(`${urlIngredient}${API_KEY}/randomselection.php`)
            .then((response) => response.json())
            .then((json) => {
                myCache.set("randomRecipeGenerator", json);
                res.send(json);
            });
    }
});


// add middlewares
app.use(cors());


app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.static("public"));

app.get("*", (req, res) => {
  setNoCache(res);
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});


app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


// start express server on port 5000
app.listen(port, () => {
  console.log("server started on port 5000");
});

