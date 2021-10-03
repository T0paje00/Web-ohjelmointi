import React, { Component } from 'react';
import './Mainfeed.css'

class Mainfeed extends Component {
    
    render() {
        return(
            <div className="News">
                <h1><span>Helsingin Juna-asema</span></h1>
                <img className="juna" src='HS_juna.jpg' alt=""></img>
            </div>
        )
    }
}

export default Mainfeed