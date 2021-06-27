import React from "react";
import { withRouter } from "react-router-dom";
import '../styles/form.css'


const CocktailForm = () => {

    return (
        <>
            <span className="blockquote1 blockquote">
                <h2 className="typetexts1">I don’t have a drinking problem ‘cept when </h2>
                <h2 className="typetext1"> I can’t get a drink.</h2>
                <p>&mdash;Tom Waits</p>
            </span>

            <div className="form-wrapper__content">
                <form className="form">
                    <input
                        className='search-input'
                        type='search'
                        placeholder='Search for Cocktail. Eg. Margarita ...'
                        autoComplete='off'
                    />
                    <button className='btn1' aria-label="Center Align">
                        <span aria-hidden="true"><i className="fas fa-search"></i></span>
                    </button>
                </form>
            </div>
        </>
    )
}

export default withRouter(CocktailForm)