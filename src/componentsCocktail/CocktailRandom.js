import React from 'react'
import { withRouter, Link } from "react-router-dom";
import '../styles/random.css'
import Option from '../image/option.svg'
import Spinner from '../components/Spinner';

const CocktailRandom = (props) => {

    const { randomCocktail } = props

    if (!(randomCocktail && Object.keys(randomCocktail).length)) {
        return <Spinner />
    }

    return (

        <ul className="random-list__card">

            <button className="btn-random__pick1">Abena's Pick</button>

            <li className="random-list__poster">
                {randomCocktail ? <img src={randomCocktail[0].strDrinkThumb} alt="drinks" /> : < img src={Option} alt="recipe" />}
            </li>

            <li>
                {randomCocktail ? <p style={shadow}> {randomCocktail[0].strDrink} </p> : <span> Name Not Available </span>}
            </li>

            {randomCocktail ? <span className="category">{randomCocktail[0].strAlcoholic}</span> : null}

            <Link to={{ pathname: `/drinks/${randomCocktail[0].idDrink}` }}>
                <button className="btn-random1"> Get Details </button>
            </Link>
        </ul>
    )
}

export default withRouter(CocktailRandom)

const shadow = {
    textShadow: '0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)'
};