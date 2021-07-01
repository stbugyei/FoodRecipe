import React, { useState } from 'react'
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import '../styles/search.css'
import Loader from '../components/Loader';
import videoURL from '../video/soft.mp4'
import poster from '../image/drinkcock.webp'

const NonAlcohol = (props) => {

    const {data} = props

    const [paginate, setPaginate] = useState(24);
 
    if (!(data && Object.keys(data).length)) {
        return <><Loader /></>
    }

    const nonAlcoholCard = data.slice(0, paginate).map((drink, index) => {
        return (
            <ul className="food-list__card" key={data[index].idDrink}>

                <li className="food-list__poster">
                    <img rel="preload" src={drink.strDrinkThumb} alt={drink.strDrink} as="image" />
                </li>

                <div className="title-discover">
                    <li>
                        <p className='title'> {drink.strDrink} </p>
                    </li>

                    <Link to={{
                        pathname: `/drinks/${data[index].idDrink}/${drink.strDrink}`
                    }}>
                        <button className="btn-discover1"> Discover </button>
                    </Link>
                </div>
            </ul>
        )
    })

    return (
        <div className="header">
            <div className="container">

                <MetaTags>
                    <title>Priscy | Non-Alcohol</title>
                    <meta name="description" content="Finest non-alcoholic Beverages made from orange juice, grenadine, pineapple and other fruit and vegetables. Also available is milk, cinamon, egg, chocolate and celery and many more." />
                </MetaTags>

                <div className="background-video__wrapper">
                    <div className="background-video__overley"></div>
                    <h1 className="background-video__text">Finest Non-Alcoholic Beverages</h1>
                    <h1 className="background-video__text1"><i className="fas fa-arrow-circle-down"></i></h1>
                    <div className="background-video__content">
                        <video className="background-video" preload="metadata" autoPlay loop muted poster={poster}>
                            <source src={videoURL} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="food-list__cardwrapper" style={{ marginTop: '20px' }}>
                    {nonAlcoholCard}
                </div>

                <button className={paginate > (data && Object.keys(data).length) ? "hide" : "loadmore-btn"} onClick={() => setPaginate((prevValue) => prevValue + 24)} style={{ marginTop: '25px' }}>Load More Drinks</button>
            </div>
        </div>
    )
}
export default withRouter(NonAlcohol)
