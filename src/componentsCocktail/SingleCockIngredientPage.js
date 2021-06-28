import { useState, useEffect } from 'react'
import { Link, withRouter, useHistory } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import dataSource from '../datasource/DataSource';
import Spinner from "../components/Spinner";


const API_KEY = `${process.env.REACT_APP_FOOD_API_KEY}`,
    urlcocktail = `https://www.thecocktaildb.com/api/json/v2/`,
    url5 = `https://www.thecocktaildb.com/images/ingredients/`;

const SingleCockIngredientPage = (props) => {
    const history = useHistory();

    const { ingredientCockList } = dataSource();
    const [ingredientMain, setIngredientMain] = useState("");
    const [associatDrinks, setAssociatDrinks] = useState("");
    let query = props.location.state

    useEffect(() => {

        const filterMainIngredient = async () => {
            const ingredientMianFeed = await fetch(`${urlcocktail}${API_KEY}/search.php?i=${query}`)
            if (query !== "") {
                try {
                    const ingredientDta = await ingredientMianFeed.json();
                    setIngredientMain(ingredientDta.ingredients);
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setIngredientMain("");
            }

        }


        const associatedCocktails = async () => {
            const drinksWithQuery = await fetch(`${urlcocktail}/${API_KEY}/filter.php?i=${query}`)
            if (query !== "") {
                try {
                    const queryDtn = await drinksWithQuery.json();
                    setAssociatDrinks(queryDtn.drinks)

                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setAssociatDrinks("");
            }
        }

        filterMainIngredient();
        associatedCocktails();

    }, [query])


    if (!(ingredientCockList && Object.keys(ingredientCockList).length)) {
        return <Spinner />
    }

    //======= Navigation functions =========
    const handleClick = () => {
        history.goBack();
    }


    const detailsCard = (!(ingredientMain && Object.keys(ingredientMain).length))
        ? "" : ingredientMain.map((details) => {
            return (
                <div key={details.idIngredient} className="single-ingredient">
                    <h2>{details.strIngredient}</h2>
                    <p>{details.strDescription}</p>
                </div>
            )
        })

    //======= list of meals associated with the single ingredient =========
    const drinksWithQueryCard = (!(associatDrinks && Object.keys(associatDrinks).length))
        ? "" : associatDrinks.map((drink, index) => {
            return (
                <div className="food-list__card" key={associatDrinks[index].idDrink}>

                    <div className="food-list__poster">
                        <img rel="preload" src={drink.strDrinkThumb} alt={drink.strDrink} style={{ transition: 'all .3s', width: '100%', height: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }} as="image" />
                    </div>

                    <div className="title-discover">
                        <div>
                            <p className='title'> {drink.strDrink} </p>
                        </div>

                        <Link to={{
                            pathname: `/drinks/${associatDrinks[index].idDrink}/ ${drink.strDrink}`
                        }}>
                            <button className="btn-discover1"> Discover </button>
                        </Link>
                    </div>
                </div>
            )
        })


    return (
        <div className="header">
            <div className="container">

                <MetaTags>
                    <title> Priscy | {query} </title>
                    <meta name="description" content="Gin, Rum, Scotch, Tequila, Vodka" />
                </MetaTags>

                <div className="food-wrapper1">
                    <button className="btn-navigate__back" onClick={handleClick}><i className="fas fa-arrow-left"></i></button>
                    <div className="food-header__content1" style={{ marginTop: '10px' }}>
                        <div className="single-detail__wrapper">
                            <img src={`${url5}/${query}.png`} alt={query} />
                            {detailsCard}
                        </div>
                    </div>

                    <div className="randomgenerator-content">
                        {(!(associatDrinks && Object.keys(associatDrinks).length))
                            ? <h2>Popular Drinks With {query} will be uploaded soon, please visit later.</h2> : <h1>Popular Drinks With {query}</h1>}

                        <div className="randomgenerator-cardwrapper">
                            {drinksWithQueryCard}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SingleCockIngredientPage)