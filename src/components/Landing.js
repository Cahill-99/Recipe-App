import React from 'react';
import {Link} from 'react-router-dom';


function Landing() {
    return (
    <div className = "base-wrapper">
        <div className = "white-block">
            <div className = "text-block">
                <h2>Finding recipes made easy</h2>
                <p className = "landing-text"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                <Link to= '/main'>
                <button className = "startbtn">Get Started</button>
                </Link>
            </div>
            <div className = "green-block-landing">
                <div className = "photo-block">
                </div>
            </div>
        </div>
    </div>
    );
}

export default Landing;