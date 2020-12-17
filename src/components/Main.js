import React from 'react'
import { withRouter } from 'react-router-dom'
import '../styles/main.css'
import Form from './form'
import Random from './Random'
import SearchResults from './SearchResults'

const Main = (props) => {

    const { query, onSubmit, onChange, randomRecipe, recipe, error, randError } = props

    return (

        <div className="main-wrapper">
            <div className="header">
                <div className="container">
                    <ul className="outer-main__section">
                        <li className="inner-main__section1">
                            <div className="form-wrapper" onSubmit={onSubmit} onChange={onChange}>
                                <Form query={query} />
                            </div>

                            <div className="random-wrapper">
                                <Random randomRecipe={randomRecipe} randError={randError} />
                            </div>
                        </li>

                        <li className="search-wrapper">
                            <SearchResults recipe={recipe} error={error} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Main)

