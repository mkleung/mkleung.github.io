import React from 'react'
import "./waves.scss"
class Waves extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
            </React.Fragment>
        )
    }
}
export default Waves;
