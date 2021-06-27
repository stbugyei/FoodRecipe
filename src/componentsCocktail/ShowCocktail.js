import React, { useState, useEffect } from "react";
import { withRouter, useParams, useHistory } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import useLocalStorage from "../components/useLocalStorage"
import ShowDrinkCard from '../cards/ShowDrinkCard';
import '../styles/showfood.css'
import '../styles/showfood1.css'
import '../styles/showfoodqueries.css'
import Spinner from "../components/Spinner";

const API_KEY = `${process.env.REACT_APP_FOOD_API_KEY}`,
    url = `https://www.thecocktaildb.com/api/json/v2/`

const ShowCocktail = (props) => {

    const { id } = useParams();

    const [drink, setDrink] = useState([]);
    const [favoriteDrinkList, setFavoriteDrinkList] = useLocalStorage("favoriteDrinkList", []);

    //======= Navigation functions =========
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    }


    useEffect(() => {

        const getDrinksDetails = async () => {

            const details = await fetch(`${url}${API_KEY}/lookup.php?i=${id}`);
            if (details) {
                try {
                    const selectedCocktail = await details.json();
                    setDrink(selectedCocktail.drinks[0])

                } catch (error) {
                    console.log(error)
                }

            } else {
                setDrink([])
            }
        };

        getDrinksDetails();

    }, [id]);


    if (!(drink && Object.keys(drink).length)) {
        return <Spinner />
    }


    //====== Cleaning the youtube url function =======
    const showVideo = () => {
        if (drink.strVideo) {
            return drink.strVideo.replace("watch?v=", "embed/")
        } else { return '' }
    }


    //====== Adding ingredients to the measures  ======
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
        if (drink["strIngredient" + i]) {
            ingredients.push(
                `${drink["strIngredient" + i]} - ${drink["strMeasure" + i]}`
            );
        } else { break; }
    }

    //====== extracting ingredients only  ======
    let ingredientsThumbs = [];
    for (let i = 1; i <= 15; i++) {
        if (drink["strIngredient" + i]) {
            ingredientsThumbs.push(`${drink["strIngredient" + i]}`);
        } else { break; }
    }

    //====== Adding items to localStorage  ====== 

    const addDrinkToStorage = (cock) => {

        if (!favoriteDrinkList.some(fav => fav.idDrink === cock.idDrink)) {
            setFavoriteDrinkList([...favoriteDrinkList, cock]);

        } else {
            const newList = favoriteDrinkList.filter((item) => item.idDrink !== cock.idDrink)
            setFavoriteDrinkList(newList)
        }
    }


    //====== Function to display title  ====== 
    const title = () => {
        if (drink) {
            return `How to prepare ${drink.strDrink}`
        } else {
            return `Priscy | drink preparation`
        }
    }

    return (

        <div className="header">
            <div className="container">

                <MetaTags>
                    <title> {title()} </title>
                </MetaTags>

                <ShowDrinkCard drink={drink} youtubeVideo={showVideo()} ingredients={ingredients} addDrinkToStorage={addDrinkToStorage} favoriteDrinkList={favoriteDrinkList} handleClick={handleClick} ingredientsThumbs={ingredientsThumbs} />
            </div>
        </div>
    )
}

export default withRouter(ShowCocktail)