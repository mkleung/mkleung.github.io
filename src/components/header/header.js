import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../header/header.scss"


const Header = ({ siteTitle }) => (
    <nav   className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

            <Link className="navbar-item" to="/"><h1 className="title">{ siteTitle }</h1></Link>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

  
        <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
            <Link className="navbar-item is-secondary">About</Link>
            <Link className="navbar-item is-secondary" to="/projects">Projects</Link>
            <Link className="navbar-item is-secondary">Contact</Link>
            </div>
        </div>
        </div>

        

    </nav>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
