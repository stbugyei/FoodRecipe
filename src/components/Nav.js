import React, { useState } from "react";
import { withRouter, NavLink, Link, useHistory } from "react-router-dom";
import Close from "../humburger/Close";
import Menu from "../humburger/Menu";
import dataSource from '../datasource/DataSource';
import '../styles/nav.css'

const Nav = (props) => {

    const { mealCatDiv } = props;
    const [isopen, setIsopen] = useState(false)
    const { drinksCategory } = dataSource();

    //======= Navigation functions ========
    const history = useHistory();

    const handleClickWelcome = () => {
        history.push("/");
    }

    const handleClick = () => {
        setIsopen(!isopen)
    }

    const closeNavBar = () => {
        setIsopen(false)
    }

    const goToSearchPage = () => {
        history.push("/searchrecipes");
    }

    const goToSearchedCocktailPage = () => {
        history.push("/searchcocktailrecipes");
    }

    const goToCategory = () => {
        history.push("/recipes");
        if (history.location.pathname === "/recipes") {
            setTimeout(function () {
                if (mealCatDiv) {
                    mealCatDiv.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }, 1500);
        }
    }

    const drinksCategoryCard = (!(drinksCategory && Object.keys(drinksCategory).length)) ? ""
        : drinksCategory.map((cat, index) => (
            <Link key={index} to={{
                pathname: `/singlecocktail`,
                state: `${cat.strCategory}`
            }} onClick={closeNavBar}>
                <span>{cat.strCategory}</span>
            </Link>))

    return (

        <div className="header">
            <div className="container">
                <nav className="main-nav">
                    <div className="logo" onClick={handleClickWelcome}>
                        <i className="fas fa-cocktail"></i> | PriscyRecipes
                    </div>

                    <ul className={isopen ? 'nav-content__active' : 'nav-content'} >
                        <li className="favlist">
                            <NavLink exact activeClassName="activenav" to="/recipes" onClick={closeNavBar}>Meals</NavLink>
                        </li>

                        <li className="favlist">
                            <NavLink exact activeClassName="activenav" to="/cocktail" onClick={closeNavBar}>Drinks</NavLink>
                        </li>

                        <li className="favlist">
                            <NavLink exact activeClassName="activenav" to="/alcohol" onClick={closeNavBar}>Alcohol</NavLink>
                        </li>

                        <li className="favlist">
                            <NavLink exact activeClassName="activenav" to="/nonalcohol" onClick={closeNavBar}>Non-Alcohol</NavLink>
                        </li>

                        <li className="favlist">
                            <NavLink activeClassName="activenav" to="/favouriteList" onClick={closeNavBar}> Favourites</NavLink>
                        </li>

                        <li className="favlist favlisthover">
                            <button className="fake-link">Sub-Menu <i className="fas fa-caret-down"></i></button>
                            <div className="favlist-sublinks">
                                <div className="favlist-sublinks__content">
                                    <Link to={{ pathname: "/ingredientmainpage" }} onClick={closeNavBar}>
                                        <span>Meal Ingredients</span>
                                    </Link>

                                    <Link to={{ pathname: "/cocktailingredientmainpage" }} onClick={closeNavBar}>
                                        <span>Cocktail Ingredients</span>
                                    </Link>

                                    <Link to={{ pathname: "/recipes" }} onClick={closeNavBar}>
                                        <span onClick={() => goToCategory()} >Meals Category</span>
                                    </Link>

                                    <Link to={{ pathname: "/browsbycountry" }} onClick={closeNavBar}>
                                        <span>Browse by Country</span>
                                    </Link>
                                    {drinksCategoryCard}
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="search-btn__wrapper">
                        <span className='search-btn' ><i className="fas fa-search"></i>
                        </span>
                        <div className="search-links">
                            <span className="search-recipe" onClick={goToSearchPage}>
                                Food Recipes <i className="fas fa-search"></i>
                            </span>
                            <span className="search-cocktail" onClick={goToSearchedCocktailPage}>
                                Cocktails <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </div>

                    <div className="hamburger" onClick={handleClick}>
                        {isopen ? <Close /> : <Menu />}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default withRouter(Nav)