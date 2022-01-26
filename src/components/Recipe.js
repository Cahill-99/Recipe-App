import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";



function Recipe() {

    const location=useLocation()

    console.log(location.state)



    let shownImage =location.state.recipeImage;
    let shownTitle =location.state.recipeTitle;
    let shownTime =location.state.recipeTime;

useEffect(()=>{

    console.log(shownTitle)
},[shownImage,shownTitle,shownTime])

    return (
        <div className="section-wrapper">
            <div className="rp-green">

            </div>
            <div className="rp-blue">
                <div className="rp-white">

                    <div className = "recipe-card">
                        <img className = "recipe-image" src = {shownImage} alt = {shownTitle}></img>
                        <div className = "recipe-card-title-bar">
                            <p className = "card-text">{shownTitle}</p>
                        </div>
                        <div className = "recipe-card-icon-bar">
                            <div className = "time-display">
                            <img className = "clock-logo" src = "Images/clock.png" alt = "time icon"></img>
                            <p className = "card-icon-text">{shownTime} min </p>
                            </div>
                            <div className = "time-display">
                            <img className = "diet-logo" src = "Images/diet.png" alt = "time icon"></img>
                            <p className = "card-icon-text">test</p>
                            </div>
                        </div>
                        </div>

                </div>

            </div>

        </div>
    )
}

export default Recipe;