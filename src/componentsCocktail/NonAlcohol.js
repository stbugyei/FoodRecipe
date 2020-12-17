import React from "react";
import { Link, withRouter } from "react-router-dom";
import '../styles/search.css'
import Loader from '../components/Loader';
import PaginationNonAlcohol from './PaginationNonAlcohol'



const NonAlcohol = ({ data, itemsPerPage, startFrom }) => {
    const { currentPage, slicedData, pagination, prevPage, nextPage, changePage } = PaginationNonAlcohol({ itemsPerPage, data, startFrom });


    if (!(data && Object.keys(data).length)) {
        return <><Loader /></>
    }

    const nonAlcoholCard = slicedData.map((drink, index) => {
        return (
            <ul className="food-list__card" key={slicedData[index].idDrink}>

                <li className="food-list__poster">
                    <img src={drink.strDrinkThumb} alt="cocktail" />
                </li>

                <div className="title-discover">
                    <li>
                        <p className='title'> {drink.strDrink} </p>
                    </li>

                    <Link to={{
                        pathname: `/drinks/${slicedData[index].idDrink}`
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
                <h2 className="alcohol-caption">Soft Corner</h2>
                <div className="food-list__cardwrapper">
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
