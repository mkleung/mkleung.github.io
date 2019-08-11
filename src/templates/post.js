import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

import SEO from "../components/seo"

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "MMMM Do, YYYY")
            }
            html
        }
    }
`

const PostPage = (props) => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline">
        <div className="column is-12">
            <Link className="button is-primary is-rounded" to="/blog"><i className="fas fa-chevron-left"></i>&nbsp;<span> Back</span></Link>
          </div>
          <div className="column is-12 landing-caption content">
            <h1 className="title is-1 is-bold is-spaced">{props.data.markdownRemark.frontmatter.title}</h1>
            <p className="is-italic">{props.data.markdownRemark.frontmatter.date}</p>
            <br />
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
           
          </div>
          
        </div>
      </div>
    </div>

  </Layout>
)

export default PostPage
