import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GrigliaProdotti from "../components/prodotti/grigliaProdotti"
import FiltriProdotto from "../components/prodotti/filtriProdotto"
import "../assets/scss/general.scss"
import { useState } from "react"

const Products = () => {
  const data = useStaticQuery(graphql`
    query Prodotti {
      odoo {
        products(search: "", pageSize: 50) {
          products {
            id
            name
            image
            image_sharp {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
            }
            price
            sku
            productVariants {
              id
              name
              image
              price
              image_sharp {
                childImageSharp {
                  gatsbyImageData(width: 500)
                }
              }
            }
            categories {
              id
              name
            }
          }
        }
        categories(search: "") {
          categories {
            name
            id
            childs {
              name
              id
              childs {
                id
                name
              }
            }
          }

        }
      }
    }
  `)

  const dataProdotti = data.odoo.products.products
  const categorieProdotti = data.odoo.categories.categories


  const [alberaturaCategoria, setAlberaturaCategoria] = React.useState({})
  const [quick, setQuick] = useState({ open: false })

  return (
    <Layout>
     
        <main className="page-products">
          <FiltriProdotto
            alberaturaCategoria={alberaturaCategoria}
            setAlberaturaCategoria={setAlberaturaCategoria}
            categorie={categorieProdotti}
          />
          <GrigliaProdotti
            quick={quick}
            setQuick={setQuick}
            alberaturaCategoria={alberaturaCategoria}
            prodotti={dataProdotti} />
        </main>
     
    </Layout>
  )
}

export default Products
