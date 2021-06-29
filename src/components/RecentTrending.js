import React, { useState } from 'react'
import { withRouter, Link } from "react-router-dom";
import dataSource from '../datasource/DataSource';
import countryData from '../datasource/countryArray';

const RecentTrending = () => {

    const { recentMeal, countryInfo } = dataSource();
    const { countryList } = countryData();
    const [paginate, setPaginate] = useState(8);


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
                <div className="latest-list__card" key={recentMeal[index].idMeal}>
                    <Link to={{
                        pathname: `/meals/${recentMeal[index].idMeal}/${meal.strMeal}`
                    }}>
                        <div className="latest-list__poster">
                            <img rel="preload" src={meal.strMealThumb} alt={meal.strMeal} as="image" />
                        </div>

                        <div className="latest-title__discover">
                            <div>
                                <small>{meal.strCategory}</small>
                                <p className='latest-title'> {meal.strMeal} </p>
                                <p>
                                    <span>
                                        <img rel="preload" src={countryFlagFromRest(meal.strArea)} alt={meal.strMeal} as="image" style={{
                                            transition: 'all .3s', width: '24px', height: '12px', marginRight: '3px'
                                        }} />
                                    </span>
                                    <span>{meal.strArea}</span> </p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })

    return (
        <div className="category-latest__wrapper" style={{ flexDirection: 'column' }}>
            <div className="latest__wrapper">
                <h1>Trending Now</h1>
                <div className="letest__content">
                    {latestfoodCard}
                </div>

                <button className={paginate > recentMeal.length ? "hide" : "loadmore-btn"} onClick={() => setPaginate((prevValue) => prevValue + 2)} style={{ marginTop: '25px' }}>Get More Trending Meals</button>
            </div>
        </div>
    )
}


export default withRouter(RecentTrending)