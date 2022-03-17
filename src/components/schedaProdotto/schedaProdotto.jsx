import React from 'react'
import { useContext } from 'react';
import { ShareContext } from "../context/Context"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Rating from './rating';
import InputQuantita from '../prodotti/inputQuantita';
import Layout from '../layout'
import './schedaProdotto.scss'

function SchedaProdotto({ data }) {

    const dataCart = useContext(ShareContext)
    const immagineProdotto = getImage(data.image_sharp.childImageSharp.gatsbyImageData)
    console.log(dataCart, 'test');
    return (

        <div className="wrapper-scheda">
            <div className="box-image">
                <GatsbyImage image={immagineProdotto} alt='test' />
            </div>
            <div className="data-box">
                <div className="title">{data.name}</div>
                <div className="description">{data.description}</div>
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
                    <ul className='size'>
                        
                            {dataCart.taglie.map((item)=><li>{item}</li>)}
                        
                    </ul>
                    <span>Colore</span>
                    <ul className='color'>
                    {dataCart.colori.map((item)=><li style={{backgroundColor:`${item}`}}></li>)}
                    </ul>
                </div>
                <div className="quantity">
                    <span>Quantita</span>
                    <InputQuantita quantita={dataCart.quantita} setQuantita={dataCart.setQuantita} />
                </div>

                <div className="add-to-cart">
               
                    <button className='add-cart'>Add to cart</button>
                </div>
            </div>
        </div>

    )
}

export default SchedaProdotto