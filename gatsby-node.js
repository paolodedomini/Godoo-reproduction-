exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
/* const fetch = require('node-fetch');
const NODE_TYPE = 'prodotti'
exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) =>{
  const {createNode} = actions 
  const response = await fetch('https://fakestoreapi.com/products')
  const json = await response.json()
  const products = json


  products.forEach((node, index)=>{
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${node.id}}`),
      parent: null,
      children: [],
      internal:{
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node)
      }
  
    })

  })
  return
}



 */