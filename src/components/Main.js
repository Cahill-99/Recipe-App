import React from 'react';
import Greenblk from "./Greenblk";
import Blueblk from "./Blueblk";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            glutenFree:false,
            vegetarian:false,
            glutenFreeColor:"",
            vegetarianColor:""
        };
    }
    

    toggleGlutenFilter = () => {
        console.log("toggle")
        let glutenStatus=this.state.glutenFree;
        if(glutenStatus===false) {
            this.setState({glutenFree:true, glutenFreeColor:"white"})
            glutenStatus=true
        } else {
            this.setState({glutenFree:false, glutenFreeColor:""})
            glutenStatus=false
        }
        console.log(glutenStatus)
    }

    toggleVegetarianFilter = () => {
        console.log("toggle")
        let vegStatus=this.state.vegetarian;
        if(vegStatus===false) {
            this.setState({vegetarian:true, vegetarianColor:"white"})
            vegStatus=true
        } else {
            this.setState({vegetarian:false, vegetarianColor:""})
            vegStatus=false
        }
        console.log(vegStatus);
    }


    render() {
        return (

        <div className = "base-wrapper-main">
            <Greenblk glutenFree={this.state.glutenFree}
            vegetarian={this.state.vegetarian}
            />
            <Blueblk toggleGlutenFilter={this.toggleGlutenFilter}
            glutenFreeColor={this.state.glutenFreeColor} 
            toggleVegetarianFilter={this.toggleVegetarianFilter}
            vegetarianColor={this.state.vegetarianColor}
            />
        </div>
        );
    }


}


export default Main;