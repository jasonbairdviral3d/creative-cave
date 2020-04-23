import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"
import Work from "../components/work"
import Carousel from "../components/carousel"
import Services from "../components/services"
import Blogs from "../components/blogs"
import Social from "../components/social"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Jumbotron />
      <Work />
      <Carousel />
      <Services />
      <Blogs />
      <Social />
    </Layout>
  )
}

export default IndexPage
