import { withRouter } from 'react-router-dom'
import MetaTags from 'react-meta-tags';
import '../styles/main.css'
import CocktailForm from './CocktailForm'
import CocktailRandom from "./CocktailRandom";
import FrontCockIngredient from "./FrontCockIngredient";
import FrontPageCockCategories from "./FrontPageCockCategories";
import RandomCocktailGenerator from "./RandomCocktailGenerator";


const CocktailMain = (props) => {

    const { handleOnSubmit, handleOnChange, randomCocktail, randError, randomCocktailGenerator, errorCocktailGenerator } = props

    return (
        <div className="main-wrapper">
            <div className="header">
                <div className="container">

                    <MetaTags>
                        <title>Priscy | Drinks</title>
                        <meta name="description" content="finest drinks, including cocktail, alcohol and non-alcohol drinks." />
                    </MetaTags>

                    <ul className="outer-main__section1">

                        <li className="inner-main__section1">
                            <div className="form-wrapper" onSubmit={handleOnSubmit} onChange={handleOnChange}>
                                <CocktailForm />
                            </div>

                            <div className="random-wrapper">
                                    <CocktailRandom randomCocktail={randomCocktail} randError={randError} />
                            </div>
                        </li>

                        <li className="search-wrapper">
                               <FrontCockIngredient />
                                <FrontPageCockCategories />
                                 <RandomCocktailGenerator randomCocktailGenerator={randomCocktailGenerator} errorCocktailGenerator={errorCocktailGenerator} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CocktailMain)

