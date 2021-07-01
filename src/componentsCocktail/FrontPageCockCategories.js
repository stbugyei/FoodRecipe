import React, { useState } from 'react'
import { withRouter, Link } from "react-router-dom";
import Spinner from '../components/Spinner';
import dataSource from '../datasource/DataSource';


const FrontPageCockCategories = () => {

    const { recentDrinks } = dataSource();
    const [paginate1, setPaginate1] = useState(6);


    if (!(recentDrinks && Object.keys(recentDrinks).length)) {
        return <Spinner />
    }

    const latestDrinksCard = (!(recentDrinks && Object.keys(recentDrinks).length))
        ? "" : recentDrinks.slice(0, paginate1).map((drink, index) => {
            return (
                <div className="latest-list__card1" key={recentDrinks[index].idDrink}>
                    <Link to={{
                        pathname: `/drinks/${recentDrinks[index].idDrink}/${drink.strDrink}`
                    }}>
                        <div className="latest-list__poster">
                            <picture>
                                <source media="(max-width: 799px)" srcSet={drink.strDrinkThumb} />
                                <source media="(min-width: 800px)" srcSet={drink.strDrinkThumb} />
                                <img rel="preload" src={drink.strDrinkThumb} alt={drink.strDrink} as="image" />
                            </picture>

                        </div>

                        <div className="latest-title__discover">
                            <div>
                                <small>{drink.strCategory}</small>
                                <p className='latest-title' style={{ color: '#c9' }}> {drink.strDrink} </p>
                                <p>{drink.strAlcoholic}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })



    return (

        <div className="header">
            <div className="container">
                <div className="categorycoc-latest__wrapper">

                    <div className="categorycoc-front__wrapper">
                        <h1>Recently Added</h1>
                        <div className="letest__content1">
                            {latestDrinksCard}
                        </div>

                        <button className={paginate1 > (recentDrinks && Object.keys(recentDrinks).length) ? "hide" : "loadmore-btn"} onClick={() => setPaginate1((prevValue) => prevValue + 6)} style={{ marginTop: '25px' }}>Get More Recent Items</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(FrontPageCockCategories)
