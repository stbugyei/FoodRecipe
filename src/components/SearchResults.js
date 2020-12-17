import React from 'react'
import { Link, withRouter } from "react-router-dom";
import '../styles/search.css'
import Loader from './Loader';


const SearchResults = (props) => {

    const { recipe, error } = props

    if (!(recipe && Object.keys(recipe).length)) {
        return <><Loader /> <div style={errormsg}>{error}</div></>
    }

    const foodCard = recipe.map((meal, index) => {

        return (
            <ul className="food-list__card" key={recipe[index].idMeal}>

                <li className="food-list__poster">
                    <img src={meal.strMealThumb} alt="recipe" />
                </li>

                <div className="title-discover">
                    <li>
                        <p className='title'> {meal.strMeal} </p>
                    </li>

                    <Link to={{
                        pathname: `/meals/${recipe[index].idMeal}`
                    }}>
                        <button className="btn-discover"> Discover </button>
                    </Link>
                </div>
            </ul>
        )
    })


    return (
        <div className="header">
            <div className="container">
                <div className="food-list__cardwrapper">
                    {foodCard}
                </div>
            </div>
        </div>
    )
}

export default withRouter(SearchResults)

const errormsg = {
    fontSize: '20px',
    margin: '30px',
    textAlign: 'center',
};