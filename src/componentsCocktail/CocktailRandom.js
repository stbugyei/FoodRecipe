import React from 'react'
import { withRouter, Link } from "react-router-dom";
import '../styles/random.css'
import Spinner from '../components/Spinner';

const CocktailRandom = (props) => {

    const { randomCocktail } = props

    if (!(randomCocktail && Object.keys(randomCocktail).length)) {
        return <Spinner />
    }

    return (

        <div className="random-list__card">
            <div className="main-random__caption1">
                {randomCocktail ? <span className="category1">{randomCocktail[0].strCategory}</span> : null}

                <button className="btn-random__pick1">Priscy's Special</button>
            </div>

            <div className="image-details__wrapper">
                <div className="image-details">
                    <div className="random-list__poster">
                        <img rel="preload" src={randomCocktail[0].strDrinkThumb} alt={randomCocktail[0].strDrinkThumb} as="image" />
                    </div>

                    <div className="title-button">
                        <div className="random-list__postertitle">
                            {randomCocktail ? <p style={shadow}> {randomCocktail[0].strDrink} </p> : <span> Name Not Available </span>}
                        </div>
                        <div>
                            <Link to={{ pathname: `/drinks/${randomCocktail[0].idDrink}/${randomCocktail[0].strDrink}` }}>
                                <button className="btn-random1"> Get Details </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CocktailRandom)

const shadow = {
    textShadow: '0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)'
};