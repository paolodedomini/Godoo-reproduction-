import React from 'react'
import SchedaSingleProduct from '../components/schedaProdotto/schedaSingleProduct'
import Layout from '../components/layout'
function SchedaProdotto(props) {
  
  const dataTest = props.pageContext.data
    return (
    <Layout>  
      <SchedaSingleProduct data = {dataTest} />
    </Layout>
    
  )
}

export default SchedaProdotto