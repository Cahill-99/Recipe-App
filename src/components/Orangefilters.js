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

    // toggleGlutenFilter = () => {
    //     console.log("toggle")
    //     this.state.glutenFree === true ? this.setState({glutenFree:false}) : this.setState({glutenFree:true})
    //     this.state.glutenFreeColor === "" ? this.setState({glutenFreeColor:"white"}) : this.setState({glutenFreeColor:""})
    // }

    // toggleVegetarianFilter = () => {
    //     console.log("toggle")
    //     this.state.vegetarian === true ? this.setState({vegetarian:false}) : this.setState({vegetarian:true})
    //     this.state.vegetarianColor === "" ? this.setState({vegetarianColor:"white"}) : this.setState({vegetarianColor:""}) 
    // }

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
                            onClick={()=> this.props.toggleGlutenFilter()} 
                            style={{backgroundColor: this.props.glutenFreeColor}}>

                            </button>
                            <p className = "filter-subtext">Gluten free</p>
                            <button className = "veg-btn"
                            onClick={()=> this.props.toggleVegetarianFilter()}
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