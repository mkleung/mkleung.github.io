import React from "react"
import Layout from "../components/layout"
import * as frontendData from "../assets/data/frontend.json";
import Codepen from "react-codepen-embed";
const Test = () => (
    < Layout >
        <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered is-multiline main-feature">
                    <div className="column is-12 has-text-centered">
                        {frontendData.projects.length}

                        <div class="pens">

                            <div className="codepens">
                                {frontendData.projects.map((item, index) => {
                                    let penClass = "pen-" + index;
                                    let penClass2 = "pen " + penClass;
                                    let inputClass = "input-" + index;
                                    return (
                                        <div key={index}>
                                            <input className={inputClass} id={penClass} type="radio" name="dashboard" />
                                            <div className={penClass2} >
                                                <Codepen
                                                    hash={item.hash}
                                                    user="mpakleung"
                                                    defaultTab="result"
                                                    loader={() => <div>Loading...</div>}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout >
)
export default Test



