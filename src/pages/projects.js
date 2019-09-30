import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projectsnav from "../components/nav"
import Image from '../components/img'
const ProjectPage = () => (
  <Layout navLocation="project">
    <div className="container">
      <div className="columns is-vcentered is-multiline main-feature">
        <Projectsnav project="Projects" />
      </div>
      <div className="columns is-vcentered is-multiline">
        <div className="column is-12">
          <h2 className="is-size-3 has-text-weight-bold">Major Full Stack Projects</h2>
        </div>

        {/* Snaplift */}
        <div className="column is-4">
          <div className="card">
            <div className="card-image">
              <Image filename="snaplifts.PNG" />
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Snaplifts - Gym Tracker</p>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Firebase</li>
                </ul>
                <div className="card-buttons">
                  <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/snaplifts">Code</a>
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
                <p className="title is-4">Atomic To Do</p>
                <ul>
                  <li>Vue</li>
                  <li>Laravel</li>
                  <li>Heroku</li>
                </ul>
                <div className="card-buttons">
                  <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/todolist-vue">Code</a>
                  <a className="button is-rounded greenButton" rel="noopener noreferrer" target="_blank" href="https://todolistvuejs.herokuapp.com/">Demo</a>
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
