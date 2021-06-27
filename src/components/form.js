import React from "react";
import { withRouter } from "react-router-dom";
import '../styles/form.css'


const Form = () => {

    return (

        <>
            <span className="blockquote">
                <h2 className="typetexts">One cannot think well, love well, sleep well, if one</h2>
                <h2 className="typetext">has not dined well.</h2>
                <p>&mdash;Virginia Wolf</p>
            </span>
            <div className="form-wrapper__content">
                <form className="form">
                    <input
                        className='search-input'
                        type='search'
                        placeholder='Search for your favourite cuisine ...'
                        autoComplete='off'
                    />
                    <button className='btn' aria-label="Center Align">
                        <span aria-hidden="true"><i className="fas fa-search"></i></span>
                    </button>
                </form>
            </div>
        </>

    )
}

export default withRouter(Form)