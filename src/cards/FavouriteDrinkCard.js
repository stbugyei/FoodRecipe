import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoTrashOutline } from 'react-icons/io5';
import '../styles/favourite.css'


const FavouriteDrinkCard = (props) => {

    const { removeDrinkFromStorage, cocktail } = props
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
                            <p>{cocktail.strDrink}?</p>
                        </li>
                    </ul>

                    <button className="btn-yes" onClick={() => removeDrinkFromStorage(cocktail)}>Yes</button>
                </div>
            </div>


            <div className="fav-list__poster">
                <img src={cocktail.strDrinkThumb} alt="favList" />
            </div>

            <div className="fav-title__discover">
                <div>
                    <p className='fav-title'> {cocktail.strDrink} </p>
                </div>

                <Link to={{ pathname: `/drinks/${cocktail.idDrink}` }}>
                    <button className="fav-btn__discover"> Discover </button>
                </Link>
            </div>
        </>
    )
}

export default FavouriteDrinkCard
