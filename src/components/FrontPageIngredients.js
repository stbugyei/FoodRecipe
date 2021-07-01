import React from 'react'
import { Link, withRouter } from "react-router-dom";
import dataSource from '../datasource/DataSource';
import Spinner from "./Spinner";

const url5 = `https://www.themealdb.com/images/ingredients/`

const FrontPageIngredients = () => {

    const { ingredientList } = dataSource();

    if (!(ingredientList && Object.keys(ingredientList).length)) {
        return <Spinner />
    }


    const thumbnailTitleCard = ingredientList.slice(0, 7).map((images, index) => {
        return (
            <figure key={ingredientList[index].strIngredient} className="thumbnailCard">
                <Link key={index} to={{
                    pathname: `/singleingredientpage/${images.strIngredient}`,
                    state: `${images.strIngredient}`
                }}>
                    <div className="thumbnail-plate">
                        <img rel="preload" src={`${url5}/${images.strIngredient}-Small.png`} alt={images.strIngredient} as="image" />
                    </div>
                    <figcaption>
                        {images.strIngredient}
                    </figcaption>
                </Link>
            </figure>
        )
    })

    return (

        <div className="ingredient-front__wrapper">
            <h1>Random Ingredients</h1>
            <div className="ingredient-front__content">
                {thumbnailTitleCard}
            </div>

            <Link to={{ pathname: `/ingredientmainpage` }}>
                <p className="load-ingredient">Browse Ingredient Collection</p>
            </Link>
        </div>
    )
}

export default withRouter(FrontPageIngredients)