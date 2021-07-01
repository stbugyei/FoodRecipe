import React from 'react'
import { withRouter, Link } from "react-router-dom";
import dataSource from '../datasource/DataSource';
import Spinner from "./Spinner";


const FrontPageCategories = (props) => {

    const { mealCatDiv } = props
    const { categoryList } = dataSource();


    if (!(categoryList && Object.keys(categoryList).length)) {
        return <Spinner/>
    }
    
    const categoryCard = (!(categoryList && Object.keys(categoryList).length))
        ? "" : categoryList.map((item, index) => {
            return (
                <div key={item.idCategory} className="category-list__card" >
                    <Link key={item.idCategory} to={{
                        pathname: `/categoryitempage/${item.strCategory}`,
                        state: `${categoryList[index].strCategory}`
                    }}>
                        <div className="category-list__img">
                            <picture>
                                <source media="(max-width: 799px)" srcSet={item.strCategoryThumb} />
                                <source media="(min-width: 800px)" srcSet={item.strCategoryThumb} />
                                <img rel="preload" src={item.strCategoryThumb} alt={item.strCategory} as="image" />
                            </picture>
                        </div>
                        <div className="category-list__content">
                            <p className="category-list__title">{item.strCategory}</p>
                        </div>
                    </Link>
                </div>
            )
        })


    return (
        <div className="category-latest__wrapper" style={{ flexDirection: 'column' }}>
            <div ref={mealCatDiv} className="category-front__wrapper">
                <h1>Meals Category</h1>
                <div className="category__content">
                    {categoryCard}
                </div>
            </div>
        </div>
    )
}

export default withRouter(FrontPageCategories)