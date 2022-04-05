import * as React from "react"
import PropTypes from "prop-types"
import CartButton from "./cart/cartButton"
import Navbar from "./navigation/navbar"
import { ShareContext } from "./context/Context"
import { useContext } from "react"


const Header = (props, { siteTitle }) => {

  const dataContext = useContext(ShareContext)

  return (
    <header>
      <Navbar dataCart={dataContext.dataCart}/>

    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
