import React, { useState, useEffect } from 'react'

const API_KEY = `${process.env.REACT_APP_FOOD_API_KEY}`
const urlIngredient = `https://www.themealdb.com/api/json/v2/`
const urlIngredientMain = `https://www.themealdb.com/api/json/v2/`
const urlLatest = `https://www.themealdb.com/api/json/v2/`
const urlcocktail = `https://www.thecocktaildb.com/api/json/v2/`
const urlcocktail2 = `https://www.thecocktaildb.com/api/json/v2/`
const urlCountry = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag'


const DataSource = () => {

    const [ingredientList, setIngredientList] = useState("");
    const [ingredientCockList, setIngredientCockList] = useState("");
    const [ingredientMain, setIngredientMain] = useState("");
    const [categoryList, setCategoryList] = useState("");
    const [popularCockList, setpopularCockList] = useState("");
    const [recentMeal, setRecentMeal] = useState("");
    const [recentDrinks, setRecentDrinks] = useState("");
    const [query, setQuery] = useState("");
    const [countryInfo, setCountryInfo] = useState("");
    const [mealCountryInfo, setMealCountryInfo] = useState("");



    useEffect(() => {

        const ingredientItem = async () => {
            const ingredientFeed = await fetch(`${urlIngredient}/${API_KEY}/list.php?i=list`)
            if (ingredientFeed) {
                try {
                    const ingredientDta = await ingredientFeed.json();
                    setIngredientList(ingredientDta.meals)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setIngredientList(<span>Not Available</span>);
            }
        }

        const categoryItem = async () => {
            const categoryFeed = await fetch(`${urlIngredient}/${API_KEY}/categories.php`)

            if (categoryFeed) {
                try {
                    const categoryDta = await categoryFeed.json();
                    setCategoryList(categoryDta.categories)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setCategoryList(<span>Not Available</span>);
            }
        }

        const latestMeals = async () => {
            const latestFeed = await fetch(`${urlLatest}/${API_KEY}/latest.php`)
            if (latestFeed) {
                try {
                    const currentMeal = await latestFeed.json();
                    setRecentMeal(currentMeal.meals)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setRecentMeal(<span>Not Available</span>);
            }
        }

        latestMeals();
        categoryItem();
        ingredientItem();

    }, []);

    useEffect(() => {
        const filterMainIngredient = async () => {
            const ingredientMianFeed = await fetch(`${urlIngredientMain}${API_KEY}/filter.php?i=${query}`)
            if (ingredientMianFeed.status === 200) {
                try {
                    const ingredientDta = await ingredientMianFeed.json();
                    setIngredientMain(ingredientDta.meals)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setIngredientMain("");
            }
        }
        filterMainIngredient();

    }, [query])


    useEffect(() => {
        const cockIngredientItem = async () => {
            const ingredientCockFeed = await fetch(`${urlcocktail}/${API_KEY}/list.php?i=list`)
            if (ingredientCockFeed) {
                try {
                    const ingredientCocktDta = await ingredientCockFeed.json();
                    setIngredientCockList(ingredientCocktDta.drinks)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setIngredientList(<span>Not Available</span>);
            }
        }
        cockIngredientItem();

    }, [])


    useEffect(() => {

        const popularCockItem = async () => {
            const popularCockFeed = await fetch(`${urlcocktail2}/${API_KEY}/popular.php`)
            if (popularCockFeed) {
                try {
                    const popularCockDta = await popularCockFeed.json();
                    setpopularCockList(popularCockDta.drinks)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setpopularCockList(<span>Not Available</span>);
            }
        }


        const latestDrinks = async () => {
            const latestCockFeed = await fetch(`${urlcocktail2}/${API_KEY}/latest.php`)
            if (latestCockFeed) {
                try {
                    const currentDrinks = await latestCockFeed.json();
                    setRecentDrinks(currentDrinks.drinks)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setRecentDrinks(<span>Not Available</span>);
            }
        }


        latestDrinks();
        popularCockItem();

    }, []);


    useEffect(() => {
        const countries = async () => {
            const countryFeed = await fetch(urlCountry)
            if (countryFeed) {
                try {
                    const currentData = await countryFeed.json();
                    setCountryInfo(currentData)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setCountryInfo("");
            }
        }
        countries();
    }, [])


    useEffect(() => {
        const mealsBycountry = async () => {
            const areaFeed = await fetch(`${urlLatest}/${API_KEY}/list.php?a=list`)
            if (areaFeed) {
                try {
                    const currentData = await areaFeed.json();
                    setMealCountryInfo(currentData.meals)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setMealCountryInfo("");
            }
        }
        mealsBycountry();
    }, [])



    const drinksCategory = [
        {
            strCategory: "Ordinary Drink"
        },
        {
            strCategory: "Cocktail"
        },
        {
            strCategory: "Milk / Float / Shake"
        },
        {
            strCategory: "Other/Unknown"
        },
        {
            strCategory: "Cocoa"
        },
        {
            strCategory: "Shot"
        },
        {
            strCategory: "Coffee / Tea"
        },
        {
            strCategory: "Homemade Liqueur"
        },
        {
            strCategory: "Punch / Party Drink"
        },
        {
            strCategory: "Beer"
        },
        {
            strCategory: "Soft Drink / Soda"
        }
    ]

    return {
        ingredientList,
        ingredientCockList,
        categoryList,
        popularCockList,
        ingredientMain, setIngredientMain,
        query, setQuery,
        recentMeal,
        recentDrinks,
        countryInfo,
        mealCountryInfo,
        drinksCategory,
    }

}

export default DataSource
