import React from 'react';
import Greenblk from "./Greenblk";
import Blueblk from "./Blueblk";

require('dotenv').config()

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            glutenFree:false,
            vegetarian:false,
            glutenFreeColor:"",
            vegetarianColor:"",
            recipes:"",
            search:""
        };
    }

    //FETCH RECIPES

    fetchRecipes = (search) => {
        

        let vegActive;
        let glutenActive;
        this.setState({search:search})


        this.state.glutenFree === true ? glutenActive="&health=gluten-free" : glutenActive=""; // toggles gluten filter
        this.state.vegetarian === true ? vegActive="&health=vegetarian" : vegActive=""; // toggles vegetarian filter
        let searchURL = `https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}${glutenActive}${vegActive}`
        console.log(searchURL)
        
        fetch(searchURL)
        .then((response) => response.json())
        .then(recipesList => {
            this.setState({ recipes: recipesList})
            console.log(recipesList)
        })
    };
    


    //ORANGE FILTERS

    toggleGlutenFilter = (search) => {
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
        if(this.state.search !== "") 
        {setTimeout(() => {this.fetchRecipes(search);},200) //Timeout for fetch recipes to counter the info lag
        }

    }

    toggleVegetarianFilter = (search) => {
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
        if(this.state.search !== "") 
        {setTimeout(() => {this.fetchRecipes(search);},200) //Timeout for fetch recipes to counter the info lag
        }
    }



    render() {
        return (

        <div className = "base-wrapper-main">
            <Greenblk glutenFree={this.state.glutenFree}
            vegetarian={this.state.vegetarian}
            fetchRecipes={this.fetchRecipes}
            search={this.state.search}
            />
            <Blueblk toggleGlutenFilter={this.toggleGlutenFilter}
            glutenFreeColor={this.state.glutenFreeColor} 
            toggleVegetarianFilter={this.toggleVegetarianFilter}
            vegetarianColor={this.state.vegetarianColor}
            searchState={this.state.search}
            />
        </div>
        );
    }


}


export default Main;