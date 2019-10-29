import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/img'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="columns is-vcentered is-multiline main-feature">

        <div className="column is-6 landing-caption content">
          <h1 className="title is-bold is-spaced">Hello I'm Mike Leung. React / WordPress Web Developer</h1>


          <br />
          <p><Link className="button is-primary is-rounded greenButton" to="/projects">View Projects</Link></p>
        </div>

        <div className="column is-6">
          <Image filename="home.png" />
        </div>

      </div>
    </div>
    <SEO title="Home" />


  </Layout>
)
export default IndexPage
