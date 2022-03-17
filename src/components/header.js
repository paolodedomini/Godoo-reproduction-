import * as React from "react"
import PropTypes from "prop-types"
import CartButton from "./cart/cartButton"
import { ShareContext } from "./context/Context"
import { useContext } from "react"
import { AnimateSharedLayout } from "framer-motion"

const Header = (props, { siteTitle }) => {

  const dataContext = useContext(ShareContext)

  return (
    <header>
      <div>
        <h1>
          {siteTitle}
        </h1>
      </div>
      <AnimateSharedLayout>
        <CartButton dataCart={dataContext.dataCart} />
      </AnimateSharedLayout>
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
