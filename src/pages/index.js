import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/img'
import Home from '../components/home'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="columns is-vcentered is-multiline main-feature">
        <div className="column is-6">
          <Home />
          <p className="home_title">I'm Mike Leung and I'm a Javascript Developer with experience in WordPress and React</p>
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