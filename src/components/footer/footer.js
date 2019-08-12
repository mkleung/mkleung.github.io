import React from "react"
import "../footer/footer.scss"

const Footer = () => (
    <div>

        <footer className="footer">
            <div className="content has-text-centered">
                <p>  © {new Date().getFullYear()}, Built with {` `} <a  rel="noopener noreferrer" href="https://www.gatsbyjs.org" target="_blank">Gatsby</a> and <a  rel="noopener noreferrer" target="_blank" href="https://www.netlify.com/">Netlify</a>
                </p>
           </div>
        </footer>
       
    </div>


)



export default Footer
