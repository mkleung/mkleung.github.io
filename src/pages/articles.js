import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const ArticlesPage = ({ location }) => {
    const [category, setCategory] = useState()

    useEffect(() => {
        if (location.state.category) {
            setCategory(location.state.category)
        }
        setCategory("All")
    }, []);

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
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
    const latestPosts = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.categories.includes("React Native"))

    return (
        <Layout navLocation="blog">
            <div className="container">
                <div className="columns is-vcentered is-multiline main-feature">
                    <div className="column is-10 landing-caption">
                        <h1 className="title is-bold is-spaced">Articles</h1>
                        <div className="buttons">
                            <button onClick={() => setCategory("React Native")} className={category === "React Native" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"}>React Native</button>
                            <button onClick={() => setCategory("React")} className={category === "React" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"}>React</button>
                            <button onClick={() => setCategory("Gatsby")} className={category === "Gatsby" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"}>Gatsby</button>
                        </div>

                        {category == "All" &&
                            <h2 className="title is-bold is-spaced is-size-5">Latest Posts ({(new Date().getFullYear())})</h2>
                        }

                        {category == "All" ? (

                            latestPosts.map((edge, index) => {
                                return (
                                    <Link to={`/blog/${edge.node.fields.slug}`} key={edge.node.frontmatter.title}>
                                        <div className="media-content">
                                            <div className="content">
                                                <p className="is-marginless">{edge.node.frontmatter.title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })

                        ) : (
                                filteredPosts.map((edge, index) => {
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
                                                    {edge.node.frontmatter.categories.includes("New") ?
                                                        <div className="newPostNotication notification is-warning is-size-7">
                                                            <p>New</p>
                                                        </div> : ""}
                                                </div>
                                            </article>
                                        </Link>
                                    )
                                })

                            )}
                    </div>
                </div>

            </div>
            <SEO title="Tutorials" />
        </Layout>
    )
}

export default ArticlesPage