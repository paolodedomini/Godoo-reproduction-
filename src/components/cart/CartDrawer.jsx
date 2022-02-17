import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

const CartDrawer = ({ openCart, setOpenCart }) => {

    return (
        <>
            {openCart &&
                <motion.div 
                className="wrapper-cart-drawer"
                initial={{ right:'-100%', opacity: 0 }}
                animate={{ right:0, opacity: 1 }}
                exit={{ right:'-100%', opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                >
                    <div className="inner-cart">
                        <div className="info-cart">
                            <span>Nome Prodotto</span>
                        </div>
                    </div>
                </motion.div>
            }
        </>
    )

}


export default CartDrawer