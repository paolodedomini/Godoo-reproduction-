import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GrigliaProdotti from "../components/prodotti/grigliaProdotti"
import FiltriProdotto from "../components/prodotti/filtriProdotto"
import "../assets/scss/general.scss"

const Products = () => {
  const data = useStaticQuery(graphql`
    query Prodotti {
      odoo {
        allProductTemplates(limit: 10) {
          id
          name
          productVariantId {
            id
            imageMedium
            imageMedium_sharp {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
            }
          }
          publicCategIds {
            name
          }
        }
        allCategories(topCategory: true) {
          name
          id
          childId {
            name
            id
            childId {
              id
              name
            }
          }
        }
      }
    }
  `)

  const dataProdotti = data.odoo.allProductTemplates
  const categorieProdotti = data.odoo.allCategories

  const [alberaturaCategoria, setAlberaturaCategoria] = React.useState({})

  return (
    <Layout>
      <main className="page-products">
        <FiltriProdotto
      
          alberaturaCategoria={alberaturaCategoria}
          setAlberaturaCategoria={setAlberaturaCategoria}
          categorie={categorieProdotti}
        />
       <GrigliaProdotti alberaturaCategoria={alberaturaCategoria}  prodotti={dataProdotti} />
      </main>
    </Layout>
  )
}

export default Products
