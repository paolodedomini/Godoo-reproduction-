import React, { createContext, useState } from "react"

const defaultState = {}
const ShareContext = createContext(defaultState)

const ShareContextProvider = props => {
  const [openCart, setOpenCart] = useState(false)
  const [dataCart, setDataCart] = useState({})
  const [idVariante, setIdVariante] = useState(0)


  const data = {
    setOpenCart: setOpenCart,
    openCart: openCart,
    dataCart: dataCart,
    setDataCart: setDataCart,
    idVariante: idVariante,
    setIdVariante: setIdVariante,
    
  }

  return (
    <ShareContext.Provider value={data}>
      {props.children}
    </ShareContext.Provider>
  )
}

export { ShareContextProvider, ShareContext }