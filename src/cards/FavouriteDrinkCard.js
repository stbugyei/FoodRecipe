import React from 'react'
import { Link } from "react-router-dom";
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import '../styles/favourite.css'


const FavouriteDrinkCard = (props) => {

    const { addDrinkToStorage, cocktail, favoriteDrinkList } = props

    const colorToggle = favoriteDrinkList.filter(data => data.strDrink === cocktail.strDrink);

    return (

        <>
            { (colorToggle.length !== 0) ? (
                <button className="btn-store__favactive" onClick={() => addDrinkToStorage(cocktail)}>
                    <IoIosHeart style={{ color: 'red', fontSize: '20px', fontWeight:'bold', transition: 'all .4s' }} />
                </button>
            ) : (
                    <button className="btn-store__favactive" onClick={() => addDrinkToStorage(cocktail)}>
                        <IoIosHeartEmpty style={{ color: 'red', fontSize: '20px', fontWeight:'bold', transition: 'all .4s' }} />
                    </button>
                )}

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

export default  FavouriteDrinkCard
