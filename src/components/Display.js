import React from 'react';
import Filters from './Filters';
import Results from './Results';
import MobileWrap from './MobileWrap'





function Display(props) {

    




        return (

            <div className = "blue-block-main">

                <MobileWrap recipes={props.recipes}
                glutenFree={props.glutenFree}
                vegetarian={props.vegetarian}
                search={props.search}
                searchStringAdd={props.searchStringAdd}
                searchStringRemove={props.searchStringRemove}
                searchStringReset={props.searchStringReset}/>
                
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