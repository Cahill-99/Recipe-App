import React from 'react';

class Orangefilters extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            glutenFree:false,
            vegetarian:false,
            glutenFreeColor:"",
            vegetarianColor:""
        };
    }


    render() {
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
                            <button className = "gluten-btn"  
                            onClick={()=> this.props.toggleGlutenFilter(this.props.searchState)} 
                            style={{backgroundColor: this.props.glutenFreeColor}}>

                            </button>
                            <p className = "filter-subtext">Gluten free</p>
                            <button className = "veg-btn"
                            onClick={()=> this.props.toggleVegetarianFilter(this.props.searchState)}
                            style={{backgroundColor: this.props.vegetarianColor}}>
                                
                            </button>
                            <p className = "filter-subtext">Vegetarian</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Orangefilters;