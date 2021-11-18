import React from 'react';


class Greenblk extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search:'',
            recipes:''
          
};
    this.handleChange = this.handleChange.bind(this);
    this.fetchRecipes = this.fetchRecipes.bind(this);
      //  this.updateSearch = this.updateSearch.bind(this);
      //  this.checkTyping = this.checkTyping.bind(this);

    }


    handleChange(evt) {
        if(this._timeout){ //if there is already a timeout in process cancel it
            clearTimeout(this._timeout);
        }
        const val = evt.target.value;
        this._timeout = setTimeout(()=>{
           this._timeout = null;
           this.setState({
              search:val
           });
           this.fetchRecipes(this.state.search);
        },1000);

      }




    fetchRecipes = (search) => {
        const APP_ID = "efb4537f";
        const APP_KEY = "3957081447cbddc95fd0ae1dda9e5529";
        //let query = this.state;
        console.log(this.state.search);
        
        fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
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
                    <img className = "green-arrow"  src = "Images/greenarrow.png" alt = "up arrow"></img>
                    <p className = "green-instructions">Add an ingredient to begin your search</p>
                </div>
            </div>

        );
    }

};
export default Greenblk;