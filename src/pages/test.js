import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


import { CSSTransition } from "react-transition-group";

class Test extends React.Component {

      constructor(props) {
            super(props);
      
      }

  
      render() {

            return (
                  <Layout navLocation="project">
                        <div className="container">
                        
                              <div className="columns is-vcentered is-multiline">
                                    <div className="column is-12">
                                          <h2 className="is-size-3 has-text-weight-bold">Minor Projects in CSS</h2>
                                    </div>

                                    <CSSTransition

                                    in={true}
                                    appear={true}
                                    timeout={500}
                                    classNames="fade"
                                    >
                                    <div className="test"></div>
                                    </CSSTransition>

                       


                                
                              </div>
                        </div>
                        <SEO title="Projects" />
                  </Layout>
            )
      }
}
export default Test;