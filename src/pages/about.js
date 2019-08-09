import React from "react"
import Layout from "../components/layout"
import AboutImage from "../components/images/aboutImage"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline">
          <div className="column is-6 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">About Me</h1>
            <p>I have a degree in Computer Science from Carleton University, Ottawa.</p>
            <br />
            <p>Outside of programming, I like photography, rewatching Game of Thrones and enjoy outdoor activities like hiking. (At least I try but always trail off)</p>
            <br />
            <br />
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
    <SEO title="About" />
  </Layout>
)

export default AboutPage
