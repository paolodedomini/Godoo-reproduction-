import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import InputQuantita from "./inputQuantita"
import { ShareContext } from "../context/Context"
import VarianteColore from "./varianteColore"


const QuickProduct = ({ image, name, prezzo, id, varianti,setQuick }) => {

    const [quantita, setQuantita] = React.useState(0)
    const dataCart = React.useContext(ShareContext)
    const imageVariante = getImage(image)


    function getDataCart(name, prezzo, id, quantita) {
        dataCart.setDataCart({
            ...dataCart.dataCart,
            name: name,
            prezzo: prezzo,
            id: id,
            image: imageVariante,
            quantita: quantita,
        })
    }

    return (
        <>
            
                <GatsbyImage placeholder="blurred" image={imageVariante} alt="test" />
                <div className="titolo">{name}</div>
                <div className="prezzo">{prezzo}€</div>
                <VarianteColore idVariante={dataCart.idVariante} setIdVariante={dataCart.setIdVariante} varianti={varianti} />
                <div className="add-to-cart">
                    <InputQuantita quantita={quantita} setQuantita={setQuantita} readonly />
                    <button
                    disabled={quantita === 0 ? true : false}
                        className="add-cart"
                        onClick={() => {
                            getDataCart(name, prezzo, id, quantita)
                            setQuick(false)
                            }}>
                        Add to cart
                    </button>
                </div>
            
        </>
    )

}

export default QuickProduct