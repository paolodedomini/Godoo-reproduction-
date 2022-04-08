import * as React from "react"
import SingleProduct from "./singleProduct"
import QuickProduct from "./quickProduct"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { useEffect, useRef, useContext, useState } from "react"
import { ShareContext } from "../context/Context"
import BreadCrumb from "./breadCrumb"
import './prodotti.scss'

const GrigliaProdotti = ({categoriaGenere, prodotti, alberaturaCategoria, quick, setQuick, categorie }) => 

{
    const ref = useRef()
    const dataCart = useContext(ShareContext)
    const [datiDefault, setDatiDefault] = useState([])
 
    function filtraProdotti(arrayItem, itemCategoria) {
        // filtra per id i prodotti in "arrayItem"
        const filtered = arrayItem.filter((item) => {
            if (item.categories) {
                return (item.categories.some((itemSub) => {
                    return ((itemCategoria.categoriaPrincipale === 13) &&
                        (itemSub.id === itemCategoria.idCorrente)
                    )
                }))
            } else return ""

        })

        const filteredAll = arrayItem.filter((item) => {
            if (item.categories) {
                return (item.categories.some(() => {
                    return (item.categories[1] && 
                        itemCategoria.idCorrente === item.categories[1].id
                    )
                }))
            }
        })

        if (itemCategoria.corrente === 'All') {
            return filteredAll
        }
        else { return filtered }
    }

    useEffect(() => {
        const prod = prodotti.filter((item) => {
            if (item.categories) {
                return (item.categories.some((itemSub) => {
                    return (itemSub.id === categoriaGenere)
                }))
            }
        })
        setDatiDefault(prod)

    }, [])



    // Funzioni per gestire la chiusura del quickShop

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (quick.open && ref.current && !ref.current.contains(e.target)) {
                setQuick({ open: false })
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [quick.open])





    return (
        <section className="wrapper-prodotti">

            <BreadCrumb categorie={categorie} alberaturaCategoria={alberaturaCategoria} />
            <div className="griglia-prodotti">
                {alberaturaCategoria.corrente !== 'default' ?
                    filtraProdotti(prodotti, alberaturaCategoria).map((prodotto) => {
                        return (
                            <div className="box-preview-prodotto" key={prodotto.id}>
                                <SingleProduct prodotto={prodotto} setQuick={setQuick} />
                            </div>
                        )
                    }) : datiDefault.map((prodotto) => {
                        return (
                            <div className="box-preview-prodotto" key={prodotto.id}>
                                <SingleProduct prodotto={prodotto} setQuick={setQuick} />
                            </div>
                        )
                    })
                }
            </div>

            <AnimatePresence>
                {quick.open &&
                    <motion.div
                        ref={ref}
                        className="quick-shop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <section className="slider-quick">

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >

                                <QuickProduct
                                    image={quick.varianti[dataCart.idVariante].image_sharp}
                                    name={quick.varianti[dataCart.idVariante].name}
                                    prezzo={quick.varianti[dataCart.idVariante].price}
                                    id={quick.varianti[dataCart.idVariante].id}
                                    varianti={quick.varianti}
                                    setQuick={setQuick}
                                />
                            </motion.div>

                        </section>
                    </motion.div>
                }

            </AnimatePresence>
            {quick.open &&
                <div className="background-transparent">

                </div>
            }
        </section>
    )
}

export default GrigliaProdotti