import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projectsnav from "../components/nav"
import Dinnerimage from "../components/img/dinnerImage"
import Atomicimage from "../components/img/atomicImage"
import Snapliftsimage from "../components/img/snapliftsImage"

const ProjectPage = () => (
  <Layout navLocation="project">
    <div className="container">
      <div className="columns is-vcentered is-multiline main-feature">
        <Projectsnav project="Projects" />
      </div>
      <div className="columns is-vcentered is-multiline">
        <div className="column is-12">
          <h2 className="has-text-weight-bold">Full Stack Projects</h2>
          <p>This is a combination of vuejs, angularjs and react projects with a backend of firebase or Laravel.</p>
        </div>

        {/* Snaplift */}
        <div className="column is-4">
          <div className="card">
            <div className="card-image">
              <Snapliftsimage />
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Snaplifts - Gym Tracker</p>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Firebase</li>
                </ul>
                <p>
                  <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/snaplifts">Code</a>
                  <a className="button is-rounded greenButton" rel="noopener noreferrer" target="_blank" href="https://mkleung.github.io/snaplifts/">Demo</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Atomic To Do List */}
        <div className="column is-4">
          <div className="card">
            <div className="card-image">
              <Atomicimage />

            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Atomic To Do</p>
                <ul>
                  <li>Vue</li>
                  <li>Laravel</li>
                  <li>Heroku</li>
                </ul>
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
              <div className="content">
                <p className="title is-4">What's For Dinner</p>
                <ul>
                  <li>React</li>
                  {/* <li> </li>
                    <li> </li> */}
                </ul>
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
                <ul>
                  <li>Gatsby</li>
                  <li>GraphQL</li>
                  <li>Netlify</li>
                </ul>
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
    <SEO title="Projects" />
  </Layout>
)
export default ProjectPage
