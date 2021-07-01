import React, { useState } from 'react'
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import '../styles/search.css'
import Loader from '../components/Loader';
import videoURL from '../video/alchohol.mp4'
import poster from '../image/drinkcock.webp'

const Alcohol = (props) => {

    const { alcohol } = props

    const [paginate, setPaginate] = useState(24);

    if (!(alcohol && Object.keys(alcohol).length)) {
        return <><Loader /></>
    }

    const alcoholCard = alcohol.slice(0, paginate).map((drink, index) => {
        return (
            <div className="food-list__card" key={alcohol[index].idDrink}>

                <div className="food-list__poster">
                    <img rel="preload" src={drink.strDrinkThumb} alt={drink.strDrink} as="image" />
                </div>

                <div className="title-discover">
                    <div>
                        <p className='title'> {drink.strDrink} </p>
                    </div>

                    <Link to={{
                        pathname: `/drinks/${alcohol[index].idDrink}/${drink.strDrink}`
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

                <MetaTags>
                    <title>Priscy | Alcohol</title>
                    <meta name="description" content="Best of all alcoholic Beverages with ingredients such as champagne, gin, rum, Vodka, brandy, Strawberries, banana, triple Sec and many more." />
                </MetaTags>

                <div className="background-video__wrapper">
                    <div className="background-video__overley"></div>
                    <h1 className="background-video__text">Best of Alcoholic Beverages</h1>
                    <h1 className="background-video__text1"><i className="fas fa-arrow-circle-down"></i></h1>
                    <div className="background-video__content">
                        <video className="background-video" autoPlay loop muted poster={poster}>
                            <source src={videoURL} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="food-list__cardwrapper" style={{ marginTop: '20px' }}>
                    {alcoholCard}
                </div>

                <button className={paginate > (alcohol && Object.keys(alcohol).length) ? "hide" : "loadmore-btn"} onClick={() => setPaginate((prevValue) => prevValue + 24)} style={{ marginTop: '25px' }}>Load More Drinks</button>
            </div>
        </div>
    )
}

export default withRouter(Alcohol)