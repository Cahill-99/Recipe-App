import React from 'react';

function Orangefilters(props) {
    

        return (

            <div className = "filter-wrapper">
                <div className = "time-wrapper">
                    <div className = "time-light">
                        <p className = "filter-text">
                            Time
                        </p>
                    </div>
                    <div className = "time-dark">
                    <img className = "filter-arrow"  src = "Images/filterarrow.png" alt = "drop down arrow"></img>
                    </div>
                </div>
                <div className = "diet-wrapper">
                    <div className = "diet-light">
                        <p className = "filter-text">
                            Diet
                        </p>
                    </div>
                    <div className = "diet-dark">
                        <div className = "filter-wrapper">
                            <button className = "gluten-btn"  
                            onClick={()=> props.toggleGlutenFilter(props.searchState)} 
                            style={{backgroundColor: props.glutenFreeColor}}>

                            </button>
                            <p className = "filter-subtext">Gluten free</p>
                        </div>
                        <div className = "filter-wrapper">
                            <button className = "veg-btn"
                            onClick={()=> props.toggleVegetarianFilter(props.searchState)}
                            style={{backgroundColor: props.vegetarianColor}}>
                                
                            </button>
                            <p className = "filter-subtext">Vegetarian</p>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Orangefilters;