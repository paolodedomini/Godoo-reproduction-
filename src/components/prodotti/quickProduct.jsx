import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
                <div className="wrapper-qta">
                    <span>-</span>
                    <input type="number" name="qta" id="qta" />
                    <span>+</span>
                </div>
                <button className="add-cart">Add to cart</button>
            </div>
        </>
    )

}

export default QuickProduct