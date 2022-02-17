import * as React from "react"
import SingleProduct from "./singleProduct"
import QuickProduct from "./quickProduct"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef } from "react"

const GrigliaProdotti = ({ prodotti, alberaturaCategoria, quick, setQuick,dataprovider }) => {



    const ref = useRef()


    function filtraProdotti(arrayItem, itemCategoria) {
        
// filtra per id i prodotti in "arrayItem"

        const filtered = arrayItem.filter((item) => {
            if (item.categories) {
                return (item.categories.some((itemSub) => {
                    return ((itemCategoria.categoriaPrincipale === item.categories[0].id) &&
                        (itemSub.id === itemCategoria.idCorrente)
                    )
                }))
            } else return ""

        })

        const filteredAll = arrayItem.filter((item) => {
            if (item.categories) {
                return (item.categories.some((itemSub) => {
                    return (item.categories[1] && itemCategoria.idCorrente === item.categories[1].id
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
            <div className="categoria-corrente">{alberaturaCategoria.corrente}</div>
            <div className="griglia-prodotti">
                {
                    filtraProdotti(prodotti, alberaturaCategoria).map((prodotto) => {
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
                        <QuickProduct image={quick.immagine} name={quick.name} prezzo={quick.prezzo} />
                    </motion.div>
                }

            </AnimatePresence>
        </section>
    )
}

export default GrigliaProdotti