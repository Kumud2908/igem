import React from 'react';
import Home from './Home';
import Dry from './Dry';
import Wet from './Wet';
import People from './People';
import Judges from './Judges';
import Project from './Project';
import Logo from './logo';
 
const Navbar=()=>{
    return(
        <div className="mybody">
        <div className="navbar">
        <div className="nav">
            <ul className="mylist">
            <li className="nav-item">
                <a href="#" className="nav-link">
                
                    
                    <span className="main-logo">
                    </span>
                    <Logo color="White"/>
                </a>
                </li>
            <li className="nav-item">
                <a href="#" className="nav-link">
                <Home color="black"/>
                    
                    <span className="link-text">Home
                    </span>
                </a>
                </li>
                <li className="nav-item">
                <a href="/" className="nav-link">
                    <People color="black"/>
                    <span className="link-text">People
                    </span>
                </a>
                </li>
                <li className="nav-item">
                <a href="/" className="nav-link">
                <Project color="black"/>
                    <span className="link-text">Project
                    </span>
                </a>
                </li>
                
                <li className="nav-item">
                <a href="/" className="nav-link">
                <Wet color="black"/>
                    <span className="link-text">Wetlab
                    </span>
                </a>
                </li>
                <li className="nav-item">
                <a href="/" className="nav-link">
                <Dry color="black"/>
                    <span className="link-text">Drylab
                    </span>
                </a>
                </li>
                <li className="nav-item">
                <a href="/" className="nav-link">
                <Judges color="black"/>
                    <span className="link-text">Judges
                    </span>
                </a>
                </li>

            </ul>

        </div>
        <div className="nav2">
            <h1></h1>

        </div>
        </div>
        </div>
    )
}
export default Navbar;