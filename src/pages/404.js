import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const NotFoundPage = () => (
 <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">

          <div className="column is-5 is-offset-1 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">Hello World</h1>
            <h2 className="subtitle is-5 is-muted">I simplify the code</h2>
            <p>
                <a className="button cta rounded primary-btn raised">
                    Contact Me
                </a>
            </p>
          </div>

          <div className="column is-5 is-offset-1">
              <figure className="image is-4by3">
        
              </figure>
          </div>
          
        </div>
      </div>
    </div>
    <SEO title="Home" />

 



  </Layout>
)

export default NotFoundPage
