import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">

          <div className="column is-6 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">Hello World</h1>
            <h2 className="subtitle is-5 is-muted">I simplify the code</h2>
            <p>
                <a className="button cta rounded primary-btn raised" href="mailto:mpakleung@gmail.com">
                    Contact Me
                </a>
            </p>
          </div>

          <div className="column is-6">
            
                  <Image />
            
          </div>
          
        </div>
      </div>
    </div>
    <SEO title="Home" />

 



  </Layout>
)

export default IndexPage
