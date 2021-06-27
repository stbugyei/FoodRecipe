import { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import dataSource from '../datasource/DataSource';
import dataSource1 from '../datasource/formstyles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinner from "../components/Spinner";

const url5 = `https://www.thecocktaildb.com/images/ingredients/`

const IngredientCockMainPage = () => {
    const { ingredientCockList } = dataSource();
    const [display, setDisplay] = useState(false);
    const [paginate, setPaginate] = useState(24);
    const [description, setDescription] = useState(`Meal ingredients`);
    const { backgroundArr } = dataSource1();
   
    let backGroundImg = backgroundArr.sort(() => Math.random() - 0.5)[0];

    useEffect(() => {
        //====== function for scroll event to check is page is scrolled to the bottom =======//
        const scrolltoBottom = () => {
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight ? setDisplay(true) : setDisplay(false);
        }

        window.addEventListener('scroll', scrolltoBottom);
        return () => window.removeEventListener('scroll', scrolltoBottom);

    }, [])


    useEffect(() => {
        //====== Function to display description  ====== 
        const description = () => {
            const ingName = (!(ingredientCockList && Object.keys(ingredientCockList).length)) ? "" : ingredientCockList.map((name) => name.strIngredient1)
            if (!ingName) {
                setDescription(`Meal ingredients`)
            } else {
                setDescription(`${ingName}`)
            }
        }
        description();

    }, [ingredientCockList])


    //====== function to load more ingredients =======//
    const loadMoreIngredients = () => {
        setPaginate((prevValue) => prevValue + 24)
    }

    //========== A Style function to change the visibility of the scroll button ===========//
    const scrollVisibility = () => {
        return { transform: display ? 'scale(1)' : 'scale(0)' };
    }


    const thumbnailTitleCard = (!(ingredientCockList && Object.keys(ingredientCockList).length)) ? "" : ingredientCockList.slice(0, paginate).map((images, index) => {
        return (
            <figure key={index} className="thumbnailCard">
                <Link key={index} to={{
                    pathname: `/singlecocktailingredientpage/${images.strIngredient1}`,
                    state: `${images.strIngredient1}`
                }}>
                    <div className="thumbnail-plate">
                    <LazyLoadImage
                          alt={images.strIngredient1}
                            effect="blur"
                            src={`${url5}/${images.strIngredient1}-Small.png`}
                            style={{ transition: 'all .3s', width: '100px', height: '100px'}}
                            className="lazyimg"
                        />
                    </div>
                    <figcaption>
                        {images.strIngredient1}
                    </figcaption>
                </Link>
            </figure>
        )
    })


    return (

        <div className="header">
            <div className="container">

                <MetaTags>
                    <title> Priscy | Cocktail Recipes </title>
                    <meta name="description" content={description} />
                </MetaTags>

                <div className="search-input__wrapper" style={{ backgroundImage: `url(${backGroundImg})` }}>
                    <div className="query"><h1>Browse from Recipes Collection </h1></div>
                </div>
                {(!(ingredientCockList && Object.keys(ingredientCockList).length)) ? <Spinner /> :
                    <div className="ingredient-front__wrapper">
                        <div className="ingredient-front__content">
                            {thumbnailTitleCard}
                        </div>

                        <button className={paginate > ingredientCockList.length && display ? "hide" : "loadmore-btn"} onClick={() => loadMoreIngredients()} style={scrollVisibility()}>Load More Ingredients</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default withRouter(IngredientCockMainPage)
