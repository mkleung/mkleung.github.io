import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Image from '../components/img'
import Github from "../components/github"
const ProjectPage = () => (
  <Layout navLocation="project">
    <div className="container">
      <div className="columns is-vcentered is-multiline">
        <div className="column is-12">
          <h2 className="is-size-3 has-text-weight-bold">100 Days Challenges</h2>
        </div>
        <Nav title="Projects" />



      </div>
    </div>
    <SEO title="Projects" />
  </Layout>
)
export default ProjectPage
