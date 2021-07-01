import React from "react";
import { NavLink } from "react-router-dom";
import Share from "./Share";
import "../styles/footer.css"

const Footer = () => {


    //========== Onclick function to move the page to the top ===========//
    const scrollTotop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

    return (
        <div className="header">
            <div className="container">
                <div className="footer-wrapper">
                    <div className='footer__container'>
                        <div className='footer-content'>
                            <div className='footer-title'>
                                <span className="logo">
                                    <i className="fas fa-cocktail"></i>| PriscyRecipes
                                </span>
                            </div>
                            <p>Priscy Recipes offers the finest meals, drinks, ingredients in various category. Enjoy preparing your favourite meals, drinks, recipes with clear instructions along with videos.</p>
                        </div>

                        <div className='footer-content'>
                            <span className='footer-title'>
                                <p>gallary</p>
                            </span>

                            <ul>
                                <li className="sitemap-links">
                                    <NavLink exact activeClassName="activenav1" to="/recipes" onClick={scrollTotop}>Meals</NavLink>
                                </li>

                                <li className="sitemap-links">
                                    <NavLink exact activeClassName="activenav1" to="/cocktail" onClick={scrollTotop}>Drinks</NavLink>
                                </li>

                                <li className="sitemap-links">
                                    <NavLink exact activeClassName="activenav1" to="/alcohol" onClick={scrollTotop}>Alcohol</NavLink>
                                </li>

                                <li className="sitemap-links">
                                    <NavLink exact activeClassName="activenav1" to="/nonalcohol" onClick={scrollTotop}>Non-Alcohol</NavLink>
                                </li>

                                <li className="sitemap-links">
                                    <NavLink activeClassName="activenav1" to="/favouriteList" onClick={scrollTotop}> Favourites</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className='footer-content'>
                            <span className='footer-title'>
                                <p>Contact</p>
                            </span>

                            <a className="linkedin" href="https://www.linkedin.com/in/emmanuel-o-bugyei-47069383/" target="_blank" rel="noopener noreferrer" >
                                <p> <i className="fab fa-linkedin"></i> linkedin</p>
                            </a>

                            <a className="facebook" href="https://en-gb.facebook.com/login/" target="_blank" rel="noopener noreferrer" >
                                <p> <i className="fab fa-facebook-square"></i> facebook</p>
                            </a>
                        </div>


                        <div className='footer-content'>
                            <span className='footer-title'>
                                <p>Share On</p>
                            </span>
                            <Share />
                            <a className='copyright' href="https://www.emmanuelbugyei.com/" target="_blank" rel="noopener noreferrer" >
                                <p>&#xA9;2021 <span className="logo"><i className="fas fa-cocktail"></i>| PriscyRecipes</span></p>
                                <p>Website created by <span style={copyRight}>Stbugyei &#xA9;</span></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer

const copyRight = {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#551a8b",
}