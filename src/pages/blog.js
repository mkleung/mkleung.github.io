import React, { useState }  from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/img'
import Img from "gatsby-image"
const BlogPage = () => {

    const [category, setCategory] = useState("All")


    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC },
            )     
                {
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

    const handleCategory = (text) => {
        setCategory(text)
    }

    const allPosts = data.allMarkdownRemark.edges;
    

    const filteredPosts = allPosts.filter(edge => edge.node.frontmatter.categories.includes(category))

    return (
        <Layout navLocation="blog">
            <div className="container">
                <div className="columns is-vcentered is-multiline main-feature">
                    <div className="column is-12 landing-caption">
                        <h1 className="title is-bold is-spaced">Blog</h1>
                        
                        <div className="buttons">
                            <button onClick={() => handleCategory("All")} className="button is-warning is-light">All</button>
                            <button onClick={() => handleCategory("Firebase")} className="button is-info is-light">Firebase</button>
                            <button onClick={() => handleCategory("ReactNative")} className="button is-danger is-light">React-Native</button>
                            <button onClick={() => handleCategory("Gatsby")} className="button is-success is-light">Gatsby</button>
                        </div>

                        <p>{category}</p>

                        {filteredPosts.map((edge) => {
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
                                                <p><strong>{edge.node.frontmatter.title}</strong><br /> <small>{edge.node.frontmatter.date}</small></p>
                                                <p>{edge.node.frontmatter.categories}</p>
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