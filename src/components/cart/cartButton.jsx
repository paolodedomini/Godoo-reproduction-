import * as React from "react"
import { BsCartFill } from 'react-icons/bs';
import { ShareContext } from "../context/Context";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const CartButton = ({ dataCart }) => {
    console.log();
    const [animation, setAnimation] = useState(false)

    useEffect(() => {
        setAnimation(false)
        setTimeout(() => {
            setAnimation(true)
        }, 300)
    }, [dataCart.quantita])

    const dataContext = React.useContext(ShareContext)

    return (
        <>


            <div onClick={() => dataContext.setOpenCart(true)} className="wrapper-button-cart" >
                <AnimatePresence>
                   { animation && <motion.div layout
                        className="icon-cart-wrapper"
                        initial={{ position: 'absolute', opacity: 0, left: -200 }}
                        animate={{ position: 'absolute', opacity: 1, left: '25%' }}
                        exit={{ position: 'absolute', opacity: 1, left: -200 }}
                        transition={{ duration: 1 }}
                    >
                        <BsCartFill />
                        {(dataCart.quantita > 0) &&
                            <motion.div
                                initial={{ position: 'absolute', opacity: 0, top: -100 }}
                                animate={{ position: 'absolute', opacity: 1, top: '15%' }}
                                exit={{ position: 'absolute', opacity: 0, top: -50 }}
                                
                            >
                                <div className="icona-quantita">{dataCart.quantita}</div>
                            </motion.div>}

                    </motion.div>}
                </AnimatePresence>

            </div>


        </>
    )
}

export default CartButton