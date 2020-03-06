import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Image from '../components/img'
import Github from "../components/github"

import { graphql, useStaticQuery, Link } from 'gatsby'

const ProjectPage = () => (
  <Layout navLocation="project">
    <div className="container">
      <div className="columns is-vcentered is-multiline">
        <div className="column is-12">
          <h2 className="is-size-3 has-text-weight-bold">100 Days Code Challenges</h2>
        </div>
        <Nav title="Projects" />

        <div className="column is-12">
          <h2 className="title is-bold is-spaced is-size-5">Latest Challenge ({(new Date().getFullYear())})</h2>

          <Link to="/android">
            <div className="media-content">
              <div className="content">
                <p className="is-marginless">100 Days of Android</p>
              </div>
            </div>
          </Link>


        </div>

      </div>
    </div>
    <SEO title="Projects" />
  </Layout>
)
export default ProjectPage
