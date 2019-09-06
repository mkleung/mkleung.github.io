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
                  pageNumber: 4
            }
      }

      increment = () => {
            this.setState({ pageNumber: this.state.pageNumber + 4 });
      }

      showAll = (size) => {
            this.setState({ pageNumber: size })
      }

      closeAll = () => {
            this.setState({ pageNumber: 4 })
      }

      render() {

            let incrementButton, showAllButton, closeAllButton;
            if (this.state.pageNumber < frontendData.projects.length) {
                  incrementButton = <button className="button is-primary is-rounded greenButton"
                        onClick={() => this.increment()}
                  >Load more</button>;

                  showAllButton = <button className="button is-primary is-rounded greenButton"
                        onClick={() => this.showAll(frontendData.length)}
                  >Show All</button>;
            }
            else {
                  closeAllButton = <button className="button is-primary is-rounded greenButton"
                        onClick={() => this.closeAll()}
                  >Close All</button>;
            }

            return (
                  <Layout navLocation="project">
                        <div className="hero-body">
                              <div className="container">
                                    <div className="columns is-vcentered is-multiline main-feature">
                                          <Projectsnav project="frontend" />
                                          <div className="column is-6"><ProjectsImage /></div>
                                    </div>
                                    <div className="columns is-vcentered is-multiline">
                                          <div className="column is-6">
                                                <h2 className="has-text-weight-bold">100 Days of CSS</h2>
                                          </div>
                                          <div className="column is-6 has-text-right">
                                                {showAllButton}
                                                {closeAllButton}
                                          </div>
                                          {frontendData.projects.slice(0, this.state.pageNumber).map(item => {
                                                return (
                                                      <div key={item.id} className="column is-6 css-1">
                                                            <Codepen
                                                                  hash={item.hash}
                                                                  user="mpakleung"
                                                                  defaultTab="result"
                                                                  loader={() => <div>Loading...</div>}
                                                            />
                                                      </div>
                                                )
                                          })}

                                          <div className="column is-12 has-text-centered	">
                                                {incrementButton}
                                          </div>

                                          <div className="column is-12 has-text-centered">

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