import React from 'react'
import {
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    LinkedinIcon,
    PinterestIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";


import "../styles/footer.css"

const twitterHash = ["recipes", "cocktail",]

const Share = () => {

    return (
        <div className="social-wrapper">
            <FacebookShareButton url="https://priscyrecipes.com/recipes" hashtag="recipes">
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>

            < TwitterShareButton url="https://priscyrecipes.com/recipes" hashtag={twitterHash} >
                <TwitterIcon size={32} round={true} />
            </ TwitterShareButton>

            < WhatsappShareButton url="https://priscyrecipes.com/recipes" title="priscyrecipes" >
                <WhatsappIcon size={32} round={true} />
            </ WhatsappShareButton>

            < PinterestShareButton url="https://priscyrecipes.com/recipes" media="https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg" description="Beef Sunday Roast" >
                <PinterestIcon size={32} round={true} />
            </ PinterestShareButton>

            < LinkedinShareButton url="https://priscyrecipes.com/recipes" description="Beef Sunday Roast" >
                < LinkedinIcon size={32} round={true} />
            </ LinkedinShareButton>
        </div>
    )
}

export default Share
