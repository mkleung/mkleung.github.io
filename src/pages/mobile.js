import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projectsnav from "../components/nav"
import Image from '../components/img'

const MobilePage = () => (
  <Layout navLocation="project">
    <div className="container">
      <div className="columns is-vcentered is-multiline main-feature">
        <Projectsnav project="Mobile" />
      </div>
      <div className="columns is-vcentered is-multiline">
        <div className="column is-12">
          <h2 className="is-size-3 has-text-weight-bold">100 Days of React Native Challenge (Mobile Development)</h2>
        </div>

        {/* Project 12 */}
        <div className="column is-4">
          <div className="card">
            {/* <div className="card-image">
                            <Image filename="project31.png" />
                        </div> */}
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Project 1 - Redux Counter</p>
                  <ul>
                    <li>React Native</li>
                    <li>Redux</li>
                    <li>Expo</li>
                  </ul>
                </div>
              </div>
              <div className="content">
                <div className="card-buttons">
                  <a className="button is-secondary is-rounded" rel="noopener noreferrer" target="_blank" href="https://github.com/mkleung/100daysReactNative">Code</a>
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
export default MobilePage
