import React from 'react'
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import dataSource from '../datasource/formstyles';
import '../styles/search.css';


const CocktailResults = (props) => {

    const { cocktail, errorDrinks, handleOnChange, handleOnSubmit } = props
    const { backgroundArr, alcohol } = dataSource();
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
                        <div className="query"><h1>Let's Find Something Together</h1></div>
                        <form className="form1" onSubmit={handleOnSubmit} onChange={handleOnChange}>
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
                                            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
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
