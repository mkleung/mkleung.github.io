import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Codepen from "react-codepen-embed";

const ProjectPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline">
          <div className="column is-6 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">Projects</h1>
            <p><Link to="/projects">Javascript</Link></p>
            <p><Link to="/frontend">CSS</Link></p>
        </div>

        <div className="column is-6">     

        </div>

        <div className="column is-12">
         <h2 className="has-text-weight-bold">Javascript Projects</h2>
        </div>

        {/* Decision Maker */}
        <div className="column is-6">
          <div className="card">
              <div className="card-image">

              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">What's For Dinner</p>
                  </div>
                </div>
                <div className="content">
                  <p>What's for Dinner is a app that makes a food decision for you from a list of choices</p>
                  <p>Built in React</p>
                  <p><a className="button is-primary is-rounded" rel="noopener noreferrer" target="_blank" href="https://mkleung.github.io/decision-maker/">Demo</a></p>
                </div>
              </div>
            </div>
        </div>

        {/* Rideau Canal Ice */}
        <div className="column is-6">
          <div className="card">
              <div className="card-image">

              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Rideau Canal Ice Skating</p>
                  </div>
                </div>
                <div className="content">
                  <p>This app tells you the condition of Rideau Canal's ice skating. Closed for the summmer.</p>
                  <p>Built in React</p>
                  <p><a className="button is-primary is-rounded" rel="noopener noreferrer" target="_blank" href="https://young-ridge-69555.herokuapp.com/">Demo</a></p>
                </div>
              </div>
            </div>
        </div>


      {/* Angular Multi Step */}
      <div className="column is-6">
          <div className="card">
              <div className="card-image">
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">AngularJs Multistep Form</p>
                  </div>
                </div>
                <div className="content">
                  <p>This app can be used to build a multistep survey.</p>
                  <p>Built in AngularJs</p>
                  <p><a className="button is-primary is-rounded" target="_blank" rel="noopener noreferrer" href="https://codepen.io/mpakleung/full/vpmROQ">Demo</a></p>
                </div>
              </div>
            </div>
        </div>
  
        </div>

      

      </div>
    </div>
    <div className="columns is-multiline">
          
          <div className="column">
            
          </div>
          
        </div>

        <SEO title="Projects" />
  </Layout>
)

export default ProjectPage
