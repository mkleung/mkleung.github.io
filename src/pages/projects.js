import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsImage from "../components/img/projectsImage"
import Projectsnav from "../components/nav"

import Rideauimage from "../components/img/rideauImage"
import Dinnerimage from "../components/img/dinnerImage"
import Angularimage from "../components/img/angularImage"
import Atomicimage from "../components/img/atomicImage"

const ProjectPage = () => (
  <Layout navLocation="project">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline main-feature">
          <Projectsnav project="Portfolio" />
          <div className="column is-6"><ProjectsImage /></div>
        </div>
        <div className="columns is-vcentered is-multiline">


          <div className="column is-12">
            <h2 className="has-text-weight-bold">Full Stack Projects</h2>
            <p>This is a combination of vuejs, angularjs and react projects with a backend of firebase or Laravel.</p>
          </div>

          {/* Atomic To Do List */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Atomicimage />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Atomic To Do</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/todolist-vue">Code</a>
                    <a className="button is-rounded greenButton" rel="noopener noreferrer" target="_blank" href="https://todolistvuejs.herokuapp.com/">Demo</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Maker */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Dinnerimage />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">What's For Dinner</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/decision-maker">Code</a>
                    <a className="button is-rounded greenButton" rel="noopener noreferrer" target="_blank" href="https://mkleung.github.io/decision-maker/">Demo</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Rideau Canal Ice */}
          {/* <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Rideauimage />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Rideau Canal Ice Skating</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/Rideauapp-nodejs">Code</a>
                    <a className="button is-rounded greenButton" rel="noopener noreferrer" target="_blank" href="https://young-ridge-69555.herokuapp.com/">Demo</a></p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Mike Theme */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Mike Gatsby Theme</p>
                  </div>
                </div>
                <div className="content">
                  <p>This is a personal theme used to host projects.</p>
                  <p>Built with Gatsby, React, Bulma and Netlify</p>
                  <p>
                    <a className="button is-secondary is-rounded" target="_blank" rel="noopener noreferrer" href="https://github.com/mkleung/mkleung.github.io">Code</a>
                    <a className="button is-rounded greenButton" target="_blank" rel="noopener noreferrer" href="https://www.mikeleung.ca/">Demo</a>
                  </p>
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
