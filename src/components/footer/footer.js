import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../footer/footer.scss"

const Footer = () => (
    <div>

        <footer className="footer">
            <div className="content has-text-centered">
                <p>  © {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a> and <a target="_blank" href="https://www.netlify.com/">Netlify</a>
                </p>
           </div>
        </footer>
       
    </div>


)



export default Footer
