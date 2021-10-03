import React, { Component } from 'react';
import './Advertisement.css'

class Advertisement extends Component {
    
    render() {
        return(
            
                <ul className="AdArrange">
                    <li id="FirstAdSpot"><span>PÄIVÄN TIMANTTI: Tutkija kertoo: Näin sota näkyy meissä edelleen.</span></li>
                    <li id="SecondAdSpot"><span>PÄIVÄN TIMANTTI: Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa.</span></li>
                    <li id="ThirdAdSpot"><span>MAINOS: Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!</span></li>
                </ul>
            
        )
    }
}

export default Advertisement