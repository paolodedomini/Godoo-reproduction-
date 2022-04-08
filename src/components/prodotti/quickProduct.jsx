import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import InputQuantita from "./inputQuantita"
import { ShareContext } from "../context/Context"
import VarianteColore from "./varianteColore"


const QuickProduct = ({ image, name, prezzo, id, varianti, setQuick }) => {


    const dataCart = React.useContext(ShareContext)
    console.log(dataCart, 'dataCart');
    const imageVariante = getImage(image)
    const [quantitaProdotto, setQuantitaProdotto] = React.useState(0)

    function setDataCart(name, prezzo, id) {
        dataCart.setDataCart([...dataCart.dataCart,{
            name: name,
            prezzo: prezzo,
            id: id,
            image: imageVariante,
            quantita: quantitaProdotto,
        }]
        )
       
    }

    return (
        <>
            <GatsbyImage placeholder="blurred" image={imageVariante} alt="test" />
            <div className="titolo">{name}</div>
            <div className="prezzo">{prezzo}€</div>
            <VarianteColore idVariante={dataCart.idVariante} setIdVariante={dataCart.setIdVariante} varianti={varianti} />

            <InputQuantita quantita={quantitaProdotto} setQuantita={setQuantitaProdotto} />
            <button
                disabled={quantitaProdotto === 0 ? true : false}
                className="add-cart"
                onClick={() => {
                    setDataCart(name, prezzo, id)
                    setQuick(false)
                }}>
                Add to cart
            </button>
        </>
    )

}

export default QuickProduct