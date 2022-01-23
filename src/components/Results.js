import React, {useState, useRef} from 'react';
import { useInfiniteScrollHook } from 'use-infinite-scroll-hook/lib';




function Results(props) {

    const [recipeLimit,setRecipeLimit] = useState(10)

    const showMore = () => {
                setRecipeLimit(recipeLimit + 10)
                console.log("should be loading more")
    }

    const targetContainer = useRef(null);

    const loadData = () => showMore();
    
    useInfiniteScrollHook(targetContainer, loadData);

    return (
        
        
    <div className = "white-block-main" ref = {targetContainer}>




        {props.recipes && props.recipes.slice(0,recipeLimit).map((recipeItem, index) => {
            return  (

                    <div className = "recipe-card" key = {index}>
                        <img className = "recipe-image" src = {recipeItem.recipe.image} alt = {recipeItem.recipe.label}></img>
                        <div className = "recipe-card-title-bar">
                            <p key={index} className = "card-text">{recipeItem.recipe.label}</p>
                        </div>
                        <div className = "recipe-card-icon-bar">
                            <div className = "time-display">
                            <img className = "clock-logo" src = "Images/clock.png" alt = "time icon"></img>
                            <p className = "card-icon-text">{recipeItem.recipe.totalTime} min </p>
                            </div>
                            <div className = "time-display">
                            <img className = "diet-logo" src = "Images/diet.png" alt = "time icon"></img>
                            <p className = "card-icon-text">test</p>
                            </div>
                        </div>
                    </div>

            )}
            
        )}



        {props.recipes.length === 0 && (

            <img className = "placeholder-plate"  src = "Images/plate.png" alt = "plate with fork"></img>

            )}



    </div>
    )
}

export default Results;