import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Codepen from "react-codepen-embed";
import Projectsnav from "../components/nav"
import * as frontendData from "../assets/data/frontend.json";
import Day03 from "../components/codepen/day03"
import Day59 from "../components/codepen/day59"
import Day62 from "../components/codepen/day62"
import Day95 from "../components/codepen/day95"

class Test extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  penNumber:"03"
            }
      }
      select = (index) => {
            this.setState({
                  penNumber: index
            })
      }

      render() {

            return (
                  <Layout navLocation="project">
                        <div className="container">
                              <div className="columns is-vcentered is-multiline main-feature">
                                    <Projectsnav project="CSS" />
                              </div>
                              <div className="columns is-vcentered is-multiline">
                                    <div className="column is-12">
                                          <h2 className="is-size-3 has-text-weight-bold">Minor Projects in CSS</h2>
                                    </div>
                                    <div className="column is-6 pen-container">
                                        <div className="pen-titles">
                                            <div onClick={() => this.select("03")} className=" pen-title">3 - Pyramids</div>
                                            <div onClick={() => this.select("59")} className=" pen-title">59 - Slide Trasitions</div>
                                            <div onClick={() => this.select("62")} className=" pen-title">62 - Price Chart</div>
                                            <div onClick={() => this.select("95")} className=" pen-title">95 - Pig</div>
                                        </div>
                                    </div>
                                    <div className="column is-6 has-text-centered pen-container">
                                    {(() => {
                                        switch(this.state.penNumber) {
                                        case '03':
                                            return  <Day03 />;
                                        case '59':
                                            return <Day59 />;
                                        case '62':
                                            return <Day62 />;
                                        case '95':
                                            return <Day95 />;
                                        default:
                                            return null;
                                        }
                                    })()}
                     </div>
                              </div>
                        </div>
                        <SEO title="Projects" />
                  </Layout>
            )
      }
}
export default Test;