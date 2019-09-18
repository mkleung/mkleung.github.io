import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Codepen from "react-codepen-embed";
import ProjectsImage from "../components/img/projectsImage"
import Projectsnav from "../components/nav"
import * as frontendData from "../assets/data/frontend.json";

class FrontEndPage extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  penNumber: 1
            }
      }
      selectPen = (index) => {
            this.setState({
                  penNumber: index
            })
      }
      render() {
            return (
                  <Layout navLocation="project">
                        <div className="hero-body">
                              <div className="container">
                                    <div className="columns is-vcentered is-multiline main-feature">
                                          <Projectsnav project="CSS" />

                                    </div>
                                    <div className="columns is-vcentered is-multiline">
                                          <div className="column is-12">
                                                <h2 className="has-text-weight-bold">100 Days of CSS</h2>
                                                <p>Here I try to challenge myself on <a target="_blank" rel="noopener noreferrer" href="https://100dayscss.com/">https://100dayscss.com/</a></p>
                                                <br />
                                          </div>
                                          <div className="column is-6 pen-container">
                                                <div className="pen-titles">
                                                      {frontendData.projects.map((item, index) => {
                                                            let activeClass = this.state.penNumber === item.id ? "active pen-title text-left" : "text-left pen-title";
                                                            return (
                                                                  <div onClick={() => this.selectPen(item.id)} className={activeClass} key={index}>{item.title}</div>
                                                            )
                                                      })}
                                                </div>
                                          </div>
                                          <div className="column is-6 has-text-centered pen-container">
                                                <div className="pens">
                                                      {frontendData.projects.map((item, index) => {
                                                            let penClass = this.state.penNumber === item.id ? "active pen" : "pen";
                                                            return (
                                                                  <div key={index} className={penClass}>
                                                                        <Codepen
                                                                              hash={item.hash}
                                                                              user="mpakleung"
                                                                              defaultTab="result"
                                                                              loader={() => <div>Loading...</div>}
                                                                        />
                                                                  </div>
                                                            )
                                                      })}
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <SEO title="Projects" />
                  </Layout>
            )
      }
}
export default FrontEndPage;