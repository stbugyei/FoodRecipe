import React from "react";
import { Link, withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/search.css'
import Loader from '../components/Loader';
import PaginationNonAlcohol from './PaginationNonAlcohol'
import videoURL from '../video/soft.mp4'
import poster from '../image/drinkcock.jpg'



const NonAlcohol = ({ data, itemsPerPage, startFrom }) => {
    const { currentPage, slicedData, pagination, prevPage, nextPage, changePage } = PaginationNonAlcohol({ itemsPerPage, data, startFrom });


    if (!(data && Object.keys(data).length)) {
        return <><Loader /></>
    }

    const nonAlcoholCard = slicedData.map((drink, index) => {
        return (
            <ul className="food-list__card" key={slicedData[index].idDrink}>

                <li className="food-list__poster">
                    <LazyLoadImage
                        alt={drink.strDrink}
                        effect="blur"
                        src={drink.strDrinkThumb}
                        style={{ transition: 'all .3s', width: '100%', height: '100%', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
                        className="lazyimg"
                    />
                </li>

                <div className="title-discover">
                    <li>
                        <p className='title'> {drink.strDrink} </p>
                    </li>

                    <Link to={{
                        pathname: `/drinks/${slicedData[index].idDrink}/${drink.strDrink}`
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

                <MetaTags>
                    <title>Priscy | Non-Alcohol</title>
                    <meta name="description" content="Finest non-alcoholic Beverages made from orange juice, grenadine, pineapple and other fruit and vegetables. Also available is milk, cinamon, egg, chocolate and celery and many more." />
                </MetaTags>

                <div className="background-video__wrapper">
                    <div className="background-video__overley"></div>
                    <h1 className="background-video__text">Finest Non-Alcoholic Beverages</h1>
                    <h1 className="background-video__text1"><i className="fas fa-arrow-circle-down"></i></h1>
                    <div className="background-video__content">
                        <video className="background-video" autoPlay loop muted poster={poster}>
                            <source src={videoURL} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="food-list__cardwrapper" style={{ marginTop: '20px' }}>
                    {nonAlcoholCard}
                    <nav className="pagination">

                        <ul className="pagination-list">
                            {pagination.map((page) => {
                                if (!page.ellipsis) {
                                    return <li key={page.id}>
                                        <a
                                            href="/#"
                                            className={page.current ? 'pagination-link__active' : 'pagination-link'}
                                            onClick={(e) => changePage(page.id, e)}>
                                            {page.id}
                                        </a>
                                    </li>;
                                } else {
                                    return <li key={page.id}><span className="pagination-ellipsis">&hellip;</span></li>
                                }
                            }
                            )}
                        </ul>

                        <div className="nextprev">
                            {currentPage > 1 ? <a href="/#" className="pagination-previous" onClick={prevPage}>Prev</a> : ''}
                            {currentPage > 1 ? <a href="/#" className="pagination-next" onClick={nextPage}>Next</a> : ''}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default withRouter(NonAlcohol)
