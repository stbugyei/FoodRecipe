import React from 'react'
import { Link, withRouter } from "react-router-dom";
import dataSource from '../datasource/DataSource';
import Spinner from "../components/Spinner";

const url5 = `https://www.thecocktaildb.com/images/ingredients/`

const FrontCockIngredient = () => {

    const { ingredientCockList } = dataSource();


    if (!(ingredientCockList && Object.keys(ingredientCockList).length)) {
        return <Spinner />
    }

    const thumbnailTitleCard = ingredientCockList.slice(0, 7).map((images, index) => {
        return (
            <figure key={index} className="thumbnailCard">
                <Link key={index} to={{
                    pathname: `/singlecocktailingredientpage/${images.strIngredient1}`,
                    state: `${images.strIngredient1}`
                }}>
                    <div className="thumbnail-plate">
                        <img rel="preload" src={`${url5}/${images.strIngredient1}-Small.png`} alt={images.strIngredient1} as="image" />
                    </div>
                    <figcaption>
                        {images.strIngredient1}
                    </figcaption>
                </Link>
            </figure>
        )
    })

    return (

        <div className="ingredient-front__wrapper">
            <h1>Common Ingredients</h1>
            <div className="ingredient-front__content">
                {thumbnailTitleCard}
            </div>

            <Link to={{ pathname: `/cocktailingredientmainpage` }}>
                <p className="load-ingredient1">Browse Ingredient Stock</p>
            </Link>
        </div>
    )
}

export default withRouter(FrontCockIngredient)