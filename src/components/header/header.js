import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../header/header.scss"


const Header = ({ siteTitle }) => (

  <div>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <div className="wave wave1"></div>
    <div className="wave wave2"></div>
    <div className="wave wave3"></div>
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

            <div className="hamburger">
              <input type="checkbox" className="ham"/>
              <span className="first"></span>
              <span className="second"></span>
              <span className="third"></span>
              <div className="mobileMenu">
               
                <Link activeClassName="active" className="mobileMenu__item "  to="/about">About</Link>
                <Link activeClassName="active" className="mobileMenu__item " to="/projects">Projects</Link>
                <Link activeClassName="active" className="mobileMenu__item " to="/contact">Contact</Link>
              </div>
          </div>
        </div>

  
        <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
            <Link activeClassName="active" className="navbar-item is-secondary"  to="/about">About</Link>
            <Link activeClassName="active" className="navbar-item is-secondary" to="/projects">Projects</Link>
            <Link activeClassName="active" className="navbar-item is-secondary"  to="/contact">Contact</Link>
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
