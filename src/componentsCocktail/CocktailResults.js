import React from 'react'
import { Link, withRouter } from "react-router-dom";
import '../styles/search.css'
import Loader from '../components/Loader';


const CocktailResults = (props) => {

    const { cocktail, error } = props

    if (!(cocktail && Object.keys(cocktail).length)) {
        return <><Loader /> <div style={errormsg}>{error}</div></>
    }

    const foodCard = cocktail.map((drink, index) => {

        return (
            <ul className="food-list__card" key={cocktail[index].idDrink}>

                <li className="food-list__poster">
                    <img src={drink.strDrinkThumb} alt="cocktail" />
                    <span style={alcohol}>{drink.strAlcoholic}</span>
                </li>

                <div className="title-discover">
                    <li>
                        <p className='title'> {drink.strDrink} </p>
                    </li>

                    <Link to={{
                        pathname: `/drinks/${cocktail[index].idDrink}`
                    }}>
                        <button className="btn-discover1"> Discover </button>
                    </Link>
                </div>
            </ul>
        )
    })


    return (
        <div className="header">
            <div className="container">
                <div className="food-list__cardwrapper">
                    {foodCard}
                </div>
            </div>
        </div>
    )
}

export default withRouter(CocktailResults)

const errormsg = {
    fontSize: '20px',
    margin: '30px',
    textAlign: 'center',
};

const alcohol = {
    position: 'absolute',
    maxWidth: '100%',
    left: '0',
    top: '0',
    display: 'block',
    padding: '5px',
    color: 'unset',
    borderBottomRightRadius: '4px',
    backgroundColor: 'hsla(0, 0%, 100%, .31)',
    textShadow: '0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)'
};