import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPage = () => {
    const [category, setCategory] = useState("All")
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString: "MMMM Do, YYYY")
                            categories
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

    const filteredPosts = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.categories.includes(category))

    return (
        <Layout navLocation="blog">
            <div className="container">
                <div className="columns is-vcentered is-multiline main-feature">
                    <div className="column is-10 landing-caption">
                        <h1 className="title is-bold is-spaced">Blog</h1>
                        <div className="buttons">
                            <button onClick={() => setCategory("All")} className={category === "All" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"}>All</button>
                            <button onClick={() => setCategory("React")} className={category === "React" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"}>React</button>
                            <button onClick={() => setCategory("ReactNative")} className={category === "ReactNative" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"}>React-Native</button>
                            <button onClick={() => setCategory("Gatsby")} className={category === "Gatsby" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"}>Gatsby</button>
                        </div>

                        {filteredPosts.map((edge, index) => {
                            return (
                                <Link to={`/blog/${edge.node.fields.slug}`} key={edge.node.frontmatter.title}>
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image blog-image is-64x64">
                                                <Img fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p className="is-marginless"><strong>{edge.node.frontmatter.title}</strong></p>
                                                <p className="is-size-7"><i>{edge.node.frontmatter.date}</i></p>
                                            </div>
                                        </div>
                                        <div className="media-right">
                                            {edge.node.frontmatter.title === "React Native Series Part 3/5 - Access the Camera" ?
                                                <div className="newPostNotication notification is-warning is-size-7">
                                                    <p>{edge.node.frontmatter.categories.includes("New") ? "New" : ""}</p>
                                                </div> : ''}
                                        </div>
                                    </article>
                                </Link>
                            )
                        })}
                    </div>
                </div>

            </div>
            <SEO title="Blog" />
        </Layout>
    )
}

export default BlogPage