import React from 'react'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import '../styles/showfood.css'
import '../styles/showfood1.css'
import '../styles/showfoodqueries.css'
import Option from '../image/option.svg'

const ShowFoodCard = (props) => {

    const { meal, youtubeVideo, ingredients, addToStorage, favoriteList, handleClick } = props

    const ingredientCard = ingredients.map((ing, index) => {
        return <li key={index}>{ing}</li>
    })

    const createParagraphs = (text) => {
        let mytext = text.split('.').slice(0, -1);
        let textWithFullStop = mytext.map((item, i) => <li key={i} style={{ listStyle: 'square' }}>{item}.</li>);
        let textwithoutFullStop = text.split("\n").map((item, i) => <li key={i} style={{ listStyle: 'square' }}>{item}.</li>);
        if (mytext.length !== 0) { return textWithFullStop } else { return textwithoutFullStop }
    }

    // function allStorage() {

    //     let values = [],
    //         keys = Object.keys(localStorage),
    //         i = keys.length;

    //     while (i--) {
    //         values.push(JSON.parse(localStorage.getItem(keys[i])));
    //     }

    //     return values;
    // }

    const colorToggle = favoriteList.filter(data => data.idMeal === meal.idMeal)

    return (
        <div className="food-wrapper">

            <button className="btn-show__details"> Details </button>
            <button className="btn-navigate__back" onClick={handleClick}><i className="fas fa-arrow-left"></i></button>

            <div className="food-header__content">

                <div className="food-img__container">

                    {meal ? <img src={meal.strMealThumb} alt="recipe" /> : <img src={Option} alt="recipe" className="optional-image" />}

                    <div className="food-header__details">

                        {meal ? <div className='food-header__title'><h1> {meal.strMeal}</h1></div> : <span> Name Not Available </span>}

                        <div className='category-favorite'>
                            {meal ? <span className="food-category"><h3>{meal.strCategory}</h3></span> : ''}


                            <div>
                                {colorToggle.length !== 0 ? (

                                    <button className="btn-store__active" onClick={() => addToStorage(meal)} >
                                        <IoIosHeart style={{ color: 'red', fontSize: '20px', transition: 'all .4s' }} />
                                    </button>
                                ) : (
                                    <button className="btn-store" onClick={() => addToStorage(meal)}>
                                        <IoIosHeartEmpty style={{ color: 'white', fontSize: '20px', transition: 'all .4s' }} />
                                    </button>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="food-details__ingredients">
                    <div className="food-ingredients">
                        <h2>Ingredients</h2>
                        {!(ingredients) ? '' :
                            <ul className="food-details__list">{ingredientCard}</ul>
                        }
                    </div>
                </div>
            </div>

            {meal ? <div className="food-details__instructions">
                <h2>Instructions</h2>
                {createParagraphs(meal.strInstructions)}
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

export default ShowFoodCard
