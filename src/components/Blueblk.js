import React from 'react';
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
                    <ul>{props.recipes && props.recipes.map(recipeItem => {
                        return (
                            <li key={recipeItem.recipe.label}>{recipeItem.recipe.label}</li>
                        )
                    })}</ul>
                    </div>
                <img className = "placeholder-plate"  src = "Images/plate.png" alt = "plate with fork"></img>
                
                </div>
            </div>
        );
    }

export default Blueblk;