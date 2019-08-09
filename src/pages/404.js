import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import FourImage from "../components/images/fourImage"
import SEO from "../components/seo"

const NotFoundPage = () => (
 <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">404! Page Not Found!</h1>
            <p>Return back to the <Link to="/">homepage</Link></p>
          </div>
          <div className="column is-6">
            <FourImage />
          </div>
        </div>
      </div>
    </div>
    <SEO title="404" />
  </Layout>
)

export default NotFoundPage
