import React from "react"
import { Link } from "gatsby"
import Codepen from "react-codepen-embed";
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsImage from "../components/img/projectsImage"

const UIPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline">
          <div className="column is-6 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">Projects</h1>
            <p><Link to="/projects">Javascript</Link></p>
            <p><Link to="/frontend">CSS</Link></p>
            <p><Link  className="green" to="/ui">User Interface</Link></p>
        </div>

        <div className="column is-6">     
          <ProjectsImage />
        </div>

        <div className="column is-12">
         <h2 className="has-text-weight-bold">UI Projects</h2>
        </div>

    {/* Gradient Website */}
    <div className="column is-12">
        <Codepen
              hash="MWgKrgb"
              user="mpakleung"
              defaultTab="result"
              loader={() => <div>Loading...</div>}
            />
    </div>

        
    {/* Login Form */}
    <div className="column is-12">
        <Codepen
              hash="LwwpKb"
              user="mpakleung"
              defaultTab="result"
              loader={() => <div>Loading...</div>}
            />
    </div>
      

  
        </div>
      </div>
    </div>


        <SEO title="Projects" />
  </Layout>
)

export default UIPage
