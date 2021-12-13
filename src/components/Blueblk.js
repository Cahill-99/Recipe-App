import React from 'react';
import Orangefilters from './Orangefilters';


function Blueblk(props) {

        return (

            <div className = "blue-block-main">
                <Orangefilters toggleGlutenFilter={props.toggleGlutenFilter} 
                glutenFreeColor={props.glutenFreeColor}
                toggleVegetarianFilter={props.toggleVegetarianFilter}
                vegetarianColor={props.vegetarianColor}
                searchState={props.searchState}/>
                <div className = "white-block-main">
                <img className = "placeholder-plate"  src = "Images/plate.png" alt = "plate with fork"></img>
                </div>
            </div>
        );
    }

export default Blueblk;