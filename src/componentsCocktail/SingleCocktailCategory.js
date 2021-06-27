import { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import dataSource1 from '../datasource/formstyles';
import Spinner from "../components/Spinner";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const API_KEY = `${process.env.REACT_APP_FOOD_API_KEY}`,
    urlcocktail = `https://www.thecocktaildb.com/api/json/v2`;


const SingleCocktailCategory = (props) => {

    const [categoryMain, setCategoryMain] = useState("");
    const [paginate, setPaginate] = useState(12);
    const { useMediaQuery, backgroundArr, queryStyle } = dataSource1();
    const targetWidth = useMediaQuery('screen and (min-width: 320px) and (max-width: 780px)');
    let backGroundImg = backgroundArr.sort(() => Math.random() - 0.5)[0];

    let query = props.location.state

    useEffect(() => {
        const filterMainCategory = async () => {
            const categoryMainFeed = await fetch(`${urlcocktail}/${API_KEY}/filter.php?c=${query}`)
            if (query !== "") {
                try {
                    const ingredientDta = await categoryMainFeed.json();
                    setCategoryMain(ingredientDta.drinks)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                setCategoryMain("");
            }
        }

        filterMainCategory();

    }, [query])


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


    if (!(categoryMain && Object.keys(categoryMain).length)) {
        return <Spinner />
    }

    const drinksWithQueryCard = (!(categoryMain && Object.keys(categoryMain).length))
        ? <Spinner /> : categoryMain.slice(0, paginate).map((drink, index) => {
            return (
                <div className="food-list__card" key={categoryMain[index].idDrink}>

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
                            pathname: `/drinks/${categoryMain[index].idDrink}/${drink.strDrink}`
                        }}>
                            <button className="btn-discover1"> Discover </button>
                        </Link>
                    </div>
                </div>
            )
        })



    //====== Function to display description  ====== 
    const description = () => {
        const ingTitle = (!(categoryMain && Object.keys(categoryMain).length))
            ? "" : categoryMain.map((details) => details.strDrink)
        if (ingTitle) {
            return `${ingTitle}`
        } else {
            return `single Ingredient data`
        }
    }

    return (
        <div className="header">
            <div className="container">

                <MetaTags>
                    <title>Priscy | {query}</title>
                    <meta name="description" content={description().slice(0, 20)} />
                </MetaTags>

                <div className="search-input__wrapper" style={{ backgroundImage: `url(${backGroundImg})` }}>
                    <div className="query" style={queryStyle.responsive(targetWidth)}><h1>Select From Drinks Category</h1></div>
                </div>

                <div className="food-list__cardwrapper" style={{ marginTop: '20px' }}>
                    {drinksWithQueryCard}
                </div>
            </div>
        </div>
    )
}

export default withRouter(SingleCocktailCategory)
