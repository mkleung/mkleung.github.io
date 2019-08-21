import React from 'react'
import { Link } from "gatsby"


export default class Projectsnav extends React.Component {
  render() {
    let projectsActive = (this.props.data === "projects") ? "green" : "";
    let frontendActive = (this.props.data === "frontend") ? "green" : "";
    let uiActive = (this.props.data === "ui") ? "green" : "";
    let reactActive = (this.props.data === "react") ? "green" : "";
    return (
      <div className="column is-6 landing-caption">
        <h1 className="title is-1 is-bold is-spaced">Projects</h1>
        <p><Link className={projectsActive} to="/projects">Javascript</Link></p>
        <p><Link className={frontendActive} to="/frontend">100 Days of CSS</Link></p>
        <p><Link className={uiActive} to="/ui">User Interface</Link></p>

      </div>
    )
  }
}