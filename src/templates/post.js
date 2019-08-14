import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
require("../components/prism-islaNueva.css")

export default ({ data }) => {
  const post = data.markdownRemark
    return (
      <Layout>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered is-multiline">
            <div className="column is-12">
                <Link className="button is-primary is-rounded" to="/blog"><i className="fas fa-chevron-left"></i>&nbsp;<span> Back</span></Link>
            </div>
            <div className="column is-12">
                <h1 className="title is-1 is-bold is-spaced">{post.frontmatter.title}</h1>
              </div>
              <div className="column is-10 landing-caption content">
              
              <p>{post.frontmatter.date}</p>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
              
            </div>
          </div>
        </div>
      </Layout>
    )

}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`