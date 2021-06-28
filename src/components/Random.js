import React from 'react'
import { withRouter, Link } from "react-router-dom";
import '../styles/random.css'
import Spinner from './Spinner';

const Random = (props) => {

    const { randomRecipe } = props

    if (!(randomRecipe && Object.keys(randomRecipe).length)) {
        return <Spinner />
    }

    return (
        <div className="random-list__card">
            <div className="main-random__caption">
                {randomRecipe ? <span className="category">{randomRecipe[0].strCategory}</span> : null}

                <button className="btn-random__pick">Priscy's Special</button>
            </div>

            <div className="image-details__wrapper">
                <div className="image-details">
                    <div className="random-list__poster">
                        <img rel="preload" src={randomRecipe[0].strMealThumb} alt={randomRecipe[0].strMeal} as= "image" />
                    </div>

                    <div className="title-button">
                        <div className="random-list__postertitle">
                            {randomRecipe ? <p style={shadow}> {randomRecipe[0].strMeal} </p> : <span> Name Not Available </span>}
                        </div>
                        <div>
                            <Link to={{ pathname: `/meals/${randomRecipe[0].idMeal}/${randomRecipe[0].strMeal}` }}>
                                <button className="btn-random"> Get Details </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Random)

const shadow = {
    textShadow: '0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)'
};