import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import CartButton from "./cart/cartButton"
import { useContext } from "react"



const Header = ({ siteTitle }) => {

  return (
    <header>
      <div>
        <h1>
          {siteTitle}
        </h1>
      </div>
      <CartButton />
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
