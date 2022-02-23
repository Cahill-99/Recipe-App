import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';



function Recipe() {

    const location=useLocation()

    console.log(location.state)



    let shownImage = location.state.recipeImage;
    let shownTitle = location.state.recipeTitle;
    let shownTime = location.state.recipeTime;
    let shownIngredients = JSON.stringify(location.state.ingredients);
    let shownInstructions = JSON.stringify(location.state.instructions[0].steps);
    let vegetarian = location.state.vegetarian;
    let glutenFree = location.state.glutenFree;

// useEffect(()=>{



//     console.log(shownTitle)
//     console.log(shownIngredients)
//     console.log(shownInstructions)
//     let storedImage = localStorage.setItem("storedImage",process.env.PUBLIC_URL +location.state.recipeImage);
//     let storedIngredients = localStorage.setItem("storedIngredients",JSON.stringify(location.state.ingredients));
//     let storedInstructions = localStorage.setItem("storedInstructions",JSON.stringify(location.state.instructions[0].steps));
//     let storedTitle = localStorage.setItem("storedTitle",location.state.recipeTitle);
//     let storedTime = localStorage.setItem("storedTime",location.state.recipeTime);
// },[])
    console.log("check 1");
    return (
        <div className="section-wrapper">
            <div className="rp-green">
                <Link to='/main'>
                    <img src = {process.env.PUBLIC_URL +'/img/backarrow.png'} className = "back-arrow" alt = "back arrow"></img>
                </Link>
            </div>
            <div className="rp-blue">
                <div className="rp-white">

                    <div className = "recipe-display">
                        <img className = "recipe-image" src = {process.env.PUBLIC_URL + shownImage} alt = "recipe"></img>
                        <div className = "recipe-card-title-bar">
                            <p className = "card-text">{shownTitle}</p>
                        </div>
                        <div className = "recipe-card-icon-bar">
                            <div className = "time-display">
                            <img className = "clock-logo" src = {process.env.PUBLIC_URL +'/img/clock.png'} alt = "time icon"></img>
                            <p className = "card-icon-text">{shownTime} min </p>
                            </div>
                            <div className = "time-display">
                            {vegetarian === true && (<img className = "veg-logo" src = {process.env.PUBLIC_URL +'/img/Vegetarian.png'} alt = "vegetarian icon"></img>)}
                            {glutenFree === true && (<img className = "gluten-logo" src = {process.env.PUBLIC_URL +'/img/Gluten.png'} alt = "gluten free icon"></img>)}
                            </div>
                        </div>
                        </div>

                            <div className = "recipe-details">
                                <h3 className = "ingredients-title">Ingredients</h3>
                                
                                <div className = "ingredients-list-wrapper">
                                    {JSON.parse(shownIngredients).map((ingredient) => {
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
                                        {JSON.parse(shownInstructions).map((instructions) => {
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

        </div>
    )
}

export default Recipe;