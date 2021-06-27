import React, { useState } from 'react'
import { Link, withRouter } from "react-router-dom";
import '../styles/search.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const RandomGenerator = (props) => {

    const { randomRecipeGenerator, errorRecipeGenerator } = props
    const [paginate, setPaginate] = useState(4);

    if (!(randomRecipeGenerator && Object.keys(randomRecipeGenerator).length)) {
        return <>{errorRecipeGenerator}</>
    }

    const randomfoodCard = randomRecipeGenerator.slice(0, paginate).map((meal, index) => {

        return (
            <div className="food-list__card" key={randomRecipeGenerator[index].idMeal}>

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
                        pathname: `/meals/${randomRecipeGenerator[index].idMeal}/${meal.strMeal}`
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
                <div className="randomgenerator-content">
                    <h1>Random Meals</h1>
                    <div className="randomgenerator-cardwrapper">
                        {randomfoodCard}
                    </div>

                    <button className={paginate > randomRecipeGenerator.length ? "hide" : "loadmore-btn"} onClick={() => setPaginate((prevValue) => prevValue + 4)} style={{ marginTop: '25px' }}>View More Random Meals</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(RandomGenerator)