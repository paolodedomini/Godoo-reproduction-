import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
  query Prodotti2 {
    odoo {
      products(search: "") {
        products {
          id
          
          image
        }
      }
    }
  }
`)

  return (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default SecondPage
