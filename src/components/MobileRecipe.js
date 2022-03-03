import React from 'react';
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';

function MobileRecipe() {
    const location=useLocation()

    console.log(location.state)


    if(location.state){
        localStorage.setItem("storedImage",location.state.recipeImage);
        localStorage.setItem("storedIngredients",JSON.stringify(location.state.ingredients));
        localStorage.setItem("storedInstructions",JSON.stringify(location.state.instructions[0].steps));
        localStorage.setItem("storedTitle",location.state.recipeTitle);
        localStorage.setItem("storedTime",location.state.recipeTime);
        localStorage.setItem("storedVeg",JSON.stringify(location.state.vegetarian));
        localStorage.setItem("storedGluten",JSON.stringify(location.state.glutenFree));
    }



    console.log("check 1");

    return(
        <div className = "recipe-blue-block-main">
            <div className = "recipe-mobile-wrapper">
                <div className = "results-wrapper">
                    <div className ="white-mobile">
                        <div className="rp-white-mobile">

                            <div className = "recipe-display">
                                <img className = "recipe-image" src = {localStorage.getItem("storedImage")} alt = "recipe"></img>
                                <div className = "recipe-card-title-bar">
                                    <p className = "card-text">{localStorage.getItem("storedTitle")}</p>
                                </div>
                                <div className = "recipe-card-icon-bar">
                                    <div className = "time-display">
                                    <img className = "clock-logo" src = {process.env.PUBLIC_URL +'/img/clock.png'} alt = "time icon"></img>
                                    <p className = "card-icon-text">{localStorage.getItem("storedTime")} min </p>
                                    </div>
                                    <div className = "time-display">
                                    {localStorage.getItem("storedVeg") === "true" && (<img className = "veg-logo" src = {process.env.PUBLIC_URL +'/img/Vegetarian.png'} alt = "vegetarian icon"></img>)}
                                    {localStorage.getItem("storedGluten") === "true" && (<img className = "gluten-logo" src = {process.env.PUBLIC_URL +'/img/Gluten.png'} alt = "gluten free icon"></img>)}
                                    </div>
                                </div>
                            </div>

                                    <div className = "recipe-details">
                                        <h3 className = "ingredients-title">Ingredients</h3>
                                        
                                        <div className = "ingredients-list-wrapper">
                                            {JSON.parse(localStorage.getItem("storedIngredients")).map((ingredient) => {
                                                return  (
                                                        <li key={ingredient.id} className = "ingredients-list">
                                                            {ingredient.original}
                                                        </li>

                                                )}
                                            
                                            )}
                                        </div>

                                        <h3 className = "instructions-title">Instructions</h3>

                                        <div className = "instructions-list-wrapper">
                                            <ol>
                                                {JSON.parse(localStorage.getItem("storedInstructions")).map((instructions) => {
                                                    return (
                                                        <li key={instructions.number} className = "instructions-list">
                                                            
                                                            {instructions.step}
                                                        </li>
                                                    )
                                                })}
                                            </ol>
                                        </div>
                                    </div>


                        </div>
                    </div>
                    <div className = "green-mobile">
                        <div className = "mobile-green-recipe-button">
                            <Link to='/main'>
                                <img src = {process.env.PUBLIC_URL +'/img/backarrow.png'} className = "mobile-recipe-back-arrow" alt = "back arrow"></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileRecipe