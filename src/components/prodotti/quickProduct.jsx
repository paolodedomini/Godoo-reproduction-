import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import InputQuantita from "./inputQuantita"
const QuickProduct = ({ image, name, prezzo }) => {

    return (
        <>
            <GatsbyImage placeholder="blurred" image={image} />
            <div className="titolo">{name}</div>
            <div className="prezzo">{prezzo}€</div>
            <div className="add-to-cart">
                <div className="wrapper-varianti">
                    <label htmlFor="variante1">
                        <input type="radio" name="varianti" id="variante1" />
                        <span class="checkmark"></span>
                    </label>
                    <label htmlFor="variante2">
                        <input type="radio" name="varianti" id="variante2" />
                        <span class="checkmark"></span>
                    </label>
                </div>
                <InputQuantita />
                <button className="add-cart">Add to cart</button>
            </div>
        </>
    )

}

export default QuickProduct