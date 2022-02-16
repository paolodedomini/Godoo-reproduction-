import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GrigliaProdotti from "../components/prodotti/grigliaProdotti"
import FiltriProdotto from "../components/prodotti/filtriProdotto"
import "../assets/scss/general.scss"
import {useState} from "react"
const Products = () => {
  const data = useStaticQuery(graphql`
    query Prodotti {
      odoo {
        allProductTemplates(limit: 10) {
          id
          name
          listPrice
          defaultCode
          productVariantIds {
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
  const [quick, setQuick] = useState({open:false})

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
