import React from 'react';

function Filters(props) {




    

        return (

            <div className = "filter-wrapper">
                <div className = "time-wrapper">
                    <div className = "time-button">
                        <div className = "time-light">
                            <p className = "filter-text">
                                Time
                            </p>
                        </div>
                        <div className = "time-dark" onClick={()=> props.toggleTimeDropdown()}>
                        <img className = "filter-arrow"  src = {process.env.PUBLIC_URL +'/img/filterarrow.png'} alt = "drop down arrow"></img>
                        </div>
                    </div>
                    <div className = "time-dropdown"
                    style={{display: props.dropdown}}>
                        <button className = "time-option"
                        onClick={()=> props.handleTime("15")}>
                            15 min
                        </button>
                        <button className = "time-option"
                        onClick={()=> props.handleTime("30")}>
                            30 min
                        </button>
                        <button className = "time-option"
                        onClick={()=> props.handleTime("60")}>
                            1 hr
                        </button>
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
                            onClick={()=> props.toggleGlutenFilter()} 
                            style={{backgroundColor: props.glutenFreeColor}}>

                            </button>
                            <p className = "filter-subtext">Gluten free</p>
                        </div>
                        <div className = "filter-wrapper">
                            <button className = "veg-btn"
                            onClick={()=> props.toggleVegetarianFilter()}
                            style={{backgroundColor: props.vegetarianColor}}>
                                
                            </button>
                            <p className = "filter-subtext">Vegetarian</p>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Filters;