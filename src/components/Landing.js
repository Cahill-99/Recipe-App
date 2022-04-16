import React from 'react';
import {Link} from 'react-router-dom';


function Landing() {
    return (
    <div className = "base-wrapper">
        <div className = "white-block">
            <div className = "text-block">
                <h2>Finding recipes made easy</h2>
                <p className = "landing-text"> 
                Select your ingredients, prep time, and diet restrictions to find recipes that fit your needs.</p>
                <Link to= '/main' className= "start-link">
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