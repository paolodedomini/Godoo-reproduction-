import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Seo from "../seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
 
const SingleProduct = ({ prodotto }) => {
    const image = getImage(prodotto.productVariantId.image_sharp)
 
    return (
        <>
            <h1>{prodotto.name}</h1>
            <GatsbyImage image={image} alt='test' />

        </>)
}

export default SingleProduct