import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Orangefilters from './Orangefilters';


function Blueblk(props) {


        return (

            <div className = "blue-block-main">
                <Orangefilters toggleGlutenFilter={props.toggleGlutenFilter} 
                glutenFreeColor={props.glutenFreeColor}
                toggleVegetarianFilter={props.toggleVegetarianFilter}
                vegetarianColor={props.vegetarianColor}
                searchState={props.searchState}
                toggleTimeDropdown={props.toggleTimeDropdown}
                dropdown={props.dropdown}
                handleTime={props.handleTime}/>
                
                <div className = "white-block-main">
                    <div className = "recipes-wrapper">
                    <InfiniteScroll dataLength={100} next={console.log(props.loadMore)} hasMore={true} scrollableTarget="white-block-main">
                    {props.recipes && props.recipes.map(recipeItem => {
                        return  (
                                <div className = "recipe-card">
                                    <img className = "recipe-image" src = {recipeItem.recipe.image} alt = {recipeItem.recipe.label}></img>
                                    <div className = "recipe-card-title-bar">
                                        <p key={recipeItem.recipe.label} className = "card-text">{recipeItem.recipe.label}</p>
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
                    </InfiniteScroll>
                    </div>
                    {props.recipes.length === 0 && (

                        <img className = "placeholder-plate"  src = "Images/plate.png" alt = "plate with fork"></img>

                        )}
                


                </div>
            </div>
        );
    }

export default Blueblk;