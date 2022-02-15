import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Seo from "../seo"
import SingleProduct from "./singleProduct"

const GrigliaProdotti = ({ prodotti, categoria, categoriaPrincipale }) => {


    function filtraProdotti(arrayItem, itemCategoria) {
        const filtered = arrayItem.filter((item) => {
            return (item.publicCategIds.some((itemSub) => {
                return (categoriaPrincipale === item.publicCategIds[0].name && itemSub.name === categoria
                )
            }))
        })
        return filtered
    }


    return (
        <div className="griglia-prodotti">
            <h1>{categoria}</h1>
            {
                filtraProdotti(prodotti, categoria).map((prodotto) => {
                    return (
                        <div key={prodotto.id}>
                            <SingleProduct prodotto={prodotto} />
                        </div>
                    )
                })
            }
        </div>)
}

export default GrigliaProdotti