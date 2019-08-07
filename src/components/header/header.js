import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../header/header.scss"


const Header = ({ siteTitle }) => (
  <div>
    
    <div className="wave1"></div>
    <div className="wave2"></div>
    <div className="wave3"></div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

            <Link className="navbar-item" to="/">
              <div className="logo">
                  <div className="triangle t1"></div>
                  <div className="triangle t2"></div>
                  <div className="rectangle"></div>
              </div>
              <h1 className="title">{ siteTitle }</h1>
            </Link>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

  
        <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
            <Link className="navbar-item is-secondary"  to="/about">About</Link>
            <Link className="navbar-item is-secondary" to="/projects">Projects</Link>
            <Link className="navbar-item is-secondary"  to="/contact">Contact</Link>
            </div>
        </div>
        </div>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
