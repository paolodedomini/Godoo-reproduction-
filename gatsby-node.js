const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const data = await graphql(`
    {
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
          attributeValues {
            htmlColor
            id
            name
            attributeId
          }
          price
          sku
          productVariants {
            id
            name
            image
            price
            attributeValues {
              htmlColor
              id
              name
              attributeId
            }
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



  const schedaProdotto = path.resolve(`./src/templates/schedaProdotto.jsx`)

  var slugify = require('slugify')

  data.data.odoo.products.products.forEach(scheda => {
    const schedatitle = slugify(scheda.name, {
      replacement: '_',  // replace spaces with replacement character, defaults to `-`
      remove: /[*+~.()'"!:@?]/g, // remove characters that match regex, defaults to `undefined`
    }) 
    createPage({
      // will be the url for the page
      path: 'schede/'+schedatitle,
      // specify the component template of your choice
      component: slash(schedaProdotto),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        data: scheda,
      },
    })
  })
}