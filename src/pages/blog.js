import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsImage from "../components/img/projectsImage"
import Projectsnav from "../components/projectsnav"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }, limit: 1) {
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
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered is-multiline">
                        <Projectsnav project="blog" />
                        <div className="column is-6">
                            <ProjectsImage />
                        </div>
                        <div className="column is-10 landing-caption">

                            {data.allMarkdownRemark.edges.map((edge) => {
                                return (
                                    <Link to={`/blog/${edge.node.fields.slug}`} key={edge.node.frontmatter.title}>
                                        <article className="has-text-black">
                                            <p className="is-size-5 has-text-weight-bold"><i className="fas fa-mug-hot"></i> • {edge.node.frontmatter.title}</p>
                                            <br />
                                            <p className="">{edge.node.frontmatter.date} </p>
                                        </article>
                                        <br />
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
