import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import "../header/header.scss"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import "../header/slider.scss"

const Header = ({ siteTitle, navLocation }) => {

  const data = useStaticQuery(graphql`
  query {
      site {
          siteMetadata {
              title
          }
      }
  }
`)

  const projectNav = navLocation === "project" ? "navbar-item is-secondary active" : "navbar-item is-secondary";
  const blogNav = navLocation === "blog" ? "navbar-item is-secondary active" : "navbar-item is-secondary";

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <div className="logo">
            <div className="triangle t1"></div>
            <div className="triangle t2"></div>
            <div className="rectangle"></div>
          </div>
          <h1 className="title">{data.site.siteMetadata.title}</h1>
        </Link>
        <div className="hamburger">
          <input type="checkbox" className="ham" />
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
          <div className="mobileMenu">
            <Link activeClassName="active" className="mobileMenu__item " to="/">Home</Link>
            <Link activeClassName="active" className="mobileMenu__item " to="/projects">Projects</Link>
            <Link activeClassName="active" className="mobileMenu__item " to="/blog">Blog</Link>
            <Link activeClassName="active" className="mobileMenu__item " to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="buttons">
          <Link className={projectNav} to="/projects">Projects</Link>
          <Link className={blogNav} to="/blog">Blog</Link>
          <Link activeClassName="active" className="navbar-item is-secondary" to="/contact">Contact</Link>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                  defaultChecked={true}
                />{' '}
                <span className="slider round">
                  <div className="moon"></div>
                  <div className="sun"></div>
                </span>
              </label>
            )}
          </ThemeToggler>
        </div>
      </div>

    </nav>
  )
}

export default Header
