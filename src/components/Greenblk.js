import React from 'react';


class Greenblk extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search:' ',
            recipes:'',
            suggestions:[],
            list:[]
          
};
    this.handleChange = this.handleChange.bind(this);
    //this.fetchRecipes = this.fetchRecipes.bind(this);


    }


    handleChange(evt) {
        if(this._timeout){ //if there is already a timeout in process cancel it
            clearTimeout(this._timeout);
        }
        const val = evt.target.value;
        this._timeout = setTimeout(()=>{
           //this._timeout = null;
           //this.setState({
           //   search:val
          // });
          // console.log(this.state.search);
           this.autoComplete(val);
        },500);

      }



      autoComplete = (search) => {
        const API_KEY = "82138415fc524a1d950b2bc22191c8cc";
        console.log(`search ${search}`);
        fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${search}&number=5&apiKey=${API_KEY}`)
        .then((response) => response.json())
        .then(autoComplete => {
            this.setState({ suggestions: autoComplete})
        })
        console.log(this.state.suggestions);
    };



    handleClick = (selected) => {
        let searchString = this.state.search + " " + selected;
        let ingredientsList = this.state.list.concat([selected]);
        //console.log(selected)
        this.setState({
        search: searchString,
        suggestions: "",
        list: ingredientsList})
        //list: this.state.list.concat([selected])}) // adds selected suggestion to search string

        console.log(searchString)
        console.log(ingredientsList)

        this.fetchRecipes(searchString)
    }
    

    fetchRecipes = (search) => {
        const APP_ID = "efb4537f";
        const APP_KEY = "3957081447cbddc95fd0ae1dda9e5529";
        
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then((response) => response.json())
        .then(recipesList => {
            this.setState({ recipes: recipesList})
            console.log(recipesList)
        })
    };

    render() {

        return (

            <div className = "green-block-main">
                <h4>Ingredients</h4>
                <form className = "search-form">
                    <input className = "search-bar" type="text" onChange= {this.handleChange}>
                    </input>
                </form>
                <div className = "green-info-wrapper">
                    {this.state.suggestions.length === 0 && this.state.list.length === 0 &&(
                    <div className = "green-instructions-wrapper">
                    <img className = "green-arrow"  src = "Images/greenarrow.png" alt = "up arrow"></img>
                    <p className = "green-instructions">Add an ingredient to begin your search</p>

                    </div>
                    )}
                    {this.state.suggestions.length !== 0 && (
                    <div className = "auto-complete-dropdown">
                        {this.state.suggestions.map(hit =>{
                            return (
                                <p className = "suggestions" key = {hit.name} onClick = {()=> {this.handleClick(hit.name)}}>{hit.name}</p>
                            )
                        })}
                    </div>
                    )}
                </div>
            </div>

        );
    }

};
export default Greenblk;