import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projectsnav from "../components/nav"
import Image from '../components/img'
import Project1 from "../components/img/projects/project1"
import Project2 from "../components/img/projects/project2"
import Project3 from "../components/img/projects/project3";
import Project4 from "../components/img/projects/project4"
import Project5 from "../components/img/projects/project5"
import Project6 from "../components/img/projects/project6";
import Project7 from "../components/img/projects/project7"
import Project8 from "../components/img/projects/project8"
import Project9 from "../components/img/projects/project9"
import Project10 from "../components/img/projects/project10"

const ReactPage = () => (
    <Layout navLocation="project">
        <div className="container">
            <div className="columns is-vcentered is-multiline main-feature">
                <Projectsnav project="React" />
            </div>
            <div className="columns is-vcentered is-multiline">
                <div className="column is-12">
                    <h2 className="is-size-3 has-text-weight-bold">Minor React Projects</h2>
                </div>

                {/* Project 10 */}
                <div className="column is-4">
                    <div className="card">
                        <div className="card-image">
                            <Image filename="projects/project10.PNG" />
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">Project 10 - Signup Router</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>
                                    <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/100daysofReact">Code</a>
                                    <a className="button greenButton is-rounded" rel="noopener noreferrer" target="_blank" href="https://45g3m.csb.app/">Demo</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 9 */}
                <div className="column is-4">
                    <div className="card">
                        <div className="card-image">
                          <Image filename="projects/project9.PNG" />
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
                            <Image filename="projects/project8.PNG" />
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
                            <Image filename="projects/project7.PNG" />
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
                            <Image filename="projects/project6.PNG" />
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
                            <Image filename="projects/project5.PNG" />
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
                            <Image filename="projects/project4.PNG" />
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
                            <Image filename="projects/project3.PNG" />
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
                            <Image filename="projects/project2.PNG" />
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
                            <Image filename="projects/project1.PNG" />
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

            </div>
        </div>
        <SEO title="Projects" />
    </Layout>
)
export default ReactPage
