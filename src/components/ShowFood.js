import React, { useState, useEffect } from "react";
import { withRouter, useParams, useHistory } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import useLocalStorage from "../components/useLocalStorage"
import ShowFoodCard from '../cards/ShowFoodCard';
import '../styles/showfood.css'
import '../styles/showfood1.css'
import '../styles/showfoodqueries.css'
import Spinner from "./Spinner";

const API_KEY = `${process.env.REACT_APP_FOOD_API_KEY}`,
    url = `https://www.themealdb.com/api/json/v2/`

const ShowFood = () => {

    const { id } = useParams();

    const [meal, setMeal] = useState([]);
    const [favoriteList, setFavoriteList] = useLocalStorage("favoritList", []);


    //======= Navigation functions =========
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    }

    useEffect(() => {

        const getMealDetails = async () => {

            const details = await fetch(`${url}${API_KEY}/lookup.php?i=${id}`);

            if (details) {
                try {
                    const selectedMeal = await details.json();
                    setMeal(selectedMeal.meals[0])

                } catch (error) {
                    console.log(error)
                }
            } else {
                setMeal([])
            }
        };
        getMealDetails();

    }, [id]);


    if (!(meal && Object.keys(meal).length)) {
        return <Spinner />
    }


    //====== Cleaning the youtube url function =======
    const youtubeVideo = meal.strYoutube.replace("watch?v=", "embed/")


    //====== Adding ingredients to the measures  ======
    let ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (meal["strIngredient" + i]) {
            ingredients.push(
                `${meal["strIngredient" + i]} - ${meal["strMeasure" + i]}`
            );
        } else {
            break;
        }
    }


    //====== Adding items to localStorage  ====== 
    const addToStorage = (food) => {
        if (!favoriteList.some(fav => fav.idMeal === food.idMeal)) {
            setFavoriteList([...favoriteList, food])

        } else {
            const newList = favoriteList.filter((item) => item.idMeal !== food.idMeal)
            setFavoriteList(newList)
        }
    }

    //====== Function to display title  ====== 
    const title = () => {
        if (meal) {
            return `How to prepare ${meal.strMeal}`
        } else {
            return `Priscy | Meal preparation`
        }
    }

    return (

        <div className="header">
            <div className="container">

                <MetaTags>
                    <title> {title()} </title>
                </MetaTags>

                <ShowFoodCard meal={meal} youtubeVideo={youtubeVideo} ingredients={ingredients} addToStorage={addToStorage} favoriteList={favoriteList} handleClick={handleClick} />
            </div>
        </div>
    )
}

export default withRouter(ShowFood)
