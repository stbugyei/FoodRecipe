import React, { useState } from 'react'
import { withRouter, Link } from "react-router-dom";
import dataSource from '../datasource/DataSource';
import countryData from '../datasource/countryArray';

const RecentTrending = () => {

    const { recentMeal, countryInfo } = dataSource();
    const { countryList } = countryData();
    const [paginate, setPaginate] = useState(4);

    //========= Function to return ISO ===========//
    const countryFlag = (flag) => {
        let getFlag = (!(countryList && Object.keys(countryList).length))
            ? "" : countryList.filter(name => name.Demonym === flag);
        if (getFlag) { return getFlag.map((iso) => iso.Code) }
    }

    const countryFlagFromRest = (flag) => {
        let getFlag = (!(countryInfo && Object.keys(countryInfo).length))
            ? "" : countryInfo.filter(name => name.alpha2Code === countryFlag(flag)[0]);
        if (getFlag) { return getFlag.map((flagImg) => flagImg.flag) }
    }


    const latestfoodCard = (!(recentMeal && Object.keys(recentMeal).length))
        ? "" : recentMeal.slice(0, paginate).map((meal, index) => {
            return (
                <div className="food-list__card" key={meal.idMeal}>
                    <Link to={{
                        pathname: `/meals/${recentMeal[index].idMeal}/${meal.strMeal}`
                    }}>

                        <div className="food-list__poster">
                            <picture>
                                <source media="(max-width: 799px)" srcSet={meal.strMealThumb} />
                                <source media="(min-width: 800px)" srcSet={meal.strMealThumb} />
                                <img rel="preload" src={meal.strMealThumb} alt={meal.strMeal} as="image"></img>
                            </picture>
                        </div>

                        <div className="title-discover1">
                            <small>{meal.strCategory}</small>
                            <p className='latest-title'> {meal.strMeal} </p>
                            <p>
                                <span>
                                    <img rel="preload" src={countryFlagFromRest(meal.strArea)} alt={meal.strMeal} as="image" style={{
                                        transition: 'all .3s', width: '24px', height: '12px', marginRight: '3px'
                                    }} />
                                </span>
                                <span>{meal.strArea}</span>
                            </p>
                        </div>
                    </Link>
                </div>
            )
        })

    return (
        <div className="randomgenerator-content">
            <h1>Trending Now</h1>
            <div className="randomgenerator-cardwrapper">
                {latestfoodCard}
            </div>

            <button className={paginate > (recentMeal && Object.keys(recentMeal).length) ? "hide" : "loadmore-btn"} onClick={() => setPaginate((prevValue) => prevValue + 4)} style={{ marginTop: '25px' }}>Get More Trending Meals</button>
        </div>
    )
}


export default withRouter(RecentTrending)