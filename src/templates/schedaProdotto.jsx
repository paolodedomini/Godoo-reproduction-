import React from 'react'
import SchedaSingleProduct from '../components/schedaProdotto/schedaSingleProduct'
import Correlati from '../components/prodotti/correlati'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
function SchedaProdotto(props) {
  const ArrayProdottiAnteprime = useStaticQuery(graphql`
    {
      odoo {
        products(pageSize: 50, search: "") {
          products {
            name
            id
            image
            image_sharp {
              name
              childImageSharp {
                gatsbyImageData(width: 500, quality: 10)
              }
            }
            categories {
              name
            }
          }
        }
      }
    }
  `)

  const dataProdotto = props.pageContext.data
  const categorieProdotto = dataProdotto.categories

    return (
    <Layout>  
      <SchedaSingleProduct data = {dataProdotto} />
     {categorieProdotto && <Correlati categorieProdotto = {categorieProdotto} ArrayProdottiAnteprime = {ArrayProdottiAnteprime}/>}
    </Layout>
    
  )
}

export default SchedaProdotto