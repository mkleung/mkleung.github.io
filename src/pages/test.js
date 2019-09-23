import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const TestPage = () => (
    <Layout>
        <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered is-multiline main-feature">
                    <div className="column is-4 is-offset-4 has-text-centered">
                        <ThemeToggler>
                            {({ theme, toggleTheme }) => (
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                                        checked={theme === 'dark'}
                                    />{' '}
                                    Dark mode
                                </label>
                            )}
                        </ThemeToggler>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default TestPage