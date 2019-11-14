import React from "react"
import Layout from "../components/layout"
import Intro from '../components/intro'

class TestPage extends React.Component {

      constructor(props) {
            super(props);

      }


      render() {

            return (
                  <Layout navLocation="project">
                        <div className="container">

                              <Intro />


                        </div>

                  </Layout>
            )
      }
}
export default TestPage;