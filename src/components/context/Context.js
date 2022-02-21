import React, { createContext, useState } from "react"

const defaultState = {}
const ShareContext = createContext(defaultState)

const ShareContextProvider = props => {
  const [openCart, setOpenCart] = useState(false)
  const [dataCart, setDataCart] = useState()

const data = {
  setOpenCart: setOpenCart, 
  openCart : openCart,
  dataCart : dataCart,
  setDataCart: setDataCart
}

  return (
    <ShareContext.Provider value={data}>
      {props.children}
    </ShareContext.Provider>
  )
}

export { ShareContextProvider, ShareContext }