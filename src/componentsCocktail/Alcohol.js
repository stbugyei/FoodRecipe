import React, { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/search.css'
import Loader from '../components/Loader';
import videoURL from '../video/alchohol.mp4'
import poster from '../image/drinkcock.jpg'


const Alcohol = (props) => {

    const { alcohol } = props
    const [paginate, setPaginate] = useState(24);

    useEffect(() => {

        //====== function to load more ingredients =======//
        const displaxNextList = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setPaginate((prevValue) => prevValue + 24)
            }
        }

        window.addEventListener('scroll', displaxNextList);
        return () => window.removeEventListener('scroll', displaxNextList);

    }, [])


    if (!(alcohol && Object.keys(alcohol).length)) {
        return <><Loader /></>
    }


    const alcoholCard = alcohol.slice(0, paginate).map((drink, index) => {
        return (
            <div className="food-list__card" key={alcohol[index].idDrink}>

                <div className="food-list__poster">
                    <LazyLoadImage
                        alt={drink.strDrink}
                        effect="blur"
                        src={drink.strDrinkThumb}
                        style={{ transition: 'all .3s', width: '100%', height: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                        className="lazyimg"
                    />
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
            </div>
        </div>
    )
}

export default withRouter(Alcohol)