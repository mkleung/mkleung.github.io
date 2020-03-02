import React from 'react'
import { Link } from "gatsby"

export default class Nav extends React.Component {
    render() {
        let title = this.props.title;
        return (
            <div className="column is-12 landing-caption">
                <div class="buttons">
                    <Link className={title === "React" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"} to="/react">100DaysReact</Link>
                    <Link className={title === "CSS" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"} to="/css">100DaysCSS</Link>
                    {/* <Link className={projectTitle === "Mobile" ? "button is-primary is-outlined has-background-primary has-text-white" : "button is-primary is-outlined"} to="/mobile">100DaysReactNative</Link> */}
                </div>
            </div>
        )
    }
}