import React from 'react'
import { useHistory } from "react-router-dom";
import '../styles/welcome.css'
import 'react-lazy-load-image-component/src/effects/blur.css';

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
                    <div className="welcome-text">
                        <span className="overley"></span>
                        <h1>Welcome</h1>
                        <h1>Home To</h1>
                        <h1>Priscy Recipes </h1>
                        <h1> & </h1>
                        <h1>Cocktails</h1>
                        <button className="btn-welcome" onClick={
                            handleClickHome
                        }>Find Out What's Cooking</button>

                    </div>
                    <div className="welcome-image">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
