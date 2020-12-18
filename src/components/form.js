import React from "react";
import { withRouter } from "react-router-dom";
import '../styles/form.css'


const Form = ({ query }) => {

    return (

        <>
            <span className="blockquote">
              <h2 className="typetexts">One cannot think well, love well, sleep well, if </h2>
              <h2 className="typetext">one has not dined well.</h2>
                <h4>&mdash;Virginia Wolf</h4>
            </span>
            <div className="form-wrapper__content">
                <form className="form">
                    <input
                        className='search-input'
                        //value={query}
                        // name="name"
                        type='search'
                        placeholder='Search for your favourite cuisine ...'
                        autoComplete='off'
                    />
                    <button className='btn' ><i className="fas fa-search"></i>
                    </button>
                </form>
            </div>

            <div className="query"><p>Currently On Display is  <span style={{ color: 'salmon', textTransform: 'capitalize' }}> {query} </span> <i className="far fa-thumbs-up"></i></p></div>
        </>

    )
}

export default withRouter(Form)