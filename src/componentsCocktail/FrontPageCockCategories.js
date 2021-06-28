import React, { useState } from 'react'
import { withRouter, Link } from "react-router-dom";
import dataSource from '../datasource/DataSource';


const FrontPageCockCategories = () => {

    const { popularCockList, recentDrinks } = dataSource();
    const [paginate, setPaginate] = useState(5);
    const [paginate1, setPaginate1] = useState(6);



    const popularDrinksCard = (!(popularCockList && Object.keys(popularCockList).length))
        ? "" : popularCockList.slice(0, paginate).map((drink, index) => {
            return (

                <div className="pop-card" key={popularCockList[index].idDrink} >
                    <Link to={{
                        pathname: `/drinks/${popularCockList[index].idDrink}/${drink.strDrink}`
                    }}>
                        <div className="pop-card__imgwrapper">
                            <div className="pop-card__imginner">
                                <div className="pop-card__skew">
                                    <img rel="preload" src={drink.strDrinkThumb} alt={drink.strDrink} as="image" />
                                </div>
                            </div>
                        </div>
                        <div className="pop-card__text">
                            <p className='latest-title' style={{ color: '#c29' }}> {drink.strDrink} </p>
                            <div className="pop-card__textsub" style={{ marginTop: '5px' }}>
                                <small>{drink.strCategory}</small>
                                <p>{drink.strAlcoholic}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })



    const latestDrinksCard = (!(recentDrinks && Object.keys(recentDrinks).length))
        ? "" : recentDrinks.slice(0, paginate1).map((drink, index) => {
            return (
                <div className="latest-list__card1" key={recentDrinks[index].idDrink}>
                    <Link to={{
                        pathname: `/drinks/${recentDrinks[index].idDrink}/${drink.strDrink}`
                    }}>
                        <div className="latest-list__poster">
                            <img rel="preload" src={drink.strDrinkThumb} alt={drink.strDrink} as="image" />
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
        <div className="categorycoc-latest__wrapper">
            <div className="latest__wrapper" style={{ width: '100%' }}>
                <h1>Popular Collections</h1>
                <div className="letest__content">
                    {popularDrinksCard}
                </div>
                <button className={paginate > popularCockList.length ? "hide" : "loadmore-btn"} onClick={() => setPaginate((prevValue) => prevValue + 5)} style={{ marginTop: '25px' }}>Get More of the Collections</button>
            </div>

            <div className="categorycoc-front__wrapper">
                <h1>Recently Added</h1>
                <div className="letest__content1">
                    {latestDrinksCard}
                </div>

                <button className={paginate1 > recentDrinks.length ? "hide" : "loadmore-btn"} onClick={() => setPaginate1((prevValue) => prevValue + 6)} style={{ marginTop: '25px' }}>Get More Recent Items</button>
            </div>
        </div>
    )
}

export default withRouter(FrontPageCockCategories)
