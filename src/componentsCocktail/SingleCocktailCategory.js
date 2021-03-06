import { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import dataSource1 from '../datasource/formstyles';
import Spinner from "../components/Spinner";

const API_KEY = `${process.env.REACT_APP_FOOD_API_KEY}`,
    urlcocktail = `https://www.thecocktaildb.com/api/json/v2`;


const SingleCocktailCategory = (props) => {

    const [categoryMain, setCategoryMain] = useState("");
    const [paginate, setPaginate] = useState(12);
    const [description, setDescription] = useState('');
    const { backgroundArr } = dataSource1();
    let backGroundImg = backgroundArr.sort(() => Math.random() - 0.5)[0];

    let query = props.location.state

    useEffect(() => {
        const filterMainCategory = async () => {
            const categoryMainFeed = await fetch(`${urlcocktail}/${API_KEY}/filter.php?c=${query}`)
            if (query !== "") {
                try {
                    const ingredientDta = await categoryMainFeed.json();
                    setCategoryMain(ingredientDta.drinks)

                    const ingTitle = (!(ingredientDta.drinks && Object.keys(ingredientDta.drinks).length))
                        ? "" : ingredientDta.drinks.map((details) => details.strDrink)
                    if (!ingTitle) {
                        setDescription(`single Ingredient data`)
                    } else {
                        setDescription(`${ingTitle}`)
                    }

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
                setPaginate((prevValue) => prevValue + 12)
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
                        <img rel="preload" src={drink.strDrinkThumb} alt={drink.strDrink} as="image" />
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


    return (
        <div className="header">
            <div className="container">

                <MetaTags>
                    <title>Priscy | {query}</title>
                    <meta name="description" content={description} />
                </MetaTags>

                <div className="search-input__wrapper" style={{ backgroundImage: `url(${backGroundImg})` }}>
                    <div className="query"><h1>Collections from {query}</h1></div>
                </div>
                <div style={{ padding: '30px' }}>
                    <div className="food-list__cardwrapper" style={{ marginTop: '20px' }}>
                        {drinksWithQueryCard}
                    </div>

                    <button className={paginate > categoryMain.length ? "hide" : "loadmore-btn"} onClick={() => setPaginate((prevValue) => prevValue + 12)} style={{ marginTop: '25px 12px' }}>Load More Drinks</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SingleCocktailCategory)
