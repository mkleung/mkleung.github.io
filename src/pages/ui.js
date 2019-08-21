import React from "react"
import Codepen from "react-codepen-embed";
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsImage from "../components/img/projectsImage"
import Projectsnav from "../components/projectsnav"

const data = "ui";
const UIPage = () => (
    <Layout>
        <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered is-multiline">
                    <Projectsnav data={data} />
                    <div className="column is-6">
                        <ProjectsImage />
                    </div>
                    <div className="column is-12">
                        <h2 className="has-text-weight-bold">UI Projects</h2>
                    </div>

                    {/* Gradient Website */}
                    <div className="column is-12">
                        <Codepen
                            hash="MWgKrgb"
                            user="mpakleung"
                            defaultTab="result"
                            loader={() => <div>Loading...</div>}
                        />
                    </div>

                    {/* Login Form */}
                    <div className="column is-12">
                        <Codepen
                            hash="LwwpKb"
                            user="mpakleung"
                            defaultTab="result"
                            loader={() => <div>Loading...</div>}
                        />
                    </div>
                </div>
            </div>
        </div>
        <SEO title="Projects" />
    </Layout>
)

export default UIPage
