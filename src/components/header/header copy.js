import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../header/header.scss"

const Header = ({ siteTitle }) => (
    
  <header>
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
