import React from 'react'
import { withRouter } from 'react-router-dom'
import '../styles/main.css'
import CocktailForm from './CocktailForm'
import CocktailRandom from './CocktailRandom'
import CocktailResults from './CocktailResults'

const CocktailMain = (props) => {

    const { queryDrinks, handleOnSubmit, handleOnChange, randomCocktail, cocktail, error, randError } = props

    return (
            <div className="main-wrapper">
                <div className="header">
                    <div className="container">
                        <ul className="outer-main__section1">

                            <li className="inner-main__section1">
                                <div className="form-wrapper" onSubmit={handleOnSubmit} onChange={handleOnChange}>
                                    <CocktailForm queryDrinks={queryDrinks} />
                                </div>

                                <div className="random-wrapper">
                                    <CocktailRandom randomCocktail={randomCocktail} randError={randError} />
                                </div>
                            </li>

                            <li className="search-wrapper">
                                <CocktailResults cocktail={cocktail} error={error} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default withRouter(CocktailMain)

