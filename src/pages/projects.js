import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectsImage from "../components/images/projects"
import DinnerImage from "../components/images/dinnerImg"
import RideauImage from "../components/images/rideauImg"
import AngularImage from "../components/images/angularImg"
import SEO from "../components/seo"
import Codepen from "react-codepen-embed";

const ProjectPage = () => (
  <Layout>
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline">
          <div className="column is-6 landing-caption">
            <h1 className="title is-1 is-bold is-spaced">Projects</h1>
            <Codepen
                hash="PMpYbp"
                user="mpakleung"
                height="1000px"
                defaultTab="result"
                loader={() => <div>Loading...</div>}
              />
        </div>

        <div className="column is-6">     
          <ProjectsImage />
        </div>

        <div className="column is-12">
         <h3>Javascript Projects</h3>
        </div>

        {/* Decision Maker */}
        <div className="column is-4">
          <div className="card">
              <div className="card-image">
                
                  <DinnerImage />
                
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
                  <p><a target="_blank" href="https://mkleung.github.io/decision-maker/">Demo</a></p>
                </div>
              </div>
            </div>
        </div>

        {/* Rideau Canal Ice */}
        <div className="column is-4">
          <div className="card">
              <div className="card-image">
                <RideauImage />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Rideau Canal Ice</p>
                  </div>
                </div>
                <div className="content">
                  <p>This app tells you the condition of Rideau Canal's ice skating. Closed for the summmer.</p>
                  <p>Built in React</p>
                  <p><a target="_blank" href="https://young-ridge-69555.herokuapp.com/">Demo</a></p>
                </div>
              </div>
            </div>
        </div>


      {/* Angular Multi Step */}
      <div className="column is-4">
          <div className="card">
              <div className="card-image">
                <AngularImage />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">AngularJs Multistep Form</p>
                  </div>
                </div>
                <div className="content">
                  <p>This app can be used to build a multistep survey.</p>
                  <p>Built in React</p>
                  <p><a target="_blank" href="https://codepen.io/mpakleung/full/vpmROQ">Demo</a></p>
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
  </Layout>
)

export default ProjectPage
