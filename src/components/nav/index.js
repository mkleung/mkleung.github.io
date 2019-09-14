import React from 'react'
import { Link } from "gatsby"
import "./nav.scss"

export default class Projectsnav extends React.Component {
  render() {
    let projectTitle = this.props.project;
    let project = projectTitle === "Portfolio" ? "green" : "";
    let frontend = projectTitle === "CSS" ? "green" : "";
    let react = projectTitle === "React" ? "green" : "";

    return (
      <div className="column is-6 landing-caption">
        <h1 className="title is-bold is-spaced">{projectTitle}</h1>
        <div className="projectLink"><Link className={project} to="/projects">Portfolio</Link></div>
        <div className="projectLink"><Link className={react} to="/react">React</Link></div>
        <div className="projectLink"><Link className={frontend} to="/frontend">CSS</Link></div>
      </div>
    )
  }
}