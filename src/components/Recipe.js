import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';



function Recipe() {

    const location=useLocation()

    console.log(location.state)



    let shownImage =location.state.recipeImage;
    let shownTitle =location.state.recipeTitle;
    let shownTime =location.state.recipeTime;
    let shownIngredients =location.state.ingredients
    let shownInstructions =location.state.instructions[0].steps

useEffect(()=>{

    console.log(shownTitle)
    console.log(shownIngredients)
    console.log(shownInstructions)
},[shownImage,shownTitle,shownTime,shownInstructions,shownIngredients])

    return (
        <div className="section-wrapper">
            <div className="rp-green">
                <Link to='/main'>
                    <img src = "Images/backarrow.png" className = "back-arrow"></img>
                </Link>
            </div>
            <div className="rp-blue">
                <div className="rp-white">

                    <div className = "recipe-display">
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

                            <div className = "recipe-details">
                                <h3 className = "ingredients-title">Ingredients</h3>
                                
                                <div className = "ingredients-list-wrapper">
                                    {shownIngredients.map((ingredient) => {
                                        return  (
                                                <li key={ingredient} className = "ingredients-list">
                                                    {ingredient.original}
                                                </li>

                                        )}
                                    
                                    )}
                                </div>

                                <h3 className = "instructions-title">Instructions</h3>

                                <div className = "instructions-list-wrapper">
                                    <ol>
                                        {shownInstructions.map((instructions) => {
                                            return (
                                                <li className = "instructions-list">
                                                    
                                                    {instructions.step}
                                                </li>
                                            )
                                        })}
                                    </ol>
                                </div>
                            </div>


                </div>

            </div>

        </div>
    )
}

export default Recipe;