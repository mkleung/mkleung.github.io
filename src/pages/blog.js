import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/img'
const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "MMMM Do, YYYY")
                    }
                    fields {
                        slug
                      }
            }
        }
        }
    }
`)
    return (
        <Layout navLocation="blog">
            <div className="container">
                <div className="columns is-vcentered is-multiline main-feature">
                    <div className="column is-6 landing-caption">
                        <h1 className="title is-bold is-spaced">Blog</h1>
                        {data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <Link to={`/blog/${edge.node.fields.slug}`} key={edge.node.frontmatter.title}>
                                    <article>
                                        <p className="title is-size-5">
                                            {edge.node.frontmatter.title}
                                        </p>
                                        <p>{edge.node.frontmatter.date} </p>
                                    </article>
                                    <br />
                                </Link>
                            )
                        })}
                    </div>
                    <div className="column is-6">
                        <Image filename="blog.png" />
                    </div>
                </div>

            </div>
            <SEO title="Blog" />
        </Layout>
    )
}

export default BlogPage