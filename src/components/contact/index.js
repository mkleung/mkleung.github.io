import React from 'react'
import "./contact.scss"

class Contact extends React.Component {
    render() {
        return (
            <div className="center">  
                <input name="envelope" className="checkbox" type="checkbox" id="send"  />
                <label className="contactButton" for="send"></label>
                <svg className="envelope" viewBox="100 100 500 500">
                    <path  d="M209.5,131.5h211.459l1.938,126H209.5V131.5z
                    M320,198.476L210,131 M420.959,131L320,198.476"/>
                </svg>
                {/* <svg className="plane" viewBox="0 0 300 300">
          			<path d="M174.5,104v61l-39.762-0.222l34.435-51.559
				l-45.237,51.498L85,164.5L174.5,104z M138.46,164.8l-8.96,15.05l-5.56-15.13 M134.738,164.778L129.5,179.85"/>
                </svg> */}
            </div>

        )
    }
}
export default Contact;
