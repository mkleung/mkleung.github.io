import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeImage from "../components/img/homeImage"

const IndexPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline main-feature">
          <div className="column is-6 landing-caption content">
            <h1 className="title is-bold is-spaced">Hello!</h1>
            <p>My name is Michael Leung and I have five years of experience in <strong>WordPress</strong> theme development and <strong>Laravel</strong>.</p>
            <p>I'm currently working with <strong>React</strong>.</p>
            <br />
            <p><Link className="button is-primary is-rounded greenButton" to="/contact">Contact Me</Link></p>
          </div>
          <div className="column is-6">
            <HomeImage />
          </div>
        </div>
      </div>
    </div>
    <SEO title="Home" />
  </Layout>
)
export default IndexPage
