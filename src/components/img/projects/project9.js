import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Project9 = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/projects/project9.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Project9