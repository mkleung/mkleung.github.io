/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import 'bulma/css/bulma.css'
import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.scss"
const Layout = ({ navLocation, children }) => {
  return (
    <div>
      <Header navLocation={navLocation} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>
          <section className="hero is-medium intro">
            <div className="hero-body">
              {children}
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout