import React from 'react'
import { withRouter, Link } from "react-router-dom";
import '../styles/random.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import option from '../image/option.svg'
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
                        <LazyLoadImage
                            alt={randomCocktail[0].strDrinkThumb}
                            effect="blur"
                            src={randomCocktail[0].strDrinkThumb}
                            placeholderSrc={option}
                            style={{ transition: 'all .3s', width: '100%', height: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                            className="lazyimg"

                        />
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