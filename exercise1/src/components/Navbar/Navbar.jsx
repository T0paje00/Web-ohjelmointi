import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";

import './Navbar.css'
class Navbar extends Component {
    
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <img className="menu-logo" src='menu-logo.svg' alt="">
                    </img> </h1>
                
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}> {item.title} </li>  
                        )
                    })}
                    
                </ul>
                
                <div className="leftSide">
                    <p id="Tilaa">Tilaa</p>
                    <p id="Kirjaudu">Kirjaudu</p>
                    <p id="Valikko">Valikko <p className="fas fa-bars"> </p></p>
                </div>
                    
            </nav>
        )
    }
}

export default Navbar