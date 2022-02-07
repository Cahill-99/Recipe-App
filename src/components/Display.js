import React from 'react';
import Filters from './Filters';
import Results from './Results';





function Display(props) {






        return (

            <div className = "blue-block-main">
                
                <Results recipes={props.recipes}/>

                <Filters toggleGlutenFilter={props.toggleGlutenFilter} 
                glutenFreeColor={props.glutenFreeColor}
                toggleVegetarianFilter={props.toggleVegetarianFilter}
                vegetarianColor={props.vegetarianColor}
                searchState={props.searchState}
                toggleTimeDropdown={props.toggleTimeDropdown}
                dropdown={props.dropdown}
                handleTime={props.handleTime}/>
                

            </div>
        );
    }

export default Display;