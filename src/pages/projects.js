import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projectsnav from "../components/projectsNav"
import Image from '../components/img'
import Githubicon from "../components/githubicon"
const ProjectPage = () => (
  <Layout navLocation="project">
    <div className="container">
      <div className="columns is-vcentered is-multiline">
        <div className="column is-12">
          <h2 className="is-size-3 has-text-weight-bold">Major Full Stack Projects</h2>
        </div>
        <Projectsnav project="Projects" />
        
        {/* Snaplifts */}
        <div className="column is-4">
          <div className="card">
            <div className="card-image">
              <Image filename="snaplifts.PNG" />
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Snaplifts - Gym Tracker
                <Githubicon url="https://github.com/mkleung/snaplifts" />
                </p>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Firebase</li>
                </ul>
                <div className="card-buttons">
                  <a className="button is-rounded greenButton" rel="noopener noreferrer" target="_blank" href="https://mkleung.github.io/snaplifts/">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Atomic To Do List */}
        <div className="column is-4">
          <div className="card">
            <div className="card-image">
              <Image filename="atomic.PNG" />

            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">To Do List
                  <Githubicon url="https://github.com/mkleung/todolist-vue" />
                </p>
                
                <ul>
                  <li>Vue</li>
                  <li>Laravel</li>
                  <li>Heroku</li>
                </ul>
                <div className="card-buttons">
                  <a className="button is-rounded greenButton" rel="noopener noreferrer" target="_blank" href="https://todolistvuejs.herokuapp.com/">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Site */}
        <div className="column is-4">
          <div className="card">
            <div className="card-image">
              <Image filename="personal.PNG" />

            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Personal Site
                  <Githubicon url="https://github.com/mkleung/mkleung.github.io" />
                </p>
                <ul>
                  <li>Gatsby React Framework</li>
                  <li>GraphyQL</li>
                  <li>Netlify</li>
                </ul>
                <div className="card-buttons">
                  <a className="button is-rounded greenButton" rel="noopener noreferrer" target="_blank" href="https://mikeleung.ca">Demo</a>
                </div>
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
