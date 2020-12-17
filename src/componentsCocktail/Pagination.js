import { useState } from 'react';

const Pagination = (currentState) => {

    const { itemsPerPage, alcohol, startFrom } = currentState;
    const perPage = itemsPerPage ? itemsPerPage : 8;
    const pages = Math.ceil(alcohol.length / perPage);
    const pagination = [];
    const [currentPage, setCurrentPage] = useState(startFrom <= pages ? startFrom : 1);
    const [slicedAlcohol, setSlicedAlcohol] = useState([...alcohol].slice((currentPage - 1) * perPage, currentPage * perPage));

    let ellipsisLeft = false;
    let ellipsisRight = false;
    for (let i = 1; i <= pages; i++) {
        if (i === currentPage) {
            pagination.push(
                { id: i, current: true, ellipsis: false }
            );
        } else {
            if (i < 2 || i > pages - 1 || i === currentPage - 1 || i === currentPage + 1) {
                pagination.push(
                    { id: i, current: false, ellipsis: false }
                );
            } else if (i > 1 && i < currentPage && !ellipsisLeft) {
                pagination.push(
                    { id: i, current: false, ellipsis: true }
                );
                ellipsisLeft = true;
            } else if (i < pages && i > currentPage && !ellipsisRight) {
                pagination.push(
                    { id: i, current: false, ellipsis: true }
                );
                ellipsisRight = true;
            }
        }
    }

    const changePage = (page, e) => {
        e.preventDefault();
        if (page !== currentPage) {
            setCurrentPage(page);
            setSlicedAlcohol([...alcohol].slice((page - 1) * perPage, page * perPage));
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const goToPrevPage = (e) => {
        e.preventDefault();
        setCurrentPage(prevVal => prevVal - 1 === 0 ? prevVal : prevVal - 1);
        if (currentPage !== 1) {
            setSlicedAlcohol([...alcohol].slice((currentPage - 2) * perPage, (currentPage - 1) * perPage));
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const goToNextPage = (e) => {
        e.preventDefault();
        setCurrentPage(prevVal => prevVal === pages ? prevVal : prevVal + 1);
        if (currentPage !== pages) {
            setSlicedAlcohol([...alcohol].slice(currentPage * perPage, (currentPage + 1) * perPage));
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return {
        slicedAlcohol,
        pagination,
        currentPage,
        prevPage: goToPrevPage,
        nextPage: goToNextPage,
        changePage
    };
}

export default Pagination
