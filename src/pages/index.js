import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Jumbo from "../components/home/jumbo"
import Layout from "../components/layout"
import CenterHome from "../components/home/centerHome"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Jumbo />
    <CenterHome />
  </Layout>
)

export default IndexPage
