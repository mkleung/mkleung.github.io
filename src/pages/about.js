import React from "react"
import Layout from "../components/layout"
import AboutImage from "../components/img/aboutImage"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline main-feature">
          <div className="column is-6 landing-caption">
            <h1 className="title is-bold is-spaced">About Me</h1>
            <p>I have a Bachelors degree in <strong>Computer Science</strong> from Carleton University, Ottawa, Canada.</p>
            <br />
            <p>Outside of programming, I like taking landscape pictures with my camera, dreaming about the lands of Westeros <strong>Game of Thrones</strong> and enjoying outdoor activities such as hiking. (In the Gatineau Hills)</p>
            <br />
            <br />
            <p>
              <span className="has-margin-right-20"><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/mpakleung/"><i className="fab fa-codepen"></i></a></span>
              <span className="has-margin-right-20"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/morningmike/"><i className="fab fa-instagram"></i></a></span>
              <span><a target="_blank" rel="noopener noreferrer" href="https://github.com/mkleung"><i className="fab fa-github"></i></a></span>
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
