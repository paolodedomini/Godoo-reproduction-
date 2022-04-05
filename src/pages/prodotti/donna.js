import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import GrigliaProdotti from '../../components/prodotti/grigliaProdotti' 
import FiltriProdotto from "../../components/prodotti/filtriProdotto"
import "../../assets/scss/general.scss"
import { useState } from "react"

const ProdottiDonna = () => {
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
            attributeValues {
              attributeId
              id
              name
              htmlColor
            }
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
  
  React.useEffect(() => { setAlberaturaCategoria({corrente:'default'})}, [])
  return (
    <Layout>
     
        <main className="page-products">
          <FiltriProdotto
            alberaturaCategoria={alberaturaCategoria}
            setAlberaturaCategoria={setAlberaturaCategoria}
            categorie={categorieProdotti}
            categoriaGenere={13}
          />
          <GrigliaProdotti
            quick={quick}
            setQuick={setQuick}
            alberaturaCategoria={alberaturaCategoria}
            prodotti={dataProdotti}
            categorie={categorieProdotti} 
            categoriaGenere={13}
          />
        </main>
     
    </Layout>
  )
}

export default ProdottiDonna
