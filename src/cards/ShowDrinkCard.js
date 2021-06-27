import React from 'react'
import { Link } from "react-router-dom";
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import '../styles/showfood.css'
import '../styles/showfood1.css'
import '../styles/showfoodqueries.css'
import Option from '../image/option.svg'

const url5 = `https://www.themealdb.com/images/ingredients/`

const ShowDrinkCard = (props) => {

    const { drink, youtubeVideo, ingredients, addDrinkToStorage, favoriteDrinkList, handleClick, ingredientsThumbs } = props


    const ingredientCard = ingredients.map((ing, index) => { return <li key={index}>{ing}</li> })


    const createParagraphs = (text) => {
        let mytext = text.split('.').slice(0, -1);
        let textWithFullStop = mytext.map((item, i) => <li key={i} style={{ listStyle: 'square' }}>{item}.</li>);
        let textwithoutFullStop = text.split("\n").map((item, i) => <li key={i} style={{ listStyle: 'square' }}>{item}.</li>);
        if (mytext.length !== 0) { return textWithFullStop } else { return textwithoutFullStop }
    }


    const thumbnailTitleCard = ingredientsThumbs.length === 0 ? "" : ingredientsThumbs.map((title, index) => {
        return (
            <figure key={index}>
                <Link key={index} to={{
                    pathname: `/singlecocktailingredientpage/${title}`,
                    state: `${title}`
                }}>
                    <img src={`${url5}/${title}-Small.png`} alt={title} />
                    <figcaption>
                        {title}
                    </figcaption>
                </Link>
            </figure>
        )
    })


    const colorToggle = favoriteDrinkList.filter(data => data.idDrink === drink.idDrink)

    return (
        <div className="food-wrapper1">

            <button className="btn-show__details"> Details </button>
            <button className="btn-navigate__back1" onClick={handleClick}><i className="fas fa-arrow-left"></i></button>

            <div className="food-header__content">

                <div className="drink-img__container">

                    {drink ? <img src={drink.strDrinkThumb} alt="drink" /> : <img src={Option} alt="drink" className="optional-image" />}

                    <div className="food-header__details">

                        {drink ? <li className='food-header__title'><h1> {drink.strDrink}</h1></li> : <span> Name Not Available </span>}

                        <div className='category-favorite'>
                            {drink ? <li className="drink-category"><h3>{drink.strCategory}</h3></li> : ''}

                            <li>
                                {colorToggle.length !== 0 ? (

                                    <button className="btn-store__active" onClick={() => addDrinkToStorage(drink)} >
                                        <IoIosHeart style={{ color: 'red', fontSize: '20px', transition: 'all .4s' }} />
                                    </button>
                                ) : (
                                    <button className="btn-store1" onClick={() => addDrinkToStorage(drink)}>
                                        <IoIosHeartEmpty style={{ color: 'white', fontSize: '20px', transition: 'all .4s' }} />
                                    </button>)
                                }
                            </li>

                        </div>
                    </div>
                </div>

                <div className="drink-details__ingredients">
                    <div className="drink-ingredients">
                        <h2>Ingredients</h2>
                        {!(ingredients) ? '' :
                            <ul className="food-details__list">{ingredientCard}</ul>
                        }
                    </div>
                </div>
            </div>

            {ingredientsThumbs.length !== 0 ?
                <div className="thumbnailTitleCard-wrapper">
                    <h2>Ingredient Images</h2>
                    <div className="thumbnailTitle-content">
                        {thumbnailTitleCard}
                    </div>
                </div>
                : ""}

            {drink.strInstructions !== null ? <div className="food-details__instructions1">
                <h2>Instructions</h2>
                {createParagraphs(drink.strInstructions)}
            </div> : ''}

            {youtubeVideo ?
                <div className="video-container">
                    <h2>Check Out the Video</h2>

                    <div className="video-wrapper">
                        <iframe
                            className="youtube-frame"
                            margin='auto'
                            src={youtubeVideo}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title='video' />
                    </div>
                </div>
                : ''}
        </div>
    )
}

export default ShowDrinkCard