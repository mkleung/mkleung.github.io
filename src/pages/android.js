import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Image from '../components/img'

import Android1GIF from '../assets/images/android/android1.gif'
import Android1PNG from '../assets/images/android/android1.png'

import Android2GIF from '../assets/images/android/android2.gif'
import Android2PNG from '../assets/images/android/android2.png'

import Android3GIF from '../assets/images/android/android3.gif'
import Android3PNG from '../assets/images/android/android3.png'

import Android4GIF from '../assets/images/android/android4.gif'
import Android4PNG from '../assets/images/android/android4.png'


const Android = () => (
    <Layout navLocation="project">
        <div className="container">
            <div className="columns is-vcentered is-multiline">
                <div className="column is-12">
                    <h2 className="is-size-3 has-text-weight-bold">100 Days of Android Challenge</h2>
                </div>
                <Nav title="Android" />
            </div>
            <div className="columns is-vcentered is-multiline">

                {/* Project 4 */}
                <div className="column is-4">
                    <div className="card">
                        <a href="https://github.com/mkleung/100daysAndroid" target="_blank">
                            <div class="card-img">
                                <div className="card-image card-gif">
                                    <img src={Android4GIF} alt="Map Location" />
                                </div>
                                <div className="card-image card-png">
                                    <img src={Android4PNG} alt="Map Location" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>



                {/* Project 3 */}
                <div className="column is-4">
                    <div className="card">
                        <a href="https://github.com/mkleung/100daysAndroid" target="_blank">
                            <div class="card-img">
                                <div className="card-image card-gif">
                                    <img src={Android3GIF} alt="Tip Calculator" />
                                </div>
                                <div className="card-image card-png">
                                    <img src={Android3PNG} alt="Tip Calculator" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>


                {/* Project 2 */}
                <div className="column is-4">
                    <div className="card">
                        <a href="https://github.com/mkleung/100daysAndroid" target="_blank">
                            <div class="card-img">
                                <div className="card-image card-gif">
                                    <img src={Android2GIF} alt="Tap Holder" />
                                </div>
                                <div className="card-image card-png">
                                    <img src={Android2PNG} alt="Tap Holder" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>


                {/* Project 1 */}
                <div className="column is-4">
                    <div className="card">
                        <a href="https://github.com/mkleung/100daysAndroid" target="_blank">
                            <div class="card-img">
                                <div className="card-image card-gif">
                                    <img src={Android1GIF} alt="Tap Counter" />
                                </div>
                                <div className="card-image card-png">
                                    <img src={Android1PNG} alt="Tap Counter" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <SEO title="Mobile" />
    </Layout>
)
export default Android
