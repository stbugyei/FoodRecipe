import { useState, useEffect } from 'react'
import { Link, withRouter, useHistory } from "react-router-dom";
import dataSource from '../datasource/DataSource';
import Spinner from "./Spinner";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const API_KEY = 1
const urlCtegoryMain = `https://www.themealdb.com/api/json/v1/`

const CategoryMainPage = (props) => {

    const history = useHistory();

    let catItem = props.location.state

    const { categoryList } = dataSource();
    const [categoryMain, setCategoryMain] = useState("");

    useEffect(() => {

        const filterMainCategory = async () => {
            if (catItem) {
                const categoryMainFeed = await fetch(`${urlCtegoryMain}${API_KEY}/filter.php?c=${catItem}`)
                if (categoryMainFeed.status === 200) {
                    try {
                        const categoryDta = await categoryMainFeed.json();
                        setCategoryMain(categoryDta.meals)
                    } catch (error) {
                        console.log(error)
                    }
                }
                else {
                    setCategoryMain("");
                }
            }
        }

        filterMainCategory();
    }, [catItem])


    if (!(categoryList && Object.keys(categoryList).length)) {
        return <Spinner />
    }

    //======= Navigation functions =========
    const handleClick = () => {
        history.goBack();
    }

    //======= filter by main category (return single category) =========
    const filterByMainCategory = categoryList.filter(name => name.strCategory === catItem);

    const detailsCard = filterByMainCategory.map((details) => {
        return (
            <div key={details.idCategory} className="single-ingredient">
                 <img src={details.strCategoryThumb} alt={details.strCategory} />
                <h2>{details.strCategory}</h2>
                <p>{details.strCategoryDescription}</p>
            </div>
        )
    })

    //======= list of meals associated with the single category =========
    const foodWithQueryCard = (!(categoryMain && Object.keys(categoryMain).length))
        ? "" : categoryMain.map((meal, index) => {
            return (
                <ul className="food-list__card" key={categoryMain[index].idMeal}>
                    <li className="food-list__poster">
                        <LazyLoadImage
                            alt={meal.strMeal}
                            effect="blur"
                            src={meal.strMealThumb}
                            style={{ transition: 'all .3s', width:'100%', height:'100%' }}
                            className="lazyimg"
                        />
                    </li>
                    <div className="title-discover">
                        <li>
                            <p className='title'> {meal.strMeal} </p>
                        </li>

                        <Link to={{
                            pathname: `/meals/${categoryMain[index].idMeal}/${meal.strMeal}`
                        }}>
                            <button className="btn-discover"> Discover </button>
                        </Link>
                    </div>
                </ul>
            )
        })

    return (
        <div className="header">
            <div className="container">
                <div className="food-wrapper1">
                    <button className="btn-navigate__back" onClick={handleClick}><i className="fas fa-arrow-left"></i></button>
                    <div className="food-header__content1" style={{ marginTop: '10px' }}>
                        <div className="single-detail__wrapper">
                            {detailsCard}
                        </div>
                    </div>

                    <div className="randomgenerator-content">
                        <h1>Some {catItem}  Meals</h1>
                        <div className="randomgenerator-cardwrapper">
                            {foodWithQueryCard}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default withRouter(CategoryMainPage)