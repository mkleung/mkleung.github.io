import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HomeImage from "../components/images/home"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline">

          <div className="column is-6 landing-caption content">
            <h1 className="title is-1 is-bold is-spaced">Hello!</h1>
            <p>My name is Michael Leung I have five years of experience with WordPress Theme development and Laravel.</p>
            <p>I'm currently working with React and learning cool new technologies.</p>
            <br />
            <p>
                <Link className="button is-primary "  to="/contact">Contact Me</Link>
            </p>
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
