import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoTrashOutline } from 'react-icons/io5';
import '../styles/favourite.css'


const FavouriteCard = (props) => {

    const { removeFromStorage, meal } = props
    const [isopen, setIsopen] = useState(false)

    const handleClick = () => {
        setIsopen(!isopen)
    }


    return (

        <>
            <button className={isopen ? 'exit-favactive' : 'btn-stored__favactive'} onClick={handleClick}>
                <IoTrashOutline style={{ color: 'salmon', fontSize: '20px', fontWeight: 'bold', transition: 'all .4s' }} />
            </button>

            <div className={isopen ? 'confirm' : 'confirm-annex'}>
                <div className="popup">
                    <ul className="alert-box">
                        <li> <button className="btn-close" onClick={handleClick}>&times;</button></li>
                    </ul>

                    <ul className="popup-content">
                        <li><p>Remove</p></li>
                        <li>
                            <p>{meal.strMeal}?</p>
                        </li>
                    </ul>

                    <button className="btn-yes" onClick={() => removeFromStorage(meal)}>Yes</button>
                </div>
            </div>

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
