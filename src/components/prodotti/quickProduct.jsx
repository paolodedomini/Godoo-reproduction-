import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import InputQuantita from "./inputQuantita"
import { ShareContext } from "../context/Context"
import VarianteColore from "./varianteColore"


const QuickProduct = ({ image, name, prezzo, id, varianti, setQuick }) => {


    const dataCart = React.useContext(ShareContext)
    const imageVariante = getImage(image)
    const [quantita, setQuantita] = React.useState(0)
    function getDataCart(name, prezzo, id) {
        dataCart.setDataCart({
            ...dataCart.dataCart,
            name: name,
            prezzo: prezzo,
            id: id,
            image: imageVariante,
            quantita:quantita,
        })
    }

    return (
        <>
            <GatsbyImage placeholder="blurred" image={imageVariante} alt="test" />
            <div className="titolo">{name}</div>
            <div className="prezzo">{prezzo}€</div>
            <VarianteColore idVariante={dataCart.idVariante} setIdVariante={dataCart.setIdVariante} varianti={varianti} />

            <InputQuantita quantita={quantita} setQuantita={setQuantita} />
            <button
                disabled={quantita === 0 ? true : false}
                className="add-cart"
                onClick={() => {
                    getDataCart(name, prezzo, id)
                    setQuick(false)
                }}>
                Add to cart
            </button>
        </>
    )

}

export default QuickProduct