import React from 'react'
import { Link } from "gatsby"
import "./nav.scss"

export default class Projectsnav extends React.Component {
  render() {
    let project = this.props.project === "project" ? "green" : "";
    let frontend = this.props.project === "frontend" ? "green" : "";
    let react = this.props.project === "react" ? "green" : "";

    return (
      <div className="column is-6 landing-caption">
        <h1 className="title is-bold is-spaced">Projects</h1>
        <div className="projectLink"><Link className={project} to="/projects">Full Stack</Link></div>
        <div className="projectLink"><Link className={react} to="/react">React</Link></div>
        <div className="projectLink"><Link className={frontend} to="/frontend">CSS</Link></div>
      </div>
    )
  }
}