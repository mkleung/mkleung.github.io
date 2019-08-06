import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HomeImage from "../components/images/home"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">

          <div className="column is-6 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">Hello!</h1>
            <h2 className="subtitle is-5 is-muted">I simplify the code</h2>
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
