import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import SingleProduct from '../prodotti/singleProduct'

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
                gatsbyImageData(width: 280)
              }
            }
      
            categories {
              id
              name
            }
          }
        }
      }
    }
    `)


  const prodotti = data.odoo.products.products
  const prodottiPerCategoria = prodotti.filter((item) => (
    (item.categories !== null) &&
    (item.categories[0].name === "WOMEN")
  )
  )

  const setProdottiUniciPerCategoria = new Set(prodottiPerCategoria)
  const prodottiUniciPerCategoria = [...setProdottiUniciPerCategoria]
  const randomProdottiArray = [
    prodottiUniciPerCategoria[Math.floor(Math.random() * prodottiUniciPerCategoria.length)],
    prodottiUniciPerCategoria[Math.floor(Math.random() * prodottiUniciPerCategoria.length)],
    prodottiUniciPerCategoria[Math.floor(Math.random() * prodottiUniciPerCategoria.length)],
  ]
  console.log(randomProdottiArray);
  return (
    <section className="selezioneProdottiHome">
      {randomProdottiArray.map((prodotto) => {

        return (<div className="box-preview-prodotto" key={prodotto.id}>
          <SingleProduct prodotto={prodotto} />
        </div>)

      })}
    </section>
  )
}

export default ProdottiHome