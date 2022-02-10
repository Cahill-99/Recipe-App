import React, {useState, useRef } from 'react';
import { useInfiniteScrollHook } from 'use-infinite-scroll-hook/lib';
import {Link} from 'react-router-dom';
import {RecipeContext} from "./Main";

function MobileResults(props) {

    let contextData = React.useContext(RecipeContext);

    const [recipeLimit,setRecipeLimit] = useState(10)


    const showMore = () => {
                setRecipeLimit(recipeLimit + 10)
                console.log("should be loading more")
    }


    const targetContainer = useRef(null);

    const loadData = () => showMore();
    
    useInfiniteScrollHook(targetContainer, loadData);

    return (



        
        
    <div className = "white-mobile" ref = {targetContainer}>




        {contextData && contextData.slice(0,recipeLimit).map((recipeItem, index) => {
            return  (
                <Link
                 to= {{
                 pathname:'/recipe',
                 activeClassName:"recipe-card", 
                 key:{recipeItem},
                 state:{recipeImage: recipeItem.image,
                        recipeTitle: recipeItem.title,
                        recipeTime: recipeItem.readyInMinutes,
                        ingredients: recipeItem.extendedIngredients,
                        instructions: recipeItem.analyzedInstructions
                        }}}>
                    <div className = "recipe-card" key = {index}>

                        <img className = "recipe-image" src = {recipeItem.image} alt = {recipeItem.title}></img>
                        <div className = "recipe-card-title-bar">
                            <p key={index} className = "card-text">{recipeItem.title}</p>
                        </div>
                        <div className = "recipe-card-icon-bar">
                            <div className = "time-display">
                            <img className = "clock-logo" src = "Images/clock.png" alt = "time icon"></img>
                            <p className = "card-icon-text">{recipeItem.readyInMinutes} min </p>
                            </div>
                            <div className = "time-display">
                            <img className = "diet-logo" src = "Images/diet.png" alt = "diet icon"></img>
                            <p className = "card-icon-text">test</p>
                            </div>
                        </div>
                    </div>
                 </Link>

            )}
            
        )}



        {contextData.length === 0 && (

            <img className = "placeholder-plate"  src = "Images/plate.png" alt = "plate with fork"></img>

            )}



    </div>

    )
}

export default MobileResults;