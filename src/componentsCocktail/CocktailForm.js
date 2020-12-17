import React from "react";
import { withRouter } from "react-router-dom";
import '../styles/form.css'


const CocktailForm = ({ queryDrinks }) => {

    return (
        <>
            <span className="blockquote1 blockquote">
                <h2>I don’t have a drinking problem ‘cept when I<span className="typetext1">can’t get a drink.</span></h2>
                <h4>&mdash;Tom Waits</h4>
            </span>
            
            <div className="form-wrapper__content">
                <form className="form">
                    <input
                        className='search-input'
                        type='search'
                        placeholder='Search for Cocktail. Eg. Margarita ...'
                        autoComplete='off'
                    />
                    <button className='btn1' ><i className="fas fa-search"></i>
                    </button>
                </form>
            </div>

            <div className="query"><p>Currently On Display is  <span style={{ color: '#cc208e', textTransform: 'capitalize' }}> {queryDrinks} </span> <i className="far fa-thumbs-up"></i></p></div>
        </>

    )
}

export default withRouter(CocktailForm)