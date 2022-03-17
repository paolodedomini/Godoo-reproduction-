import React from "react"
import { graphql } from "gatsby"
import SchedaProdotto from "../components/schedaProdotto/schedaProdotto"
import Layout from "../components/layout"
const TestProdotto = ({ data }) => {
    const dataTest = data.odoo.products.products[30]
    return (
        <Layout>
            <SchedaProdotto data={dataTest} />
        </Layout>

    )
}

export const query = graphql`
  {
    odoo {
      products(pageSize: 50, search: "") {
        products {
          name
          id
          description
          price
          sku
          image
          image_sharp {
            childImageSharp {
              gatsbyImageData(width: 400, quality: 90)
            }
          }
        }
      }
    }
  }
`

export default TestProdotto