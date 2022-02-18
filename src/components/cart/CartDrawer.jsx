import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShareContext } from "../context/Context"
const CartDrawer = ({ openCart, setOpenCart }) => {
const dataContext = React.useContext(ShareContext)
console.log(dataContext.openCart,'test');
    return (
        <>
        <AnimatePresence>
            {dataContext.openCart &&
                <motion.div 
                className="wrapper-cart-drawer"
                initial={{ right:'-20%', opacity: 0, duration: 0.5 }}
                animate={{ right:0, opacity: 1, duration: 0.5 }}
                exit={{ right:'-20%', opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                >
                    <button onClick={()=>dataContext.setOpenCart(false)} >close</button>
                    <div className="inner-cart">
                        <div className="info-cart">
                            <span>Nome Prodotto</span>
                        </div>
                    </div>
                </motion.div>
            }
            </AnimatePresence>
        </>
    )

}


export default CartDrawer