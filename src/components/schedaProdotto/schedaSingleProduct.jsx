import React from 'react'
import { useContext, useState } from 'react';
import { ShareContext } from "../context/Context"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Rating from './rating';
import InputQuantita from '../prodotti/inputQuantita';
import SizeColor from './sizeColor';
import './schedaProdotto.scss'

function SchedaSingleProduct({ data }) {


    const dataCart = useContext(ShareContext)
    const immagineProdotto = getImage(data.image_sharp.childImageSharp.gatsbyImageData)
    const [quantita, setQuantita] = React.useState(0)
    const [datiSelezionati, setDatiSelezionati] = React.useState({})

    const categoriaCorrenteProdotto = data.categories[data.categories.length - 1]


   // console.log(data.attributeValues, 'datiprodotto');
    
    const arrayAttributiPerTipo = Object.keys(dataCart.attributiPerTipo).map(
        (item) => (dataCart.attributiPerTipo[item])
    )
    // console.log(arrayAttributiPerTipo, 'attributi');

    function arrayAttributoConNome() {
        let arrayResult = []
        arrayAttributiPerTipo.forEach((itemTipo) => {
            data.attributeValues.forEach((item) => {
                if (item.attributeId === itemTipo.idAttributo) {
                    const newOne = { ...item, nomeAttributo: itemTipo.nomeAttributo }
                    arrayResult.push(newOne)
                }
            })
        })
        return arrayResult
    }

    const arrayAttributiFiltrati = arrayAttributoConNome();
   // console.log(arrayAttributiFiltrati);
    return (
        <div className="wrapper-scheda">
            <div className="box-image animated fadeIn">
                <GatsbyImage image={immagineProdotto} alt='test' />
            </div>
            <div className="data-box animated fadeInDown">
                <div className="title">{data.name}</div>
                {data.description && <div className="description">{data.description}</div>}
                <div className="sku">{data.sku}</div>
                <div className="price">
                    €{data.price}
                </div>

                <Rating />

                <div className="description"></div>
                <div className="specifiche">
                    <ul>
                        <li>Categoria: {categoriaCorrenteProdotto.name}</li>
                        {data.sku && <li>  SKU: {categoriaCorrenteProdotto.name}</li>}
                    </ul>
                </div>
                <SizeColor arrayAttributiFiltrati={arrayAttributiFiltrati} colori={dataCart.colori} taglie={dataCart.taglie} />

                <div className="quantity">
                    <span>Quantita</span>
                    <InputQuantita quantita={quantita} setQuantita={setQuantita} />
                </div>

                <div className="add-to-cart-scheda">
                    <button className='add-cart' disabled={quantita ? false : true} >Add to cart</button>
                </div>
            </div>
        </div>

    )
}

export default SchedaSingleProduct