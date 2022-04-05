import React, { createContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
const defaultState = {}

const ShareContext = createContext(defaultState)

const ShareContextProvider = props => {

  const dataProdotti = useStaticQuery(graphql`
    {
      odoo {
        products(pageSize: 50, search: "") {
          attributes {
            values {
              attributeId
              attributeName
              name
            }
            name
            displayType
          }
        }
      }
    }
  `)
  


  const [openCart, setOpenCart] = useState(false)
  const [dataCart, setDataCart] = useState({})
  const [idVariante, setIdVariante] = useState(0)
  const [quantita, setQuantita] = React.useState(0)

  const arrayAttributi = dataProdotti.odoo.products.attributes

  function creaOggettoAttributi() {
    const objData = {}
    arrayAttributi.forEach((attributoTipo) => {
      objData[attributoTipo.name] = {
        nomeAttributo: attributoTipo.name,
        idAttributo: attributoTipo.values[0].attributeId, 
        attributi:attributoTipo.values.map((item) => item.name)}
    })
    return objData
  }


  const attributiPerTipo = creaOggettoAttributi()



  const data = {
    attributiPerTipo: attributiPerTipo,
    setOpenCart: setOpenCart,
    openCart: openCart,
    dataCart: dataCart,
    setDataCart: setDataCart,
    idVariante: idVariante,
    setIdVariante: setIdVariante,
    quantita: quantita,
    setQuantita: setQuantita,
  }

  return (
    <ShareContext.Provider value={data}>
      {props.children}
    </ShareContext.Provider>
  )
}

export { ShareContextProvider, ShareContext }