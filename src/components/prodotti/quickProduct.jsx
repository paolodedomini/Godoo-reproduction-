import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import InputQuantita from "./inputQuantita"
import { ShareContext } from "../context/Context"

const QuickProduct = ({ image, name, prezzo, id }) => {

    const dataCart = React.useContext(ShareContext)

    function getDataCart(name, prezzo, id, image) {
        dataCart.setDataCart({
            ...dataCart.dataCart,
            name: name,
            prezzo: prezzo,
            id: id,
            image: image
        })

    }

    return (
        <>
            <GatsbyImage placeholder="blurred" image={image} alt="test" />
            <div className="titolo">{name}</div>
            <div className="prezzo">{prezzo}€</div>
            <div className="add-to-cart">
                <div className="wrapper-varianti">
                    <label htmlFor="variante1">
                        <input type="radio" name="varianti" id="variante1" />
                        <span className="checkmark"></span>
                    </label>
                    <label htmlFor="variante2">
                        <input type="radio" name="varianti" id="variante2" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <InputQuantita />
                <button className="add-cart" onClick={()=>getDataCart(name, prezzo, id, image)}>Add to cart</button>
            </div>
        </>
    )

}

export default QuickProduct