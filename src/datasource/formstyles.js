import { useState, useEffect } from 'react';

const ExtraStyles = () => {

    const useMediaQuery = (query) => {
        const mediaMatch = window.matchMedia(query);
        const [matches, setMatches] = useState(mediaMatch.matches);
        const matchWidthHandler = e => setMatches(e.matches);
        useEffect(() => {
            mediaMatch.addEventListener('change', matchWidthHandler);
            return () => mediaMatch.removeEventListener('change', matchWidthHandler);
        }, [mediaMatch])
        return matches;
    }

    const backgroundArr = ["https://images.pexels.com/photos/4784/alcohol-bar-party-cocktail.jpg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/2291070/pexels-photo-2291070.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/605408/pexels-photo-605408.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"]

    const alcohol = {
        position: 'absolute',
        maxWidth: '100%',
        left: '0',
        top: '0',
        display: 'block',
        padding: '5px',
        color: '#980369',
        fontWeight: '500',
        borderBottomRightRadius: '4px',
        backgroundColor: 'hsla(0, 0%, 100%, .31)',
        textShadow: '0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)'
    };

    const queryStyle = {
        responsive: isChecked => ({
            padding: '10px',
            margin: isChecked ? '15px auto' : '15px',
            borderRadius: isChecked ? '4px' : '5px',
            fontSize: '20px',
            display: ' flex',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            letterSpacing: '0.2rem',
            boxShadow: '0 10px 20px rgb(0 0 0 / 9%)',
            backgroundColor: ' hsla(0, 0%, 100%, .6)',
            textShadow: '0 3px 6px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 23%)',
            zIndex: '9999',
        })
    };

    const input1Style = {
        responsive: isChecked => ({
            position: 'relative',
            width: '100%',
            height: '100%',
            fontSize: '1em',
            border: '2px transparent',
            borderRadius: '4px',
            padding: isChecked ? '0px 45px 0px 20px' : '0px 60px 0px 20px',
            outline: 'none',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.09)',
            background: '#fff',
            transition: 'all .3s',
            zIndex: '999',
        })
    };

    const formStyle = {
        responsive: isChecked => ({
            position: 'relative',
            width: '100%',
            background: 'transparent',
            height: isChecked ? '45px' : '55px',
            listStyle: 'none',
            transition: 'all .3s',
        })
    };

    const btnSearch = {
        responsive: isChecked => ({
            position: 'absolute',
            top: isChecked ? '12%' : '15%',
            right: '1%',
            width: isChecked ? '35px' : '40px',
            height: isChecked ? '35px' : '40px',
            border: '1px solid transparent',
            borderRadius: '50%',
            cursor: 'pointer',
            outline: 'none',
            boxShadow: '1px 7px 14px -9px#cc208e',
            backgroundImage: 'linear-gradient(to top, #cc208e 0%, #980369 100%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            zIndex: '99999',
        })
    }

    const btnSearch1 = {
        responsive: isChecked => ({
            position: 'absolute',
            top: isChecked ? '12%' : '15%',
            right: '1%',
            width: isChecked ? '35px' : '40px',
            height: isChecked ? '35px' : '40px',
            border: '1px solid transparent',
            borderRadius: '50%',
            cursor: 'pointer',
            outline: 'none',
            boxShadow: '1px 7px 14px -9px rgb(254, 102, 125)',
            background: 'linear-gradient(90deg, rgba(254, 110, 124, 1) 0%, rgba(255, 161, 118, 1) 136%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            zIndex: '99999',
        })
    }



    return {
        useMediaQuery,
        backgroundArr,
        alcohol,
        queryStyle,
        input1Style,
        formStyle,
        btnSearch,
        btnSearch1
    }
}

export default ExtraStyles