import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Jumbo from "../components/home/jumbo"
import Layout from "../components/layout"
import CenterHome from "../components/home/centerHome"
import ProdottiHome from "../components/home/prodottiHome"
import CategorieHome from "../components/home/categorie"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Jumbo />
    <CenterHome />
    <ProdottiHome />
    <CategorieHome />
  </Layout>
)

export default IndexPage
