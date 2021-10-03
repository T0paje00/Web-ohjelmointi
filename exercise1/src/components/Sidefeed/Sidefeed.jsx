import React, { Component } from 'react';
import './Sidefeed.css'

class Sidefeed extends Component {
    
    render() {
        return(
            <div className="SideNews">
                <h1><span>Luetuimmat</span></h1>
                <hr id="linebreak"  />
                <h2><span><span id="Numbering">1. </span>  Ensimmäinen uutinen oikeassa syötössä.</span></h2>
            </div>
        )
    }
}

export default Sidefeed