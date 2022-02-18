import React, { createContext, useState } from "react"
const defaultState = {}
const ShareContext = createContext(defaultState)
const ShareContextProvider = props => {
  const [openCart, setOpenCart] = useState(false)


  return (
    <ShareContext.Provider value={{ setOpenCart: setOpenCart, openCart : openCart }}>
      {props.children}
    </ShareContext.Provider>
  )
}

export { ShareContextProvider, ShareContext }