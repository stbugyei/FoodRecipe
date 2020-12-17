import React from 'react'
import '../styles/loader.css'

const Loader = () => {
    return (
        <center>
            <div className="loader-position">
                <div className="loading-sector-orange">4</div>
                <div className="loading-sector-lightblue">O</div>
                <div className="loading-sector-purble">4</div>
            </div>
        </center>

    )
}

export default Loader