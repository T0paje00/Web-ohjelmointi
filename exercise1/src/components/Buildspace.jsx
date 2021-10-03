import React, { Component } from 'react';
import Advertisement from './AdSpot/Advertisement';
import './Buildspace.css'
import Mainfeed from './Mainfeed/Mainfeed';
import Navbar from './Navbar/Navbar';
import Sidefeed from './Sidefeed/Sidefeed';

class Buildspace extends Component {
    
    render() {
        return(
            <div className="MainBuild">
                <Navbar/>
                <div className="ContentBoxes">
                    <Advertisement/>
                    <div className="FeedBoxes">
                        <Mainfeed/>
                        <Sidefeed/>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Buildspace