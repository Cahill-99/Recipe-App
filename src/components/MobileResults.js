import React, {useState, useRef } from 'react';
import { useInfiniteScrollHook } from 'use-infinite-scroll-hook/lib';
import {Link} from 'react-router-dom';
import {RecipeContext} from "./Main";

function MobileResults() {

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
                <div className = "linkWrapper" key = {recipeItem.id}>
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
                                <img className = "clock-logo" src = {process.env.PUBLIC_URL +'/img/clock.png'} alt = "time icon"></img>
                                <p className = "card-icon-text">{recipeItem.readyInMinutes} min </p>
                                </div>
                                <div className = "diet-display">
                                {recipeItem.vegetarian === true && (<img className = "veg-logo" src = {process.env.PUBLIC_URL +'/img/Vegetarian.png'} alt = "vegetarian icon"></img>)}
                                {recipeItem.glutenFree === true && (<img className = "gluten-logo" src = {process.env.PUBLIC_URL +'/img/Gluten.png'} alt = "gluten free icon"></img>)}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
            
        )}



        {!contextData && (

            <img className = "placeholder-plate"  src = {process.env.PUBLIC_URL +'/img/plate.png'} alt = "plate with fork"></img>

            )}



    </div>

    )
}

export default MobileResults;