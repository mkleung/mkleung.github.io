import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout navLocation="blog">
      <div className="container">
        <div className="columns is-vcentered is-multiline">
          <div className="column is-12">
            <Link className="button is-primary is-rounded greenButton" to="/blog"><i className="fas fa-chevron-left"></i>&nbsp;<span> Back</span></Link>
          </div>
          <div className="column is-12">
            <h1 className="title is-size-3">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <hr style={{ height: ".4px" }} />
          </div>
          <div className="column is-10 landing-caption content">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <div className="column is-12">
            <Link className="button is-primary is-rounded greenButton" to="/blog"><i className="fas fa-chevron-left"></i>&nbsp;<span> Back</span></Link>
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