import { useState, useEffect } from 'react'
import { Link, withRouter, useHistory } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import dataSource from '../datasource/DataSource';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinner from "./Spinner";

const API_KEY = `${process.env.REACT_APP_FOOD_API_KEY}`,
    urlIngredientMain = `https://www.themealdb.com/api/json/v2/`,
    url5 = `https://www.themealdb.com/images/ingredients/`

const SingleIngredientPage = (props) => {

    const history = useHistory();

    const { ingredientList } = dataSource();
    const [ingredientMain, setIngredientMain] = useState("");
    let query = props.location.state

    useEffect(() => {

        const filterMainIngredient = async () => {
            if (query) {
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
        }

        filterMainIngredient();

    }, [query])


    if (!(ingredientList && Object.keys(ingredientList).length)) {
        return <Spinner />
    }

    //======= Navigation functions =========
    const handleClick = () => {
        history.goBack();
    }

    //======= filter by main ingredient (return single ingredient) =========
    const filterByMainIngredient = ingredientList.filter(name => name.strIngredient === query);

    const detailsCard = filterByMainIngredient.map((details) => {
        return (
            <div key={details.idIngredient} className="single-ingredient">
                <h2>{details.strIngredient}</h2>
                <p>{details.strDescription}</p>
            </div>
        )
    })

    //====== Function to display title  ====== 
    const title = () => {
        const ingTitle = filterByMainIngredient.map((details) => details.strIngredient)
        if (ingTitle) {
            return `Priscy | ${ingTitle}`
        } else {
            return `Priscy | single Ingredient`
        }
    }


    //====== Function to display description  ====== 
    const description = () => {
        const ingTitle = filterByMainIngredient.map((details) => details.strDescription)
        if (ingTitle) {
            return `${ingTitle.slice(0, 200)}`
        } else {
            return `single Ingredient data`
        }
    }

    //======= list of meals associated with the single ingredient =========
    const foodWithQueryCard = (!(ingredientMain && Object.keys(ingredientMain).length))
        ? "" : ingredientMain.map((meal, index) => {
            return (
                <div className="food-list__card" key={ingredientMain[index].idMeal}>
                    <div className="food-list__poster">
                        <LazyLoadImage
                            alt={meal.strMeal}
                            effect="blur"
                            src={meal.strMealThumb}
                            style={{ transition: 'all .3s', width: '100%', height: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                            className="lazyimg"
                        />
                    </div>
                    <div className="title-discover">
                        <div>
                            <p className='title'> {meal.strMeal} </p>
                        </div>

                        <Link to={{
                            pathname: `/meals/${ingredientMain[index].idMeal}/${meal.strMeal}`
                        }}>
                            <button className="btn-discover"> Discover </button>
                        </Link>
                    </div>
                </div>
            )
        })



    return (
        <div className="header">
            <div className="container">

                <MetaTags>
                    <title> {title()} </title>
                    <meta name="description" content={description()} />
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
                        {(!(ingredientMain && Object.keys(ingredientMain).length))
                            ? <h2>Meals with {query} will be uploaded soon, please visit later.</h2> : <h1>Some Meals With {query}</h1>}
                        <div className="randomgenerator-cardwrapper">
                            {foodWithQueryCard}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SingleIngredientPage)