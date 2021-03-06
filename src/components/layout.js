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
import { ShareContextProvider } from "./context/Context"

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

  return (
    <>
      <ShareContextProvider>
        <div className="main-container">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          {children}
          <footer>
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
          <CartDrawer />
        </div>
      </ShareContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
