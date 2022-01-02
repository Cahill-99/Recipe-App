import React, {useState} from 'react';

function Orangefilters(props) {

    const [dropdown,setDropdown] = useState("none")

    const toggleTimeDropdown = () => {
        let dropdownStatus = "none";

        dropdown === "none" ? dropdownStatus="flex" : dropdownStatus="none";

        setDropdown(dropdownStatus);
        

    }
    

        return (

            <div className = "filter-wrapper">
                <div className = "time-wrapper">
                    <div className = "time-button">
                        <div className = "time-light">
                            <p className = "filter-text">
                                Time
                            </p>
                        </div>
                        <div className = "time-dark" onClick={()=> toggleTimeDropdown()}>
                        <img className = "filter-arrow"  src = "Images/filterarrow.png" alt = "drop down arrow"></img>
                        </div>
                    </div>
                    <div className = "time-dropdown"
                    style={{display:dropdown}}>
                        <button className = "time-option">
                            10 mins
                        </button>
                        <button className = "time-option">
                            25 mins
                        </button>
                        <button className = "time-option">
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