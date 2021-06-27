import React from 'react'
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import dataSource from '../datasource/formstyles';
import '../styles/search.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CocktailResults = (props) => {

    const { cocktail, errorDrinks, handleOnChange, handleOnSubmit } = props
    const { useMediaQuery, btnSearch, backgroundArr, alcohol, queryStyle, input1Style, formStyle } = dataSource();
    const targetWidth = useMediaQuery('screen and (min-width: 320px) and (max-width: 780px)');
    const storedQuery = localStorage.getItem("cockQuery");


    let backGroundImg = backgroundArr.sort(() => Math.random() - 0.5)[0];


    return (
        <div className="header">
            <div className="container">
                <>
                    <MetaTags>
                        <title>Priscy | Searchcocktailrecipes</title>
                        <meta name="description" content="Great recipes like casimo, rose, bijou, frose, snowday, gin sour, martini, limeade, jello shots, john collins, japanese fizz and lots more" />
                    </MetaTags>

                    <div className="search-input__wrapper" style={{ backgroundImage: `url(${backGroundImg})` }}>
                        <div className="query" style={queryStyle.responsive(targetWidth)}><h1>Let's Find Something Together</h1></div>
                        <form className="form1" style={formStyle.responsive(targetWidth)} onSubmit={handleOnSubmit} onChange={handleOnChange}>
                            <input
                                style={input1Style.responsive(targetWidth)}
                                className='search-input1'
                                type='search'
                                placeholder='Search for your favourite cuisine ...'
                                autoComplete='off'
                            />
                            <button style={btnSearch.responsive(targetWidth)} className='btn-search' aria-label="Center Align">
                                <span aria-hidden="true"><i className="fas fa-search"></i></span>
                            </button>
                        </form>
                    </div>

                    {!(cocktail && Object.keys(cocktail).length) ? "" : cocktail.length === 0 || cocktail.length === null ? '' :
                        <div className="result-indicator">
                            <p>{cocktail.length} searched results found for <span style={{ color: '#cc208e' }}> {storedQuery}</span> <i className="far fa-thumbs-up"></i></p>
                        </div>}
                </>

                <div className="food-list__cardwrapper">
                    {!(cocktail && Object.keys(cocktail).length) ? errorDrinks :
                        <>
                            {cocktail.map((drink, index) => {
                                return (
                                    <div className="food-list__card" key={cocktail[index].idDrink}>

                                        <div className="food-list__poster">
                                            <LazyLoadImage
                                                alt={drink.strDrink}
                                                effect="blur"
                                                src={drink.strDrinkThumb}
                                                style={{ transition: 'all .3s', width: '100%', height: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                                                className="lazyimg"
                                            />
                                            <span style={alcohol}>{drink.strAlcoholic}</span>
                                        </div>

                                        <div className="title-discover">
                                            <div>
                                                <p className='title'> {drink.strDrink} </p>
                                            </div>

                                            <Link to={{
                                                pathname: `/drinks/${cocktail[index].idDrink}/${drink.strDrink}`
                                            }}>
                                                <button className="btn-discover1"> Discover </button>
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

export default withRouter(CocktailResults)
