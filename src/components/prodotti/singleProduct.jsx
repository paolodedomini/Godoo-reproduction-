import * as React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SingleProduct = ({ prodotto, setQuick }) => {

    const image = getImage(prodotto.productVariantIds[0].imageMedium_sharp)


    return (
        <>
            <div className="wrapper-img">
                <GatsbyImage image={image} alt='test' />
                <div  onClick={() => setQuick({open: true, name: prodotto.name, prezzo:prodotto.listPrice, immagine: image})}  className="quick-shop-button">
                    <span>Quick Shop</span>
                </div>
            </div>

            <div className="titolo">{prodotto.name}</div>
            <div className="prezzo">{prodotto.listPrice}€</div>
            
        </>)
}

export default SingleProduct