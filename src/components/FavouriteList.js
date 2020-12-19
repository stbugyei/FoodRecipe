import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../components/useLocalStorage"
import FavouriteCard from "../cards/FavouriteCard";
import FavouriteDrinkCard from "../cards/FavouriteDrinkCard";
import '../styles/favourite.css'

const FavouriteList = () => {

    const [favList, setFavList] = useState([]);
    const [favDrinkList, setFavDrinkList] = useState([]);
    const [favoriteList, setFavoriteList] = useLocalStorage("favoritList", []);
    const [favoriteDrinkList, setFavoriteDrinkList] = useLocalStorage("favoriteDrinkList", []);

    const favTally = () => {
        let myFood = [];
        let myDrink = [];

        if (favoriteList.length !== null) {
            myFood.push(favoriteList.length)
        }

        if (favoriteDrinkList.length !== null) {
            myDrink.push(favoriteDrinkList.length)
        }

        const tally = (((parseFloat(myDrink)) + (parseFloat(myFood))))
        return tally
    }


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

    //====== Create false/empty route to update localStorage on item remove  ======
    const history = useHistory();

    const reload = () => {
        let currentPath = window.location.pathname;
        history.replace('/favouritelist');//fake path
        setTimeout(() => {
            history.replace(currentPath)
        }, 0)
    }

    //====== Removing items to localStorage  ======
    const removeFromStorage = (food) => {
        const newList = favoriteList.filter((item) => item.idMeal !== food.idMeal)
        setFavoriteList(newList);
        reload();
    }


    const removeDrinkFromStorage = (cock) => {
        //if (window.confirm(`Do you want to Remove ${cock.strDrink}?`)) {
        const newList = favoriteDrinkList.filter((item) => item.idDrink !== cock.idDrink)
        setFavoriteDrinkList(newList)
        reload();
        //}
    }


    const foodCard = favList.map((meal) => {
        if (!favList) { return '' }

        return (
            <div className="food-list__favcard" key={meal.idMeal}>
                <FavouriteCard
                    favList={favList}
                    favoriteList={favoriteList}
                    meal={meal}
                    removeFromStorage={removeFromStorage}
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
                    removeDrinkFromStorage={removeDrinkFromStorage}
                />
            </div>
        )
    })

    //====== Printing singular and Plural forms of the word(item)  ======
    const items = () => {
        if (favTally() === 1) {
            return <>item</>
        } else {
            return <>items</>
        }
    }

    return (
        <div className="fav-list__container">
            <ul className="fav-caption">
                <li className="fav-caption__text"><h2>My Favourites</h2></li>
                {favTally() === 0 ? <li><h2>You have No Favourites!</h2></li> : <li><h2>You have <button className="btn-store__fav1">{favTally()}</button> {items()} in Favourites!</h2></li>}
            </ul>

            <div className="fav-list__cardwrapper">
                {(favList) ? <>{foodCard}</> : ''}
                {(favDrinkList) ? <>{drinkCard}</> : ''}
            </div>
        </div>
    )
}

export default FavouriteList
