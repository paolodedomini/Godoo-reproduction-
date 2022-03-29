import React from 'react'
import { useContext, useState } from 'react';
import { ShareContext } from "../context/Context"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Rating from './rating';
import InputQuantita from '../prodotti/inputQuantita';

import './schedaProdotto.scss'

function SchedaSingleProduct({ data }) {

    const dataCart = useContext(ShareContext)
    const immagineProdotto = getImage(data.image_sharp.childImageSharp.gatsbyImageData)
    const [quantita, setQuantita] = React.useState(0)
    return (
        <div className="wrapper-scheda">
            <div className="box-image">
                <GatsbyImage image={immagineProdotto} alt='test' />
            </div>
            <div className="data-box">
                <div className="title">{data.name}</div>
               { data.description && <div className="description">{data.description}</div>}
                <div className="sku">{data.sku}</div>
                <div className="price">
                    €{data.price}
                </div>
                <div className="rating">
                    <div className="star-rating">
                        <span>Rating</span>
                        <div className="wrap-stars">
                            <Rating />
                        </div>
                    </div>

                </div>
                <div className="description"></div>

                <div className="size-color">
                    <span>taglia</span>
                    {dataCart.taglie && <ul className='size'>

                        {dataCart.taglie.map((item) => <li>{item}</li>)}

                    </ul>}
                    {dataCart.colori &&
                        <><span>Colore</span>
                            <ul className='color'>
                                {dataCart.colori.map((item) => <li style={{ backgroundColor: `${item}` }}></li>)}
                            </ul></>}
                </div>
                <div className="quantity">
                    <span>Quantita</span>
                    <InputQuantita quantita={quantita} setQuantita={setQuantita} />
                </div>

                <div className="add-to-cart">
                    <button className='add-cart'>Add to cart</button>
                </div>
            </div>
        </div>

    )
}

export default SchedaSingleProduct