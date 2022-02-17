/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import CartDrawer from "./cart/CartDrawer"
import { createContext } from "react"
import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    

    }
  `)

  const DataContext = createContext()
  return (
    <>
      <DataContext.Provider value={{ test: 'test' }}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="main-container">
          {children}
          <footer>
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
          {/*       <CartDrawer setOpenCart={dataFromContext.setOpenCart} openCart={dataFromContext.openCart}/>*/}
        </div>
      </DataContext.Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
