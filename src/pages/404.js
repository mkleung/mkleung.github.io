import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Four from '../components/404/404.js'

const NotFoundPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline">
          <div className="column is-4 is-offset-4 has-text-centered">
            <Link to="/"><Four /></Link>
          </div>
          <div className="column is-6 is-offset-3 has-text-centered">
            <h2 className="title is-1 is-bold is-spaced">404! Not Found!</h2>
          </div>
        </div>
      </div>
    </div>
    <SEO title="404" />
  </Layout>
)

export default NotFoundPage