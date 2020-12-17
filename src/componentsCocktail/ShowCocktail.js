import React, { useState, useEffect } from "react";
import { withRouter, useParams, useHistory } from "react-router-dom";
import useLocalStorage from "../components/useLocalStorage"
import ShowDrinkCard from '../cards/ShowDrinkCard';
import '../styles/showfood.css'
import Spinner from "../components/Spinner";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?"

const ShowCocktail = (props) => {

    const { id } = useParams();

    const [drink, setDrink] = useState([]);
    const [favoriteDrinkList, setFavoriteDrinkList] = useLocalStorage("favoriteDrinkList", []);

    //======= Navigation functions =========
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    }

    const [baseUrl] = useState(`${url}i=${id}`);
    useEffect(() => {

        const getDrinksDetails = async () => {

            const details = await fetch(baseUrl);
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

    }, [baseUrl]);

    if (!(drink && Object.keys(drink).length)) {
        return <Spinner />
    }

    //====== Cleaning the youtube url function =======
    const showVideo = () => {
        if (drink.strVideo) {
            return drink.strVideo.replace("watch?v=", "embed/")
        } else {
            return ''
        }
    }


    //====== Adding ingredients to the measures  ======
    let ingredients = [];

    for (let i = 1; i <= 15; i++) {
        if (drink["strIngredient" + i]) {
            ingredients.push(
                `${drink["strIngredient" + i]} - ${drink["strMeasure" + i]
                }`
            );
        } else {
            break;
        }
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


    return (

        <div className="header">
            <div className="container">
                <ShowDrinkCard drink={drink} youtubeVideo={showVideo()} ingredients={ingredients} addDrinkToStorage={addDrinkToStorage } favoriteDrinkList={favoriteDrinkList} handleClick={handleClick} />
            </div>
        </div>
    )
}

export default withRouter(ShowCocktail)
