import React from 'react';
import Orangefilters from './Orangefilters';
import Results from './Results';





function Blueblk(props) {






        return (

            <div className = "blue-block-main">
                <Results recipes={props.recipes}/>

                <Orangefilters toggleGlutenFilter={props.toggleGlutenFilter} 
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

export default Blueblk;