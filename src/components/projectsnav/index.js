import React from 'react'
import { Link } from "gatsby"


export default class Projectsnav extends React.Component {
  render() {
    let project = this.props.project === "project" ? "green" : "";
    let frontend = this.props.project === "frontend" ? "green" : "";
    let blog = this.props.project === "blog" ? "green" : "";
    return (
      <div className="column is-6 landing-caption">
        <h1 className="title is-1 is-bold is-spaced">Projects</h1>
        <div className="projectLink"><Link className={project} to="/projects">Javascript</Link></div>
        <div className="projectLink"><Link className={frontend} to="/frontend">CSS</Link></div>
        <div className="projectLink"><Link className={blog} to="/blog">Tutorials</Link></div>

      </div>
    )
  }
}