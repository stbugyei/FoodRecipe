import React from 'react'
import { useHistory } from "react-router-dom";
import Wel from './../image/wel.jpg'
import '../styles/welcome.css'

const Welcome = () => {

    //======= Navigation functions ========
    const history = useHistory();

    const handleClickHome = () => {
        history.push("/recipes");
    }

    return (
        <div className="header">
            <div className="container">
                <div className="welcome-wrapper">
                    <div className="welcome-content">
                        <div className="welcome-text">
                            <ul className="welcome-text__content">
                                <li><h1>Welcome</h1></li>
                                <li><h1 style={{ color: '#ff5550' }}>Home To</h1></li>
                                <li> <h1>Abena Bugyei's</h1></li>
                                <li><h1 style={{ color: '#ff5550' }}>Smart Recipes & </h1></li>
                                <li><h1>Cocktails</h1></li>
                                <button className="btn-welcome" onClick={
                                    handleClickHome
                                }>Find Out What's Cooking</button>
                            </ul>
                        </div>
                        <div className="welcome-image">
                            <img src={Wel} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
