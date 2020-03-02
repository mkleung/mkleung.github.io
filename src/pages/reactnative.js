import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
// import Image from '../components/img'

const ReactNative = () => (
  <Layout navLocation="project">
    <div className="container">
      <div className="columns is-vcentered is-multiline">
        <div className="column is-12">
          <h2 className="is-size-3 has-text-weight-bold">100 Days of React Native Challenge</h2>
        </div>
        <Nav title="React Native" />

        {/* Project 5 - Number Guess Game */}
        <div className="column is-4">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Project 5 - Number Game</p>
                </div>
              </div>
              <div className="content">
                <div className="card-buttons">
                  <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://snack.expo.io/@mpakleung/project-05---number-guess-game">Code</a>
                  <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="https://tinyurl.com/y4n7lxfv">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 - To Do */}
        <div className="column is-4">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Project 4 - To Do List</p>
                </div>
              </div>
              <div className="content">
                <div className="card-buttons">
                  <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://snack.expo.io/@mpakleung/project-04---to-do">Code</a>
                  <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="http://tiny.cc/ep9oez">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Project 3 - Stopwatch */}
        <div className="column is-4">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Project 3 - StopWatch</p>
                </div>
              </div>
              <div className="content">
                <div className="card-buttons">
                  <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://snack.expo.io/@mpakleung/4836d0">Code</a>
                  <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="https://tinyurl.com/y5wz6uwa">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Project 1 */}
        <div className="column is-4">
          <div className="card">
            {/* <div className="card-image">
                            <Image filename="project31.png" />
                        </div> */}
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Project 1 - Redux Counter</p>
                </div>
              </div>
              <div className="content">
                <div className="card-buttons">
                  <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://snack.expo.io/@mpakleung/project-01---redux-counter">Code</a>
                  <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="http://tiny.cc/qmmmdz">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
    <SEO title="Mobile" />
  </Layout>
)
export default ReactNative
