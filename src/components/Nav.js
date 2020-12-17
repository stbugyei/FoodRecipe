import React, { useState } from "react";
import { withRouter, NavLink, useHistory } from "react-router-dom";
import Close from "../humburger/Close";
import Menu from "../humburger/Menu";
import '../styles/nav.css'

const Nav = () => {

    const [isopen, setIsopen] = useState(false)

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

    return (

        <div className="header">
            <div className="container">
                <nav className="main-nav">
                    <div className="logo" onClick={handleClickWelcome}> StBugyei☻</div>

                    <ul className={isopen ? 'nav-content__active' : 'nav-content'}>
                        <li className="favlist">
                            <NavLink exact activeClassName="activenav" to="/recipes" onClick={closeNavBar}>Food Recipes</NavLink>
                        </li>

                        <li className="favlist">
                            <NavLink exact activeClassName="activenav" to="/cocktail" onClick={closeNavBar}>Cocktails</NavLink>
                        </li>

                        <li className="favlist">
                            <NavLink exact activeClassName="activenav" to="/alcohol" onClick={closeNavBar}>Alcohol Cocktails</NavLink>
                        </li>

                        <li className="favlist">
                            <NavLink exact activeClassName="activenav" to="/nonalcohol" onClick={closeNavBar}>Non-Alcohol Cocktails</NavLink>
                        </li>

                        <li className="favlist">
                            <NavLink activeClassName="activenav" to="/favouriteList" onClick={closeNavBar}> Favourites</NavLink>
                        </li>
                    </ul>

                    <div className="hamburger" onClick={handleClick}>
                        {isopen ? <Close /> : <Menu />}
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default withRouter(Nav)


