import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectsImage from "../components/images/projects"
import SEO from "../components/seo"
import Codepen from "react-codepen-embed";

const ProjectPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">Projects</h1>
  
        </div>

        <div className="column is-6">     
          <ProjectsImage />
        </div>
  
        </div>

      

      </div>
    </div>
    <div className="columns is-multiline">
          
          <div className="column">
              <Codepen
                hash="PMpYbp"
                user="mpakleung"
                height="1000px"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
          </div>
          
        </div>
  </Layout>
)

export default ProjectPage
