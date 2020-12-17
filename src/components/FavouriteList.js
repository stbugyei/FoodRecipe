import React, { useState, useEffect } from "react";
import useLocalStorage from "../components/useLocalStorage"
import FavouriteCard from "../cards/FavouriteCard";
import '../styles/favourite.css'
import FavouriteDrinkCard from "../cards/FavouriteDrinkCard";

const FavouriteList = () => {

    const [favList, setFavList] = useState([]);
    const [favDrinkList, setFavDrinkList] = useState([]);
    const [favoriteList, setFavoriteList] = useLocalStorage("favoritList", []);
    const [favoriteDrinkList, setFavoriteDrinkList] = useLocalStorage("favoriteDrinkList", []);


    useEffect(() => {

        const fetchMealData = async () => {
            const mealResponse = await JSON.parse(localStorage.getItem('favoritList'));
            if (mealResponse) {
                setFavList(mealResponse);
            }
        }

        const fetchDrinkData = async () => {
            const drinkResponse = await JSON.parse(localStorage.getItem('favoriteDrinkList'));
            if (drinkResponse) {
                setFavDrinkList(drinkResponse);
            }
        }

        fetchMealData();
        fetchDrinkData();

    }, [])

    //====== Adding and Removing items to localStorage  ======
    const addToStorage = (food) => {

        if (!favoriteList.some(fav => fav.idMeal === food.idMeal)) {
            setFavoriteList([...favoriteList, food]);

        } else {
            const newList = favoriteList.filter((item) => item.idMeal !== food.idMeal)
            setFavoriteList(newList)
        }
    }

    const addDrinkToStorage = (cock) => {

        if (!favoriteDrinkList.some(fav => fav.idDrink === cock.idDrink)) {
            setFavoriteDrinkList([...favoriteDrinkList, cock]);

        } else {
            const newList = favoriteDrinkList.filter((item) => item.idDrink !== cock.idDrink)
            setFavoriteDrinkList(newList)
        }
    }


    const foodCard = favList.map((meal) => {
        if (!favList) { return '' }

        return (
            <div className="food-list__favcard" key={meal.idMeal}>
                <FavouriteCard
                    favList={favList}
                    favoriteList={favoriteList}
                    meal={meal}
                    addToStorage={addToStorage}
                />
            </div>
        )
    })

    const drinkCard = favDrinkList.map((cocktail) => {
        if (!favDrinkList) { return '' }

        return (
            <div className="food-list__favcard" key={cocktail.idDrink}>
                <FavouriteDrinkCard
                    cocktail={cocktail}
                    favDrinkList={favDrinkList}
                    favoriteDrinkList={favoriteDrinkList}
                    addDrinkToStorage={addDrinkToStorage}
                />
            </div>
        )
    })

    return (
        <div className="fav-list__container">
            <h2>My Favourites</h2>
            <div className="fav-list__cardwrapper">
                {(favList) ? <>{foodCard}</> : ''}
                {(favDrinkList) ? <>{drinkCard}</> : ''}
            </div>
        </div>
    )
}

export default FavouriteList
