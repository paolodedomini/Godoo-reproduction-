import React from 'react'
import SingleProduct from './singleProduct'
function Correlati({ categorieProdotto, ArrayProdottiAnteprime }) {

    const prodotti = ArrayProdottiAnteprime.odoo.products.products
    const categoriaCorrente = categorieProdotto[categorieProdotto.length - 1]

    const prodottiCorrelatiCategoria = () => {
        return prodotti.filter((item) => (item.categories && item.categories[categorieProdotto.length - 1]) && item.categories[categorieProdotto.length - 1].name === categoriaCorrente.name)
    }
console.log(prodottiCorrelatiCategoria);


    return (
        <div className="correlati">
            <h2 className="title">
                Correlati
            </h2>
            {prodottiCorrelatiCategoria().map((prodotto) => {
                return (<div className="box-preview-prodotto" key={prodotto.id}>
                    <SingleProduct prodotto={prodotto} />
                </div>)
            })}

        </div>
    )
}

export default Correlati