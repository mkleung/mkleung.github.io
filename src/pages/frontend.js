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
                  pageNumber: 2
            }

      }

      increment = () => {
            this.setState({ pageNumber: this.state.pageNumber + 2 });
      }

      showAll = (size) => {
            this.setState({ pageNumber: size })
      }

      closeAll = () => {
            this.setState({ pageNumber: 2 })
      }

      render() {

            let incrementButton, showAllButton, closeAllButton;
            if (this.state.pageNumber < frontendData.length) {
                  incrementButton = <button className="button is-primary"
                        onClick={() => this.increment()}
                  >See more</button>;

                  showAllButton = <button className="button is-primary"
                        onClick={() => this.showAll(frontendData.length)}
                  >Show Everything</button>;
            }

            if (this.state.pageNumber >= frontendData.length) {
                  closeAllButton = <button className="button is-primary"
                        onClick={() => this.closeAll()}
                  >Close Everything</button>;
            }



            return (
                  <Layout navLocation="project">
                        <div className="hero-body">
                              <div className="container">
                                    <div className="columns is-vcentered is-multiline">
                                          <Projectsnav project="frontend" />
                                          <div className="column is-6"><ProjectsImage /></div>
                                          <div className="column is-12">
                                                <h2 className="has-text-weight-bold">100 Days of CSS</h2>
                                          </div>

                                          {frontendData.projects.map(item => {
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
                                                {showAllButton}
                                                {closeAllButton}
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