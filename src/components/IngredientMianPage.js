import { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import dataSource from '../datasource/DataSource';
import dataSource1 from '../datasource/formstyles';
import Spinner from "./Spinner";

const url5 = `https://www.themealdb.com/images/ingredients/`

const IngredientMianPage = () => {

    const { ingredientList } = dataSource();
    const [description, setDescription] = useState(`Meal ingredients`);
    const [paginate, setPaginate] = useState(24);
    const { backgroundArr } = dataSource1();
    let backGroundImg = backgroundArr.sort(() => Math.random() - 0.5)[0];


    useEffect(() => {
        //====== Function to display description  ====== 
        const description = () => {
            const ingName = (!(ingredientList && Object.keys(ingredientList).length)) ? "" : ingredientList.map((name) => name.strIngredient)
            if (!ingName) {
                setDescription(`Meal ingredients`)
            } else {
                setDescription(`${ingName}`)
            }
        }
        description()

    }, [ingredientList])


    const thumbnailTitleCard = (!(ingredientList && Object.keys(ingredientList).length)) ? "" : ingredientList.slice(0, paginate).map((images, index) => {
        return (
            <figure key={images.idIngredient} className="thumbnailCard">
                <Link key={index} to={{
                    pathname: `/singleingredientpage/${images.strIngredient}`,
                    state: `${images.strIngredient}`
                }}>
                    <div className="thumbnail-plate">
                        <img rel="preload" src={`${url5}/${images.strIngredient}-Small.png`} alt={images.strIngredient} as="image" />
                    </div>
                    <figcaption>
                        {images.strIngredient}
                    </figcaption>
                </Link>
            </figure>
        )
    })


    return (

        <div className="header">
            <div className="container">

                <MetaTags>
                    <title> Priscy | Meal Recipes </title>
                    <meta name="description" content={description} />
                </MetaTags>

                <div className="search-input__wrapper" style={{ backgroundImage: `url(${backGroundImg})` }}>
                    <div className="query"><h1>Select from Pool Of Recipes </h1></div>
                </div>
                {(!(ingredientList && Object.keys(ingredientList).length)) ? < Spinner /> :
                    <div className="ingredient-front__wrapper">
                        <div className="ingredient-front__content">
                            {thumbnailTitleCard}
                        </div>

                        <button className={paginate > ingredientList.length ? "hide" : "loadmore-btn"} onClick={() => setPaginate((prevValue) => prevValue + 24)} style={{ marginTop: '25px' }}>Load More Recipes</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default withRouter(IngredientMianPage)
