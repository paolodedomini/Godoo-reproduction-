import React, { createContext, useState } from "react"

const defaultState = {}
const ShareContext = createContext(defaultState)

const ShareContextProvider = props => {
  const [openCart, setOpenCart] = useState(false)
  const [dataCart, setDataCart] = useState({})
  const [idVariante, setIdVariante] = useState(0)
  const [quantita, setQuantita] = React.useState(0)

  const data = {
    setOpenCart: setOpenCart,
    openCart: openCart,
    dataCart: dataCart,
    setDataCart: setDataCart,
    idVariante: idVariante,
    setIdVariante: setIdVariante,
    quantita: quantita,
    setQuantita: setQuantita,
    taglie:['xs','s','m','l','xl','xxl'],
    colori:['#6060c8','#c8608d','#66c860', '#eddaa0']
  }

  return (
    <ShareContext.Provider value={data}>
      {props.children}
    </ShareContext.Provider>
  )
}

export { ShareContextProvider, ShareContext }