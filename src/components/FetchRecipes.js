
import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Route, Switch, withRouter, useHistory, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Main from "./Main"
import Loader from './Loader';
import Spinner from "./Spinner";
import Welcome from "./Welcome";
import ShowFood from "./ShowFood";
import FavouriteList from "./FavouriteList";
import SearchResults from "./SearchResults";
import MealsByCountry from "./MealsByCountry";
import CategoryMainPage from "./CategoryMainPage";
import SingleCountryPage from "./SingleCountryPage";
import Alcohol from "../componentsCocktail/Alcohol"
import IngredientMianPage from "./IngredientMianPage";
import NonAlcohol from "../componentsCocktail/NonAlcohol";
import SingleIngredientPage from "./SingleIngredientPage";
import useLocalStorage from "../components/useLocalStorage";
import ShowCocktail from "../componentsCocktail/ShowCocktail";
import CocktailMain from "../componentsCocktail/CocktailMain";
import CocktailResults from '../componentsCocktail/CocktailResults';
import IngredientCockMainPage from "../componentsCocktail/IngredientCockMainPage";
import SingleCocktailCategory from "../componentsCocktail/SingleCocktailCategory";
import SingleCockIngredientPage from "../componentsCocktail/SingleCockIngredientPage";
const Footer = lazy(() => import("./Footer"));


const API_KEY = `${process.env.REACT_APP_FOOD_API_KEY}`,
    url = `https://www.themealdb.com/api/json/v2/`,
    cocktailUrl = `https://www.thecocktaildb.com/api/json/v2/`;


const FetchRecipes = () => {

    const history = useHistory();
    const location = useLocation();
    const mealCatDiv = useRef(null);

    const [recipe, setRecipe] = useState([]);
    const [alcohol, setAlcohol] = useState([]);
    const [nonAlcohol, setNonAlcohol] = useState([]);
    const [cocktail, setCocktail] = useState([]);
    const [randomRecipe, setRandomRecipe] = useState("");
    const [randomCocktail, setRandomCocktail] = useState("");
    const [randomRecipeGenerator, setRandomRecipeGenerator] = useState([]);
    const [randomCocktailGenerator, setRandomCocktailGenerator] = useState([]);
    const [query, setQuery] = useState("");
    const [queryDrinks, setQueryDrinks] = useState("");
    const [foodQuery, setfoodQuery] = useLocalStorage("foodQuery", "");
    const [cockQuery, setCookQuery] = useLocalStorage("cockQuery", "");
    const [error, setError] = useState(false);
    const [errorDrinks, setErrorDrinks] = useState(false);
    const [errorRecipeGenerator, setErrorRecipeGenerator] = useState(false);
    const [errorCocktailGenerator, setErrorCocktailGenerator] = useState(false);
    const [randError, setRandError] = useState(false);


    //======================= Search function for Meals=====================
    const searchRecipe = async () => {

        const recipeFeed = await fetch(`${url}${API_KEY}/search.php?s=${query}`)

        if (query !== "") {
            try {
                const searchedmeal = await recipeFeed.json();
                setRecipe(searchedmeal.meals);
                setfoodQuery(query);
                setError("");
                if (searchedmeal.meals === null) {
                    setError(<div>
                        <Loader />
                        <div style={errormsg}>Recipe <h4 style={{ color: 'red' }}>{query}</h4> is Not Available</div>
                    </div>);
                }

            } catch (error) {
                console.log(error)
            }
        }
        else {
            setError(returnErrorDiv());
        }
    }

    //======================= Search function Drinks ======================
    const searchCocktail = async () => {
        const cocktailFeed = await fetch(`${cocktailUrl}${API_KEY}/search.php?s=${queryDrinks}`)

        if (queryDrinks !== "") {
            try {
                const searchedcocktail = await cocktailFeed.json();
                setCocktail(searchedcocktail.drinks);
                setCookQuery(queryDrinks)
                setErrorDrinks("");

                if (searchedcocktail.drinks === null) {
                    setErrorDrinks(<div>
                        <Loader />
                        <div style={errormsg}>Cocktail <h4 style={{ color: 'red' }}>{queryDrinks}</h4> is Not Available</div>
                    </div>);
                }

            } catch (error) {
                console.log(error)
            }
        }
        else {
            setErrorDrinks(returnErrorDiv());
        }
    }

    const returnErrorDiv = () => {
        return (
            <div className="error-wrapper">
                <div> <span> No Results Found...</span>
                    <span className="emotions">😕</span>
                </div>
                <div>Please try again <span className="emotions1">😊</span></div>
            </div>
        )
    }

    const onChange = e => setQuery(e.target.value);
    const handleOnChange = e => setQueryDrinks(e.target.value);

    //======= Navigation functions to search page ========
    const goToSearchPage = () => {
        history.push("/searchrecipes");
    }

    const goToSearchedCocktailPage = () => {
        history.push("/searchcocktailrecipes");
    }

    const onSubmit = e => {
        e.preventDefault();
        goToSearchPage();
        searchRecipe();
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        goToSearchedCocktailPage();
        searchCocktail();
    };


    useEffect(() => {

        const generateRandomRecipes = async () => {

            const recipeRandomFeed = await fetch(`${url}${API_KEY}/randomselection.php`)

            if (recipeRandomFeed) {
                try {
                    const randomizedMeal = await recipeRandomFeed.json();
                    setRandomRecipeGenerator(randomizedMeal.meals)
                    setErrorRecipeGenerator(null);
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setErrorRecipeGenerator(<span>Not Available</span>);
            }
        }

        const randomRecipe = async () => {

            const recipeFeed = await fetch(`${url}${API_KEY}/random.php`)

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

        generateRandomRecipes();
        randomRecipe();
    }, [])



    useEffect(() => {

        const generateRandomCocktails = async () => {

            const cocktailRandomFeed = await fetch(`${cocktailUrl}${API_KEY}/randomselection.php`)

            if (cocktailRandomFeed) {
                try {
                    const randomPickedCocktail = await cocktailRandomFeed.json();
                    setRandomCocktailGenerator(randomPickedCocktail.drinks)
                    setErrorCocktailGenerator(null);
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setErrorCocktailGenerator(<span>Not Available</span>);
            }
        }

        const randomizedCocktail = async () => {

            const cocktailFeed = await fetch(`${cocktailUrl}${API_KEY}/random.php`)

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

        generateRandomCocktails();
        randomizedCocktail();
    }, [])


    useEffect(() => {

        const alcoholicCocktail = async () => {

            const alcoholFeed = await fetch(`${cocktailUrl}${API_KEY}/filter.php?a=Alcoholic`);

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

            const nonAlcoholFeed = await fetch(`${cocktailUrl}${API_KEY}/filter.php?a=Non_Alcoholic`);
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

        <div className="main-wrapper">
            <Nav mealCatDiv={mealCatDiv} />

            <div className="main-content">

                <Switch location={location} key={location.pathname}>
                    <Route path="/favouriteList">
                        <FavouriteList />
                    </Route>

                    <Route path="/meals/:id/:name">
                        <ShowFood recipe={recipe} />
                    </Route>

                    <Route path="/drinks/:id/:name">
                        <ShowCocktail cocktail={cocktail} />
                    </Route>

                    <Route path="/nonalcohol">
                        <NonAlcohol data={nonAlcohol} itemsPerPage={8} startFrom={1} />
                    </Route>

                    <Route path="/alcohol">
                        <Alcohol alcohol={alcohol} />
                    </Route>

                    <Route exact path="/cocktail">
                        <CocktailMain randomCocktailGenerator={randomCocktailGenerator} errorCocktailGenerator={errorCocktailGenerator} randomCocktail={randomCocktail} errorDrinks={errorDrinks} randError={randError} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
                    </Route>

                    <Route exact path="/searchcocktailrecipes">
                        <CocktailResults cocktail={cocktail} queryDrinks={queryDrinks} cockQuery={cockQuery} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} errorDrinks={errorDrinks} />
                    </Route>

                    <Route exact path="/browsbycountry">
                        <MealsByCountry />
                    </Route>

                    <Route exact path="/searchrecipes">
                        <SearchResults recipe={recipe} query={query} foodQuery={foodQuery} onChange={onChange} onSubmit={onSubmit} error={error} />
                    </Route>

                    <Route exact path="/ingredientmainpage">
                        <IngredientMianPage />
                    </Route>

                    <Route exact path="/singleingredientpage/:name">
                        <SingleIngredientPage />
                    </Route>

                    <Route exact path="/singlecocktail">
                        <SingleCocktailCategory />
                    </Route>

                    <Route exact path="/singlecocktailingredientpage/:name">
                        <SingleCockIngredientPage />
                    </Route>

                    <Route exact path="/singlecountrypage/:name">
                        <SingleCountryPage />
                    </Route>

                    <Route exact path="/cocktailingredientmainpage">
                        <IngredientCockMainPage />
                    </Route>

                    <Route exact path="/categoryitempage/:name">
                        <CategoryMainPage />
                    </Route>

                    <Route exact path="/recipes">
                        <Main
                            randomRecipeGenerator={randomRecipeGenerator} randomRecipe={randomRecipe}
                            randError={randError} errorRecipeGenerator={errorRecipeGenerator}
                            searchRecipe={searchRecipe} onChange={onChange} onSubmit={onSubmit} mealCatDiv={mealCatDiv} />
                    </Route>

                    <Route exact path="/">
                        <Welcome />
                    </Route>
                </Switch>
            </div>
            <Suspense fallback={<Spinner />}>
                <Footer />
            </Suspense>
        </div>
    )
}

export default withRouter(FetchRecipes)

const errormsg = {
    fontSize: '20px',
    margin: '30px',
    textAlign: 'center',
};