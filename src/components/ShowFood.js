import React, { useState, useEffect } from "react";
import { withRouter, useParams, useHistory } from "react-router-dom";
import useLocalStorage from "../components/useLocalStorage"
import ShowFoodCard from '../cards/ShowFoodCard';
import '../styles/showfood.css'
import Spinner from "./Spinner";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?"

const ShowFood = (props) => {

    const { id } = useParams();

    const [meal, setMeal] = useState([]);
    const [favoriteList, setFavoriteList] = useLocalStorage("favoritList", []);


    //======= Navigation functions =========
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    }
    const [baseUrl] = useState(`${url}i=${id}`);

    useEffect(() => {

        const getMealDetails = async () => {

            const details = await fetch(baseUrl);

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

    }, [baseUrl]);

    if (!(meal && Object.keys(meal).length)) {
        return <Spinner/>
    }

    //====== Cleaning the youtube url function =======
    const youtubeVideo = meal.strYoutube.replace("watch?v=", "embed/")

    //====== Adding ingredients to the measures  ======
    let ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (meal["strIngredient" + i]) {
            ingredients.push(
                `${meal["strIngredient" + i]} - ${meal["strMeasure" + i]
                }`
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



    return (

        <div className="header">
            <div className="container">
                <ShowFoodCard meal={meal} youtubeVideo={youtubeVideo} ingredients={ingredients} addToStorage={addToStorage} favoriteList={favoriteList} handleClick={handleClick} />
            </div>
        </div>
    )
}

export default withRouter(ShowFood)
