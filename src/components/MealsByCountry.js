import React from "react";
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import dataSource from '../datasource/DataSource';
import dataSource1 from '../datasource/formstyles';
import countryData from '../datasource/countryArray';
import '../styles/search.css'
import option from '../image/option.svg'

const MealsByCountry = () => {

    const { mealCountryInfo, countryInfo } = dataSource();
    const { countryList } = countryData();
    const { useMediaQuery, backgroundArr, queryStyle } = dataSource1();
    const targetWidth = useMediaQuery('screen and (min-width: 320px) and (max-width: 780px)');

    let backGroundImg = backgroundArr.sort(() => Math.random() - 0.5)[0];


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

    //====== Function to display description  ====== 
    const description = () => {
        const ingTitle = (!(mealCountryInfo && Object.keys(mealCountryInfo).length)) ? ""
            : mealCountryInfo.map((details) => details.strArea)
        if (ingTitle) {
            return `${ingTitle}`
        } else {
            return `world countries`
        }
    }


    const countryListCard = (!(mealCountryInfo && Object.keys(mealCountryInfo).length)) ? ""
        : mealCountryInfo.map((name, index) => {
            return (
                <figure className="thumbnailCard" key={index}>
                    <Link key={index} to={{
                        pathname: `/singlecountrypage/${name.strArea}`,
                        state: `${name.strArea}`
                    }}>
                        <LazyLoadImage
                            alt={countryFlagFromRest(name.strArea)}
                            effect="blur"
                            src={name.strArea === 'Unknown' ? option : countryFlagFromRest(name.strArea)}
                            style={{ transition: 'all .3s', width: '100px', height: '100px' }}
                            className="lazyimg"
                        />
                        <figcaption>
                            {name.strArea}
                        </figcaption>
                    </Link>
                </figure>
            )
        })

    return (

        <div className="header">
            <div className="container">

                <MetaTags>
                    <title>Priscy | Meals by Countries</title>
                    <meta name="description" content={description()} />
                </MetaTags>

                <div className="search-input__wrapper" style={{ backgroundImage: `url(${backGroundImg})` }}>
                    <div className="query" style={queryStyle.responsive(targetWidth)}><h1>Let's Go Continental</h1></div>
                </div>

                <div className="ingredient-front__wrapper">
                    <div className="ingredient-front__content">
                        {countryListCard}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MealsByCountry)
