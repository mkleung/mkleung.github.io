import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/img'
import Home from '../components/home'
import Github from "../components/github"

const IndexPage = () => (
  <Layout>
    <div className="container home_container">
      <div className="columns is-vcentered is-multiline main-feature">
        <div className="column is-6">
          <Home />
          <p className="home_title">I'm Mike Leung, a full stack developer who loves to craft and maintain code that improves the life of people.</p>
          <br />
          <p><Link className="button is-primary greenButton" to="/contact">Contact Me</Link></p>
        </div>
        <div className="column is-6">
          <Image filename="home.png" />
        </div>
      </div>
    </div>


    <div className="container">
      <div className="columns is-vcentered is-multiline main-feature">
        <div className="column is-12">
        </div>
        <div className="column is-12">
        </div>
        <div className="column is-12">
        </div>
        <div className="column is-12">
          <h2 className="home_projects is-size-3 has-text-weight-bold">Projects</h2>
        </div>

        {/* Snaplifts */}
        <div className="column is-4">
          <div className="card">
            <div className="card-image">
              <Image filename="snaplifts.PNG" />
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Snaplifts - Gym Tracker
                <Github url="https://github.com/mkleung/snaplifts" />
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
                  <Github url="https://github.com/mkleung/todolist-vue" />
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
                  <Github url="https://github.com/mkleung/mkleung.github.io" />
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


    <SEO title="Home" />
  </Layout>
)
export default IndexPage