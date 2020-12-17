import React from 'react'
import { Link } from "react-router-dom";
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import '../styles/favourite.css'


const FavouriteCard = (props) => {

    const { addToStorage, meal, favoriteList } = props

    const colorToggle = favoriteList.filter(data => data.idMeal === meal.idMeal);

    return (

        <>
            { (colorToggle.length !== 0) ? (
                <button className="btn-store__favactive" onClick={() => addToStorage(meal)}>
                    <IoIosHeart style={{ color: 'red', fontSize: '20px', fontWeight:'bold', transition: 'all .4s' }} />
                </button>
            ) : (
                    <button className="btn-store__favactive" onClick={() => addToStorage(meal)}>
                        <IoIosHeartEmpty style={{ color: 'red', fontSize: '20px', fontWeight:'bold', transition: 'all .4s' }} />
                    </button>
                )}

            <div className="fav-list__poster">
                <img src={meal.strMealThumb} alt="favList" />
            </div>

            <div className="fav-title__discover">
                <div>
                    <p className='fav-title'> {meal.strMeal} </p>
                </div>

                <Link to={{ pathname: `/meals/${meal.idMeal}` }}>
                    <button className="fav-btn__discover"> Discover </button>
                </Link>
            </div>
        </>
    )
}

export default FavouriteCard
