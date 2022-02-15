import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import SingleProduct from "./singleProduct"

const GrigliaProdotti = ({ prodotti, alberaturaCategoria }) => {


    function filtraProdotti(arrayItem, itemCategoria) {
        const filtered = arrayItem.filter((item) => {
            console.log(item);
            return (item.publicCategIds.some((itemSub) => {
                if(alberaturaCategoria.corrente != 'All'){
                return (alberaturaCategoria.categoriaPrincipale === item.publicCategIds[0].name && itemSub.name === alberaturaCategoria.corrente
                )} else {
                    return ( itemSub.name === alberaturaCategoria.corrente)
                }

            }))
        })
        return filtered
    }


    return (
        <div className="griglia-prodotti">
            <h1>{alberaturaCategoria.corrente}</h1>
            {
                filtraProdotti(prodotti, alberaturaCategoria).map((prodotto) => {
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