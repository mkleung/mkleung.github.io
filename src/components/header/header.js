import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../header/header.scss"


const Header = ({ siteTitle }) => (
    <nav   className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                { siteTitle }
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

  
        <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
            <a className="button is-primary">
                <strong>Sign up</strong>
            </a>
            <a className="button is-light">
                Log in
            </a>
            </div>
        </div>
        </div>

    </nav  >

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
