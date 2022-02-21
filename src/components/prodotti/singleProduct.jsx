import * as React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SingleProduct = ({ prodotto, setQuick }) => {

    const image = getImage(prodotto.image_sharp)


    return (
        <>
            <div className="wrapper-img">
                <GatsbyImage image={image} alt='test' />
                <div onClick={() => setQuick({
                    open: true,
                    name: prodotto.name,
                    prezzo: prodotto.price,
                    immagine: image,
                    id: prodotto.id,
                    varianti: prodotto.productVariants
                })}
                    className="quick-shop-button">

                    <span>Quick Shop</span>

                </div>
            </div>

            <div className="titolo">{prodotto.name}</div>
            <div className="prezzo">{prodotto.price}€</div>

        </>)
}

export default SingleProduct