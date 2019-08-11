import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"



const BlogPage = () => {
    const data = useStaticQuery( graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
            }
        }
        }
    }
`)
    return (
        <Layout>
            <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered is-multiline">
                <div className="column is-6 landing-caption">
                    <h1 className="title is-1 is-bold is-spaced">Blog</h1>
                    {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                 
                        <Link to="">
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                            <br></br>
                        </Link>
                        
                    )
                })}
                </div>
                <div className="column is-6">

                </div>
                <div className="column is-6"></div>
                </div>
            </div>
            </div>
            <SEO title="Blog" />
        </Layout>
    )

}
   


export default BlogPage
