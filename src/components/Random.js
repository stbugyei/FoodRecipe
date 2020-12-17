import React from 'react'
import { withRouter, Link } from "react-router-dom";
import '../styles/random.css'
import Option from '../image/option.svg'
import Spinner from './Spinner';

const Random = (props) => {

    const { randomRecipe } = props

    if (!(randomRecipe && Object.keys(randomRecipe).length)) {
        return <Spinner />
    }

    return (
        <ul className="random-list__card">

            <button className="btn-random__pick">Abena's Special</button>

            <li className="random-list__poster">
                {randomRecipe ? <img src={randomRecipe[0].strMealThumb} alt="recipe" /> : < img src={Option} alt="recipe" />}
            </li>

            <li>
                {randomRecipe ? <p style={shadow}> {randomRecipe[0].strMeal} </p> : <span> Name Not Available </span>}
            </li>

            {randomRecipe ? <span className="category">{randomRecipe[0].strCategory}</span> : null}

            <Link to={{ pathname: `/meals/${randomRecipe[0].idMeal}` }}>
                <button className="btn-random"> Get Details </button>
            </Link>
        </ul>
    )
}

export default withRouter(Random)

const shadow = {
    textShadow: '0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)'
};