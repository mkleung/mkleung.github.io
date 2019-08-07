import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AboutImage from "../components/images/about"
import SEO from "../components/seo"


const AboutPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">

          <div className="column is-6 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">About Me</h1>
            <h2 className="subtitle is-5 is-muted">I'm a web developer residing in Ottawa, Canada.</h2>
            <h2 className="subtitle is-5 is-muted">I have five years of experience with WordPress Theme development and Laravel. I'm currently working with React.</h2>
            <p></p>
            <p></p>
            <p>
              <span className="has-margin-right-20"><a target="_blank"  href="https://codepen.io/mpakleung/"><i className="fab fa-codepen"></i></a></span>
              <span className="has-margin-right-20"><a  target="_blank"  href="https://www.instagram.com/morningmike/"><i className="fab fa-instagram"></i></a></span>
              <span><a  target="_blank"  href="https://github.com/mkleung"><i className="fab fa-github"></i></a></span>
            </p>
      
          </div>

          <div className="column is-6">
            <AboutImage />
          </div>
          
        </div>
      </div>
    </div>
    <SEO title="Home" />

  </Layout>
)

export default AboutPage
