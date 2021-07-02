import React from 'react'
import videoURL from '../video/soft.mp4'
import poster from '../image/wel.webp'
import '../styles/welcome.css'


const Welcome = () => {

    return (
        <div className="header">
            <div className="container">
                <div className="background-video__wrapper">
                    <div className="background-video__overley"></div>
                    <h1 className="background-video__text2">Welcome Home To Priscy Recipes & Cocktails</h1>
                    <div className="background-video__content">
                        <video className="background-video" autoPlay loop muted poster={poster}>
                            <source src={videoURL} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
