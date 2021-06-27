import React from 'react'
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import dataSource from '../datasource/formstyles';
import '../styles/search.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const SearchResults = (props) => {

    const { onSubmit, onChange, recipe, error } = props
    const storedQuery = localStorage.getItem("foodQuery");
    const {  backgroundArr } = dataSource();
    let backGroundImg = backgroundArr.sort(() => Math.random() - 0.5)[0];


    return (
        <div className="header">
            <div className="container">
                <div>
                    <MetaTags>
                        <title>Priscy | Searchmealrecipes</title>
                        <meta name="description" content="Awesome recipes like vegan lasagna, summer pudding, beef wellington, lamb rogan josh, egyptian fatteh and lots more" />
                    </MetaTags>

                    <div className="search-input__wrapper" style={{ backgroundImage: `url(${backGroundImg})` }}>
                        <div className="query"><h1>What Interest You?</h1> </div>
                        <form className="form1" onSubmit={onSubmit} onChange={onChange}>
                            <input
                                className='search-input1'
                                type='search'
                                placeholder='Search for your favourite cuisine ...'
                                autoComplete='off'
                            />
                            <button className='btn-search' aria-label="Center Align">
                                <span aria-hidden="true"><i className="fas fa-search"></i></span>
                            </button>
                        </form>
                    </div>

                    {!(recipe && Object.keys(recipe).length) ? "" : recipe.length === 0 || recipe.length === null ? '' :
                        <div className="result-indicator">
                            <p>{recipe.length} searched results found for <span style={{ color: 'salmon' }}> {storedQuery}</span> <i className="far fa-thumbs-up"></i></p>
                        </div>}
                </div>


                <div className="food-list__cardwrapper">
                    {!(recipe && Object.keys(recipe).length) ? error :
                        <>
                            {recipe.map((meal, index) => {
                                return (
                                    <div className="food-list__card" key={recipe[index].idMeal}>

                                        <div className="food-list__poster">
                                            <LazyLoadImage
                                                alt={meal.strMeal}
                                                effect="blur"
                                                src={meal.strMealThumb}
                                                style={{ transition: 'all .3s', width: '100%', height: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                                                className="lazyimg"
                                            />
                                        </div>

                                        <div className="title-discover">
                                            <div>
                                                <p className='title'> {meal.strMeal} </p>
                                            </div>

                                            <Link to={{
                                                pathname: `/meals/${recipe[index].idMeal}/${meal.strMeal}`
                                            }}>
                                                <button className="btn-discover"> Discover </button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(SearchResults)