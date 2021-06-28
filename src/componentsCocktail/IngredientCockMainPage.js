import { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import dataSource from '../datasource/DataSource';
import dataSource1 from '../datasource/formstyles';
import Spinner from "../components/Spinner";

const url5 = `https://www.thecocktaildb.com/images/ingredients/`

const IngredientCockMainPage = () => {
    
    const { ingredientCockList } = dataSource();
    const [paginate, setPaginate] = useState(24);
    const [description, setDescription] = useState(`Meal ingredients`);
    const { backgroundArr } = dataSource1();

    let backGroundImg = backgroundArr.sort(() => Math.random() - 0.5)[0];


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



    const thumbnailTitleCard = (!(ingredientCockList && Object.keys(ingredientCockList).length)) ? "" : ingredientCockList.slice(0, paginate).map((images, index) => {
        return (
            <figure key={index} className="thumbnailCard">
                <Link key={index} to={{
                    pathname: `/singlecocktailingredientpage/${images.strIngredient1}`,
                    state: `${images.strIngredient1}`
                }}>
                    <div className="thumbnail-plate">
                        <img rel="preload" src={`${url5}/${images.strIngredient1}-Small.png`} alt={images.strIngredient1} as="image" />
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

                        <button className={paginate > ingredientCockList.length ? "hide" : "loadmore-btn"} onClick={() => setPaginate((prevValue) => prevValue + 24)} style={{ marginTop: '25px' }}>Load More Recipes</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default withRouter(IngredientCockMainPage)
