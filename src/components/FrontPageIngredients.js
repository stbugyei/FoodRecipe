import { Link, withRouter } from "react-router-dom";
import dataSource from '../datasource/DataSource';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinner from "./Spinner";

const url5 = `https://www.themealdb.com/images/ingredients/`

const FrontPageIngredients = () => {

    const { ingredientList } = dataSource();

    if (!(ingredientList && Object.keys(ingredientList).length)) {
        return <Spinner />
    }

    const thumbnailTitleCard = ingredientList.slice(0, 7).map((images, index) => {
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
                            style={{ transition: 'all .3s', width: '100px', height: '100px'}}
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

    return (

        <div className="ingredient-front__wrapper">
            <h1>Random Ingredients</h1>
            <div className="ingredient-front__content">
                {thumbnailTitleCard}
            </div>

            <Link to={{ pathname: `/ingredientmainpage` }}>
                <p className="load-ingredient">Browse Ingredient Collection</p>
            </Link>
        </div>
    )
}

export default withRouter(FrontPageIngredients)