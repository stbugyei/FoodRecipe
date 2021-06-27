import { useState, useEffect } from 'react'
import { Link, withRouter, useHistory } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import dataSource from '../datasource/DataSource';
import countryData from '../datasource/countryArray';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinner from "./Spinner";
import option from '../image/option.svg'

const API_KEY = `${process.env.REACT_APP_FOOD_API_KEY}`,
    urlsinglecountry = `https://www.themealdb.com/api/json/v2/`

const SingleCountryPage = (props) => {

    const history = useHistory();

    const { mealCountryInfo, countryInfo } = dataSource();
    const { countryList } = countryData();
    const [countryMain, setCountryMain] = useState("");
    const [description, setDescription] = useState('');
    let query = props.location.state

    useEffect(() => {

        const filterMainCountry = async () => {
            if (query) {
                const countryMainFeed = await fetch(`${urlsinglecountry}${API_KEY}/filter.php?a=${query}`)
                if (countryMainFeed.status === 200) {
                    try {
                        const countryDta = await countryMainFeed.json();
                        setCountryMain(countryDta.meals)
                    } catch (error) {
                        console.log(error)
                    }
                }
                else {
                    setCountryMain("");
                }
            }
        }

        filterMainCountry();

    }, [query])


    useEffect(() => {
        //====== Function to display description  ====== 
        const description = () => {
            const ingTitle = (!(mealCountryInfo && Object.keys(mealCountryInfo).length)) ? "" : mealCountryInfo.map((details) => details.strArea)
            if (!ingTitle) {
                setDescription(`world countries`)
            } else {
                setDescription(`${ingTitle}`)
            }
        }
        description();

    }, [mealCountryInfo])


    if (!(mealCountryInfo && Object.keys(mealCountryInfo).length)) {
        return <Spinner />
    }

    //======= Navigation functions =========
    const handleClick = () => {
        history.goBack();
    }

    //========= Function to return ISO ===========//
    const countryFlag = (flag) => {
        let getFlag = (!(countryList && Object.keys(countryList).length))
            ? "" : countryList.filter(name => name.Demonym === flag);
        if (getFlag) { return getFlag.map((iso) => iso.Code) }
    }

    const countryFlagFromRest = () => {
        let getFlag = (!(countryInfo && Object.keys(countryInfo).length))
            ? "" : countryInfo.filter(name => name.alpha2Code === countryFlag(query)[0]);
        if (getFlag) { return getFlag.map((flagImg) => flagImg.flag) }
    }


    //======= list of meals associated with the single ingredient =========
    const CountryQueryCard = (!(countryMain && Object.keys(countryMain).length))
        ? "" : countryMain.map((meal, index) => {
            return (
                <div className="food-list__card" key={countryMain[index].idMeal}>
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
                            pathname: `/meals/${countryMain[index].idMeal}/${meal.strMeal}`
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

                <MetaTags>
                    <title> Priscy | {query} </title>
                    <meta name="description" content={description} />
                </MetaTags>

                <div className="food-wrapper1">
                    <button className="btn-navigate__back" onClick={handleClick}><i className="fas fa-arrow-left"></i></button>
                    <div className="food-header__content1" style={{ marginTop: '10px' }}>
                        <div className="single-detail__wrapper">
                            <img src={query === 'Unknown' ? option : countryFlagFromRest()} alt={query} style={{ borderRadius: '5px' }} />
                        </div>
                    </div>

                    <div className="randomgenerator-content">
                        {(!(countryMain && Object.keys(countryMain).length))
                            ? <h2> {query} Meals will be uploaded soon, please visit later.</h2> : <h1>Some {query} Meals</h1>}
                        <div className="randomgenerator-cardwrapper">
                            {CountryQueryCard}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SingleCountryPage)