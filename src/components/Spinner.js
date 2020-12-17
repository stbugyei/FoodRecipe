import React from 'react'
import Loader from '../image/spin.svg'

const Spinner = () => {

        const styles = {
            position: 'absolute',
            top: '50%',
            right: '50%',
            transform: 'translate(50%, -50%)',
            width: '5%',
    }


    return (
        <>
            <center>
                <img src={Loader} alt="" style={styles}/>
            </center>
        </>
    )
}

export default Spinner
