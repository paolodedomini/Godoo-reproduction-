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

    const categoriaCorrenteProdotto = data.categories && data.categories[data.categories.length - 1]
    const arrayMateriali = data.attributeValues.filter((item) => item.attributeName === 'Material')


    // console.log(arrayAttributiFiltrati);
    return (
        <div className="wrapper-scheda">
            <div className="box-image animated fadeIn">
                <GatsbyImage image={immagineProdotto} alt='test' />
            </div>
            <div className="data-box animated fadeInDown">
                <div className="title">{data.name}</div>
                <div className="price">
                    €{data.price}
                </div>
                <Rating />
                <div className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Assumenda animi dignissimos consequatur atque iste nisi tempora deserunt commodi
                </div>
                {/* {data.description && <div className="description">{data.description}</div>} */}


                {arrayMateriali &&
                    <div className="materiali">
                        <span>Materiali:</span>
                        <ul>
                            {arrayMateriali.map((item) => <li>{item.name}</li>)}
                        </ul>
                    </div>}
                <div className="specifiche">
                    <ul>
                        {categoriaCorrenteProdotto && <li>Categoria: {categoriaCorrenteProdotto.name}</li>}
                        {data.sku && <li>  SKU: {categoriaCorrenteProdotto.name}</li>}
                    </ul>
                </div>

                <SizeColor arrayAttributiFiltrati={data.attributeValues} colori={dataCart.colori} taglie={dataCart.taglie} />

                {data.sku && <div className="sku">{data.sku}</div>}
                <div className="bottomscheda">
                    <div className="quantity">
                        <InputQuantita quantita={quantita} setQuantita={setQuantita} />
                    </div>

                    <div className="add-to-cart-scheda">
                        <button className='add-cart' disabled={quantita ? false : true} >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SchedaSingleProduct