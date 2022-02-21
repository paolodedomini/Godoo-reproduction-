import * as React from "react"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShareContext } from "../context/Context"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CartDrawer = () => {

    const dataContext = React.useContext(ShareContext)
    const [updatedCartContent, setupdatedCartContent] = React.useState([])

    useEffect(() => {
        if (dataContext.dataCart) {
            setupdatedCartContent([...updatedCartContent, dataContext.dataCart])
        }
    }, [dataContext.dataCart])



    return (
        <>
            <AnimatePresence>
                {dataContext.openCart &&
                    <motion.div
                        className="wrapper-cart-drawer"
                        initial={{ right: '-20%', opacity: 0, duration: 0.5 }}
                        animate={{ right: 0, opacity: 1, duration: 0.5 }}
                        exit={{ right: '-20%', opacity: 0 }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    >
                        <button onClick={() => dataContext.setOpenCart(false)} >close</button>
                        <div className="inner-cart">
                            {updatedCartContent.map((item) => {
                                const productImage = getImage(item.image)
                                return (
                                    <div key={item.id} className="info-cart">
                                        <GatsbyImage image={productImage} alt='test' />
                                        {item.name && <div className="cart-name">{item.name}</div>}
                                    </div>
                                )
                            })}

                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )

}


export default CartDrawer