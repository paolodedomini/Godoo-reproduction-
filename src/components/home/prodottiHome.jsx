import React from 'react'
import { useStaticQuery, graphql } from "gatsby"


function ProdottiHome() {

    const data = useStaticQuery(graphql`
    query ProdottiHome {
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

  return (
    <div>ProdottiHome</div>
  )
}

export default ProdottiHome