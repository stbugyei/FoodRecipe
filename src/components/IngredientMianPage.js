import { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import dataSource from '../datasource/DataSource';
import dataSource1 from '../datasource/formstyles';
import Spinner from "./Spinner";

const url5 = `https://www.themealdb.com/images/ingredients/`

const IngredientMianPage = () => {

    const { ingredientList } = dataSource();
    const [display, setDisplay] = useState(false);
    const [paginate, setPaginate] = useState(24);
    const { useMediaQuery, backgroundArr, queryStyle } = dataSource1();
    const targetWidth = useMediaQuery('screen and (min-width: 320px) and (max-width: 780px)');

    let backGroundImg = backgroundArr.sort(() => Math.random() - 0.5)[0];


    useEffect(() => {
        //====== function for scroll event to check is page is scrolled to the bottom =======//

        const scrolltoBottom = () => {
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight ? setDisplay(true) : setDisplay(false);
        }

        window.addEventListener('scroll', scrolltoBottom);
        return () => window.removeEventListener('scroll', scrolltoBottom);

    }, [])


    //====== function to load more ingredients =======//
    const loadMoreIngredients = () => {
        setPaginate((prevValue) => prevValue + 24)
    }

    //========== A Style function to change the visibility of the scroll button ===========//
    const scrollVisibility = () => {
        return { transform: display ? 'scale(1)' : 'scale(0)' };
    }


    const thumbnailTitleCard = (!(ingredientList && Object.keys(ingredientList).length)) ? "" : ingredientList.slice(0, paginate).map((images, index) => {
        return (
            <figure key={images.idIngredient} className="thumbnailCard">
                <Link key={index} to={{
                    pathname: `/singleingredientpage/${images.strIngredient}`,
                    state: `${images.strIngredient}`
                }}>
                    <div className="thumbnail-plate">
                        <LazyLoadImage
                            alt={images.strIngredient}
                            effect="blur"
                            src={`${url5}/${images.strIngredient}-Small.png`}
                            style={{ transition: 'all .3s', width: '100px', height: '100px' }}
                            className="lazyimg"
                        />
                    </div>
                    <figcaption>
                        {images.strIngredient}
                    </figcaption>
                </Link>
            </figure>
        )
    })

    //====== Function to display description  ====== 

    const description = () => {
        const ingName = (!(ingredientList && Object.keys(ingredientList).length)) ? "" : ingredientList.map((name) => name.strIngredient)
        if (ingName) {
            return `${ingName.slice(0, 30)}`
        } else {
            return `Meal ingredients`
        }
    }

    return (

        <div className="header">
            <div className="container">

                <MetaTags>
                    <title> Priscy | Meal Recipes </title>
                    <meta name="description" content={description()} />
                </MetaTags>

                <div className="search-input__wrapper" style={{ backgroundImage: `url(${backGroundImg})` }}>
                    <div className="query1" style={queryStyle.responsive(targetWidth)}><h1>Select from Pool Of Recipes </h1></div>
                </div>
                {(!(ingredientList && Object.keys(ingredientList).length)) ? < Spinner /> :
                    <div className="ingredient-front__wrapper">
                        <div className="ingredient-front__content">
                            {thumbnailTitleCard}
                        </div>

                        <button className={paginate > ingredientList.length && display ? "hide" : "loadmore-btn"} onClick={() => loadMoreIngredients()} style={scrollVisibility()}>Load More Ingredients</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default withRouter(IngredientMianPage)
