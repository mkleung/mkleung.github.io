import React from 'react'
import { Link } from "gatsby"


export default class Projectsnav extends React.Component {
  render() {
    let project = this.props.project === "project" ? "green" : "";
    let frontend = this.props.project === "frontend" ? "green" : "";
    let ui = this.props.project === "ui" ? "green" : "";
    return (
      <div className="column is-6 landing-caption">
        <h1 className="title is-1 is-bold is-spaced">Projects</h1>
        <p><Link className={project} to="/projects">Javascript</Link></p>
        <p><Link className={frontend} to="/frontend">100 Days of CSS</Link></p>
        <p><Link className={ui} to="/ui">User Interface</Link></p>

      </div>
    )
  }
}