import * as React from "react"
import PropTypes from "prop-types"
import CartButton from "./cart/cartButton"



const Header = (props, { siteTitle }) => {

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
