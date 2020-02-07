import React from 'react'
import { Link } from "gatsby"

export default class Projectsnav extends React.Component {
    render() {
        let projectTitle = this.props.project;
        return (
            <div className="column is-12 landing-caption">
                <div class="buttons">
                    <Link className={projectTitle === "Projects" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"} to="/projects">Projects</Link>
                    <Link className={projectTitle === "React" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"} to="/react">100DaysReact</Link>
                    <Link className={projectTitle === "CSS" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"} to="/frontend">100DaysCSS</Link>
                    {/* <Link className={projectTitle === "Mobile" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"} to="/mobile">100DaysReactNative</Link> */}
                </div>
            </div>
        )
    }
}