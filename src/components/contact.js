import React from 'react'

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
            </div>
        )
    }
}
export default Contact;
