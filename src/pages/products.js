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
            image
            image_sharp {
              childImageSharp {
                gatsbyImageData(width: 200)
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
            childId {
              name
            }
          }
        }
      }
    }
  `)

  const dataProdotti = data.odoo.allProductTemplates
  const categorieProdotti = data.odoo.allCategories

  const [mainCat, setMainCat] = React.useState("")
  const [categoria, setCategoria] = React.useState("")

  return (
    <Layout>
      <main className="page-products">
        <FiltriProdotto
          setCategoriaPrincipale={setMainCat}
          setCategoria={setCategoria}
          categorie={categorieProdotti}
        />
        <GrigliaProdotti categoria={categoria} categoriaPrincipale={mainCat} prodotti={dataProdotti} />
      </main>
    </Layout>
  )
}

export default Products
