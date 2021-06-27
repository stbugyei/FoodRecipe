import React, { useState } from 'react'
import { Link, withRouter } from "react-router-dom";
import '../styles/search.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const RandomCocktailGenerator = (props) => {

    const { randomCocktailGenerator, errorCocktailGenerator } = props
    const [paginate, setPaginate] = useState(4)

    if (!(randomCocktailGenerator && Object.keys(randomCocktailGenerator).length)) {
        return <>{errorCocktailGenerator}</>
    }

    const alcohol = {
        position: 'absolute',
        maxWidth: '100%',
        left: '0',
        top: '0',
        display: 'block',
        padding: '5px',
        color: '#980369',
        fontWeight: '500',
        borderBottomRightRadius: '4px',
        backgroundColor: 'hsla(0, 0%, 100%, .31)',
        textShadow: '0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)'
    };

    const randomfoodCard = randomCocktailGenerator.slice(0, paginate).map((drink, index) => {

        return (
            <div className="food-list__card" key={randomCocktailGenerator[index].idDrink}>

                <div className="food-list__poster">
                    <LazyLoadImage
                        alt={drink.strDrink}
                        effect="blur"
                        src={drink.strDrinkThumb}
                        style={{ transition: 'all .3s', width: '100%', height: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                        className="lazyimg"
                    />
                    <span style={alcohol}>{drink.strAlcoholic}</span>
                </div>

                <div className="title-discover">
                    <div>
                        <p className='title'> {drink.strDrink} </p>
                    </div>

                    <Link to={{
                        pathname: `/drinks/${randomCocktailGenerator[index].idDrink}/${drink.strDrink}`
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
                <div className="randomgenerator-content">
                    <h1>Random Cocktails</h1>
                    <div className="randomgenerator-cardwrapper">
                        {randomfoodCard}
                    </div>

                    <button className={paginate > randomCocktailGenerator.length ? "hide" : "loadmore-btn"} onClick={() => setPaginate((prevValue) => prevValue + 4)} style={{ marginTop: '25px' }}>View More Random Meals</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(RandomCocktailGenerator)
