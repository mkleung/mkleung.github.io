import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  const categories = post.frontmatter.categories.filter((item) => {
    return item !== "All"
  })
  return (
    <Layout navLocation="blog">
      <div className="container">
        <div className="columns is-vcentered is-multiline">

          <div className="column is-10">
            <h1 className="title is-size-3">{post.frontmatter.title}</h1>
            <p className="is-size-6"><i>Published: {post.frontmatter.date}</i></p>
          </div>
          <div className="column is-10">
            <div class="buttons">
              {
                categories.map((item) => {
                  return (
                    <Link className="button is-primary is-outlined" to="articles" state={{ category: item }}>{item}</Link>
                  )
                }
                )
              }
            </div>
          </div>
          <div className="column is-10 landing-caption content">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <div className="column is-12">
            <Link className="button is-primary is-rounded greenButton" to="/articles"><i className="fas fa-chevron-left"></i>&nbsp;<span> Back</span></Link>
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
        categories
      }
    }
  }
`