import React, { useState } from 'react'
import { withRouter, Link } from "react-router-dom";
import dataSource from '../datasource/DataSource';


const CockRecentlyAdded = () => {

    const { popularCockList } = dataSource();
    const [paginate, setPaginate] = useState(5);

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


    return (
        <div className="header">
            <div className="container">
                <div className="categorycoc-latest__wrapper">
                    <div className="latest__wrapper" style={{ width: '100%' }}>
                        <h1>Popular Collections</h1>
                        <div className="letest__content">
                            {popularDrinksCard}
                        </div>
                        <button className={paginate > popularCockList.length ? "hide" : "loadmore-btn"} onClick={() => setPaginate((prevValue) => prevValue + 5)} style={{ marginTop: '25px' }}>Get More of the Collections</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CockRecentlyAdded)
