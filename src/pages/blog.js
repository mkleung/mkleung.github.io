import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/img'
import Img from "gatsby-image"
const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 100) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "MMMM Do, YYYY")
                        featuredImage {
                            childImageSharp {
                              fluid(maxWidth: 100) {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
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
                    <div className="column is-12 landing-caption">
                        <h1 className="title is-bold is-spaced">Blog</h1>
                        {data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <Link to={`/blog/${edge.node.fields.slug}`} key={edge.node.frontmatter.title}>
                                    <article class="media">
                                        <div class="media-left">
                                            <figure className="image blog-image is-64x64">
                                            <Img fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <div class="content">
                                                <p>
                                                <strong>{edge.node.frontmatter.title}</strong><br /> <small>{edge.node.frontmatter.date}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="column is-6">
                        {/* <Image filename="blog.png" /> */}
                    </div>
                </div>

            </div>
            <SEO title="Blog" />
        </Layout>
    )
}

export default BlogPage