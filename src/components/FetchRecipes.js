/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter, useLocation } from "react-router-dom";
import Alcohol from "../componentsCocktail/Alcohol";
import CocktailMain from "../componentsCocktail/CocktailMain";
import NonAlcohol from "../componentsCocktail/NonAlcohol";
import ShowCocktail from "../componentsCocktail/ShowCocktail";
import FavouriteList from "./FavouriteList";
import Main from "./Main";
import Nav from "./Nav";
import ShowFood from "./ShowFood";
import Spinner from "./Spinner";
import Welcome from "./Welcome";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?"
const drinksUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?"
const AlcoholUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
const nonAlcoholUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"


const FetchRecipes = () => {

    const location = useLocation();

    //======== Making a random selection of  meals and drinks =========
    let meals = ["cheese", "butter", "meat"];
    let cocks = ["margarita", "smoothie", "chocolate"];
    let defaultRecipes = meals.sort(() => Math.random() - 0.5)[0];
    let defaultCocktail = cocks.sort(() => Math.random() - 0.5)[0];


    const [recipe, setRecipe] = useState([]);
    const [alcohol, setAlcohol] = useState([]);
    const [nonAlcohol, setNonAlcohol] = useState([]);
    const [cocktail, setCocktail] = useState([]);
    const [randomRecipe, setRandomRecipe] = useState('');
    const [query, setQuery] = useState(defaultRecipes);
    const [queryDrinks, setQueryDrinks] = useState(defaultCocktail);
    const [error, setError] = useState(false);
    const [randError, setRandError] = useState(false);
    const [randomCocktail, setRandomCocktail] = useState('');


    //======================= Search function for Meals======================
    const searchRecipe = async () => {

        const recipeFeed = await fetch(`${url}s=${query}`)

        if (query !== "") {

            try {
                const searchedmeal = await recipeFeed.json();
                setRecipe(searchedmeal.meals);
                setError("");
                //setQuery("");

                if (searchedmeal.meals === null) {
                    setError(<span>Recipe <h4 style={{ color: 'red' }}>{query}</h4> is Not Available</span>);
                }

            } catch (error) {
                console.log(error)
            }
        }
        else {
            setError(<span> Enter search please</span>);
        }
    }


    //======================= Search function Drinks ======================
    const searchCocktail = async () => {
        const cocktailFeed = await fetch(`${drinksUrl}s=${queryDrinks}`)

        if (queryDrinks !== "") {

            try {
                const searchedcocktail = await cocktailFeed.json();
                setCocktail(searchedcocktail.drinks);
                setError("");

                if (searchedcocktail.drinks === null) {
                    setError(<span>Cocktail <h4 style={{ color: 'red' }}>{queryDrinks}</h4> is Not Available</span>);
                }

            } catch (error) {
                console.log(error)
            }
        }
        else {
            setError(<span> Enter search please</span>);
        }
    }

    const onChange = e => setQuery(e.target.value);
    const handleOnChange = e => setQueryDrinks(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        searchRecipe();
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        searchCocktail();
    };

    const [Randomurl] = useState("https://www.themealdb.com/api/json/v1/1/random.php");
    const [RandomDrinkurl] = useState("https://www.thecocktaildb.com/api/json/v1/1/random.php");

    useEffect(() => {

        const randomRecipe = async () => {

            const recipeFeed = await fetch(Randomurl)

            if (recipeFeed) {

                try {
                    const randomMeal = await recipeFeed.json();
                    setRandomRecipe(randomMeal.meals)
                    setRandError(null);
                } catch (error) {
                    console.log(error)

                }
            }
            else {
                setRandError(<span>Not Available</span>);
            }

        }

        searchRecipe();
        randomRecipe();
    }, [Randomurl])



    useEffect(() => {

        const randomizedCocktail = async () => {

            const cocktailFeed = await fetch(RandomDrinkurl)

            if (cocktailFeed) {

                try {
                    const randomDrink = await cocktailFeed.json();
                    setRandomCocktail(randomDrink.drinks)
                    setRandError(null);

                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setRandError(<span>Not Available</span>);
            }
        }

        searchCocktail();
        randomizedCocktail();
    }, [RandomDrinkurl])


    useEffect(() => {

        const alcoholicCocktail = async () => {

            const alcoholFeed = await fetch(AlcoholUrl)

            if (alcoholFeed) {

                try {
                    const alcoholDrink = await alcoholFeed.json();
                    setAlcohol(alcoholDrink.drinks)
                    setError(null);

                    if (alcoholDrink.drinks === null) {
                        setError(<span> Cocktail Not Available</span>);
                    }

                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setError(<span>Not Available</span>);
            }
        }


        const nonAlcoholicCocktail = async () => {

            const nonAlcoholFeed = await fetch(nonAlcoholUrl)
            if (nonAlcoholFeed) {

                try {
                    const nonAlcoholDrink = await nonAlcoholFeed.json();
                    setNonAlcohol(nonAlcoholDrink.drinks)
                    setError(null);

                    if (nonAlcoholDrink.drinks === null) {
                        setError(<span> Cocktail Not Available</span>);
                    }

                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setError(<span>Not Available</span>);
            }
        }

        alcoholicCocktail();
        nonAlcoholicCocktail();
    }, [])


    return (

        <div>
            <Nav />
            {((randomRecipe && Object.keys(randomRecipe).length)) ?
                <>
                    <Switch location={location} key={location.pathname}>

                        <Route path="/favouriteList">
                            <FavouriteList />
                        </Route>

                        <Route path="/meals/:id">
                            <ShowFood recipe={recipe} />
                        </Route>

                        <Route path="/drinks/:id">
                            <ShowCocktail cocktail={cocktail} />
                        </Route>

                        <Route path="/nonalcohol">
                            <NonAlcohol  data={nonAlcohol} itemsPerPage={8} startFrom={1}/>
                        </Route>

                        <Route path="/alcohol">
                            <Alcohol alcohol={alcohol} itemsPerPage={8} startFrom={1} />
                        </Route>

                        <Route exact path="/cocktail">
                            <CocktailMain cocktail={cocktail} randomCocktail={randomCocktail} error={error} randError={randError} searchCocktail={searchCocktail} queryDrinks={queryDrinks} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
                        </Route>

                        <Route exact path="/recipes">
                            <Main recipe={recipe} randomRecipe={randomRecipe} error={error} randError={randError} searchRecipe={searchRecipe} query={query} onChange={onChange} onSubmit={onSubmit} />
                        </Route>

                        <Route exact path="/">
                            <Welcome />
                        </Route>

                    </Switch>
                </> : <> <Spinner /> <span style={{ display: "none" }}>{error}</span> </>}

        </div>
    )
}

export default withRouter(FetchRecipes)



