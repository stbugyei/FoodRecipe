import React from "react";
import { withRouter } from 'react-router-dom'
import MetaTags from 'react-meta-tags';
import '../styles/main.css'
import Form from './form'
import Random from './Random'
import FrontPageIngredients from "./FrontPageIngredients"
import FrontPageCategories from "./FrontPageCategories"
import RandomGenerator from "./RandomGenerator"


const Main = (props) => {

    const { onSubmit, onChange, randomRecipe, randomRecipeGenerator, errorRecipeGenerator, randError, mealCatDiv } = props

    return (

        <div className="main-wrapper">
            <div className="header">
                <div className="container">
                    <MetaTags>
                        <title>Priscy | Meals </title>
                        <meta name="description" content="Ingredients such as chicken, salmon, beef and avocado. Also available are meals category like: vegan, vegetarian, breakfast seafood and the likes." />
                    </MetaTags>

                    <ul className="outer-main__section">
                        <li className="inner-main__section1">
                            <div className="form-wrapper" onSubmit={onSubmit} onChange={onChange}>
                                <Form />
                            </div>

                            <div className="random-wrapper">
                                <Random randomRecipe={randomRecipe} randError={randError} />
                            </div>
                        </li>

                        <li className="search-wrapper">
                            <FrontPageIngredients />
                            <FrontPageCategories mealCatDiv={mealCatDiv} />
                            <RandomGenerator randomRecipeGenerator={randomRecipeGenerator} errorRecipeGenerator={errorRecipeGenerator} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Main)