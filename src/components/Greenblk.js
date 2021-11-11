import React from 'react';


class Greenblk extends React.Component {

    state = {
        recipes: []
    }

    componentDidMount() {
        //const APP_ID = "efb4537f";
        ///const APP_KEY = "3957081447cbddc95fd0ae1dda9e5529"
        //let baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`
    }

    fetchRecipes = () => {
        const APP_ID = "efb4537f";
        const APP_KEY = "3957081447cbddc95fd0ae1dda9e5529"
        fetch(`https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then((response) => response.json())
        .then(recipesList => {
            this.setState({ recipes: recipesList})
        })
        console.log(this.state);
    }
    render() {

        return (

            <div className = "green-block-main">
                <h4 onClick ={this.fetchRecipes} >Ingredients</h4>
                <form className = "search-form">
                    <input className = "search-bar">
                    </input>
                </form>
                <div className = "green-info-wrapper">
                    <img className = "green-arrow"  src = "Images/greenarrow.png" alt = "up arrow"></img>
                    <p className = "green-instructions">Add an ingredient to begin your search</p>
                </div>
            </div>

        );
    }

}
const api = () => {

    
    const APP_ID = "efb4537f";
    const APP_KEY = "3957081447cbddc95fd0ae1dda9e5529"
    let baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`
    }

export default Greenblk;