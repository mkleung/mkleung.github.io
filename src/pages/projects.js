import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsImage from "../components/img/projectsImage"
import Projectsnav from "../components/nav"

import Rideauimage from "../components/img/rideauImage"
import Dinnerimage from "../components/img/dinnerImage"
import Angularimage from "../components/img/angularImage"

import Project1 from "../components/img/projects/project1"
import Project2 from "../components/img/projects/project2"
import Project3 from "../components/img/projects/project3";
import Project4 from "../components/img/projects/project4"
import Project5 from "../components/img/projects/project5"
import Project6 from "../components/img/projects/project6";
import Project7 from "../components/img/projects/project7"
import Project8 from "../components/img/projects/project8"
import Project9 from "../components/img/projects/project9"

const ProjectPage = () => (
  <Layout navLocation="project">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered is-multiline">
          <Projectsnav project="project" />
          <div className="column is-6"><ProjectsImage /></div>

          <div className="column is-12">
            <h2 className="has-text-weight-bold">100 Days of React</h2>
          </div>


          {/* Project 9 */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Project9 />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Project 9 - Snake Game</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/100daysofReact">Code</a>
                    <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="https://qch74.csb.app/">Demo</a>
                  </p>

                </div>
              </div>
            </div>
          </div>


          {/* Project 8 */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Project8 />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Project 8 - Map App</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/100daysofReact">Code</a>
                    <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="https://7s9cd.csb.app//">Demo</a>
                  </p>

                </div>
              </div>
            </div>
          </div>


          {/* Project 7 */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Project7 />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Project 7 - Tic Tac Toe</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/100daysofReact">Code</a>
                    <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="https://jyy84.csb.app/">Demo</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Project6 />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Project 6 - Quiz</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/100daysofReact">Code</a>
                    <a className="button is-rounded greenButton" rel="noopener noreferrer" target="_blank" href="https://bhm6v.csb.app/">Demo</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Project5 />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">5 - To Do List</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/100daysofReact">Code</a>
                    <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="https://ri74q.csb.app/">Demo</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Project4 />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Project 4 - Calculator</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/100daysofReact">Code</a>
                    <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="https://mzztr.csb.app/">Demo</a>
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* Project 3 */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Project3 />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Project 3- Calendar</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/100daysofReact">Code</a>
                    <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="https://193rm.codesandbox.io/">Demo</a>
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* Project 2 */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Project2 />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Project 2 - Stopwatch</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/100daysofReact">Code</a>
                    <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="https://6fr6p.codesandbox.io/">Demo</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 1 */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Project1 />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Project 1 - Button Counter</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/100daysofReact">Code</a>
                    <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="https://t2f9h.codesandbox.io/">Demo</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------- */}

          <div className="column is-12">
            <h2 className="has-text-weight-bold">Older Projects</h2>
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
          <div className="column is-4">
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
          </div>

          {/* Angular Multi Step */}
          <div className="column is-4">
            <div className="card">
              <div className="card-image">
                <Angularimage />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">AngularJs Multistep Form</p>
                  </div>
                </div>
                <div className="content">
                  <p><a className="button is-rounded greenButton" target="_blank" rel="noopener noreferrer" href="https://codepen.io/mpakleung/full/vpmROQ">Demo</a></p>
                </div>
              </div>
            </div>
          </div>

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
