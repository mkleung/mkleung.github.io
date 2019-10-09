import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/img'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="columns is-vcentered is-multiline main-feature">

        <div className="column is-6 landing-caption content">
          <h1 className="title is-bold is-spaced">Hello I'm Mike</h1>

          <ul>
            <li>I am a Software Developer.</li>
            <li>I have a Comp. Sci degree from Carleton University.</li>
            <li>I live in Ottawa, Canada.</li>
          </ul>
          <p>I am proficient in:</p>
          <ul>
            <li>Javascript frameworks (ReactJs)</li>
            <li>WordPress Theme development.</li>
            <li>Laravel and Node.Js</li>
          </ul>

          <br />
          <p><Link className="button is-primary is-rounded greenButton" to="/projects">View Projects</Link></p>
        </div>

        <div className="column is-6">
          <Image filename="home.png" />
        </div>

      </div>
    </div>
    <SEO title="Home" />


  </Layout>
)
export default IndexPage
