import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/img'
import Home from '../components/home'
import Github from "../components/github"

const IndexPage = () => (
  <Layout>
    <div className="container home_container">
      <div className="columns is-vcentered is-multiline main-feature">
        <div className="column is-6">
          <Home />
          <p className="home_title">I'm Mike Leung, a full stack developer who loves to craft and maintain code that improves the life of people.</p>
          <br />
          <p><Link className="button is-primary greenButton" to="/contact">Contact Me</Link></p>
        </div>
        <div className="column is-6">
          <Image filename="home.png" />
        </div>
      </div>
    </div>

    {/* PROFESSIONAL EXPERIENCE */}
    <div className="container secondary-feature">
      <div className="columns is-vcentered is-multiline main-feature">
        <div className="column is-12">
          <h2 className="home_projects has-text-centered is-size-3 has-text-weight-bold">Professional Experience</h2>
        </div>

        {/* Javascript */}
        <div className="column is-4">
          <div className="card card-transparent">
            <div className="card-image">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width='100'
                height='100'
                fill='#f0db4f'><title>JavaScript icon</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Javascript</p>
                <ul>
                  <li>ReactJS Hooks</li>
                  <li>React Native</li>
                  <li>VueJs, D3JS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Php */}
        <div className="column is-4">
          <div className="card card-transparent">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width='100'
              height='100'
              fill='#F05340'><title>Laravel icon</title><path d="M23.644 5.43c.009.032.014.065.014.099v5.15c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .135-.072.258-.188.326L9.931 23.95c-.021.012-.043.02-.066.027-.008.002-.016.008-.024.01-.063.018-.13.018-.192 0-.011-.002-.02-.008-.029-.012-.021-.008-.043-.014-.063-.025L.534 18.755c-.117-.068-.189-.191-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.021.014-.032.006-.02.014-.04.023-.058.004-.013.015-.022.023-.033.012-.016.021-.031.033-.045.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034h.001L5.044.05c.115-.067.259-.067.375 0l4.512 2.597h.002c.015.01.027.021.041.033.012.009.025.018.037.027.013.014.021.029.033.045.008.011.02.021.025.033.011.019.017.038.024.058.003.011.011.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.005-.066.014-.098.003-.011.009-.021.013-.032.007-.02.014-.039.024-.059.007-.012.018-.021.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.011.026-.023.041-.032h.001l4.513-2.598c.116-.067.259-.067.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.029.034.044.008.012.019.021.024.033.011.02.018.039.024.059.006.011.012.022.015.033zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283l3.76-2.164zm-4.511 7.75v-4.287l-2.146 1.225-6.127 3.498v4.326l8.273-4.762zM1.095 3.624v14.588l8.273 4.762v-4.326l-4.322-2.445-.002-.003h-.002c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.039-.01-.012-.021-.023-.028-.037h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043-.004-.018-.006-.037-.008-.057-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257-1.578-.908zM5.231.81l-3.76 2.164 3.76 2.164 3.758-2.164L5.231.81zm1.956 13.505l2.182-1.256V3.624l-1.58.909-2.182 1.256v9.435l1.58-.909zM18.769 3.364l-3.76 2.164 3.76 2.163 3.759-2.164-3.759-2.163zm-.376 4.979l-2.182-1.256-1.579-.908v4.283l2.182 1.256 1.579.908V8.343zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.324 2.489-3.941 2.27 3.752 2.124z" /></svg>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Php</p>
                <ul>
                  <li>WordPress Plugin Development</li>
                  <li>Laravel Full Stack development</li>
                  <li>Setting up LAMP stack</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Android */}
        <div className="column is-4">
          <div className="card card-transparent">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width='100'
              height='100'
              fill='#a4c639'><title>Android icon</title><path d="M24 19H0a13.6 13.6 0 0 1 2.21-6.07A11.2 11.2 0 0 1 5.87 9.4l.41-.23-2.02-3.41a.51.51 0 0 1 .17-.7.5.5 0 0 1 .69.18l2.08 3.5a12.62 12.62 0 0 1 4.84-.9 12.2 12.2 0 0 1 4.75.9l2.07-3.5a.5.5 0 0 1 .7-.17.51.51 0 0 1 .16.7L17.7 9.19l.5.28a11.38 11.38 0 0 1 3.63 3.62A14.48 14.48 0 0 1 24 19zm-7.5-4.48a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1zm-11 0a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1z" /></svg>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Android
                </p>
                <ul>
                  <li>SQLite</li>
                  <li>Async Task</li>
                  <li>Notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* PROJECTS */}
    <div className="container secondary-feature">
      <div className="columns is-vcentered is-multiline main-feature">
        <div className="column is-12">
          <h2 className="home_projects is-size-3 has-text-weight-bold has-text-centered">Projects</h2>
        </div>

        {/* Snaplifts */}
        <div className="column is-4">
          <div className="card">
            <div className="card-image">
              <Image filename="snaplifts.PNG" />
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Snaplifts - Gym Tracker
                <Github url="https://github.com/mkleung/snaplifts" />
                </p>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Firebase</li>
                </ul>
                <div className="card-buttons">
                  <a className="button is-rounded greenButton" rel="noopener noreferrer" target="_blank" href="https://mkleung.github.io/snaplifts/">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Atomic To Do List */}
        <div className="column is-4">
          <div className="card">
            <div className="card-image">
              <Image filename="atomic.PNG" />

            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">To Do List
                  <Github url="https://github.com/mkleung/todolist-vue" />
                </p>

                <ul>
                  <li>Vue</li>
                  <li>Laravel</li>
                  <li>Heroku</li>
                </ul>
                <div className="card-buttons">
                  <a className="button is-rounded greenButton" rel="noopener noreferrer" target="_blank" href="https://todolistvuejs.herokuapp.com/">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Site */}
        <div className="column is-4">
          <div className="card">
            <div className="card-image">
              <Image filename="personal.PNG" />

            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Personal Site
                  <Github url="https://github.com/mkleung/mkleung.github.io" />
                </p>
                <ul>
                  <li>Gatsby React Framework</li>
                  <li>GraphyQL</li>
                  <li>Netlify</li>
                </ul>
                <div className="card-buttons">
                  <a className="button is-rounded greenButton" rel="noopener noreferrer" target="_blank" href="https://mikeleung.ca">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <SEO title="Home" />
  </Layout>
)
export default IndexPage