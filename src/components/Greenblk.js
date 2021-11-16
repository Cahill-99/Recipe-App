import React from 'react';


class Greenblk extends React.Component {

    constructor(props) {
        super(props);
        this.state = {search: ""};

        this.updateSearch = this.updateSearch.bind(this);

    }


    componentDidMount() {
        //this.fetchRecipes()
    };

    checkTyping() {
        let timer;

        clearTimeout(timer);

        timer = setTimeout(() => {
            console.log("Wassup")
        }, 1500);
        
        let testFunc = () => {
            console.log(this.state)
            console.log(timer);
        };

        setTimeout(testFunc, 1500)


    }


    updateSearch(event) {
        const input = event.currentTarget.value
        this.setState({search:input});




        this.checkTyping();
    }


    //fetchRecipes = () => {
       // const APP_ID = "efb4537f";
      //  const APP_KEY = "3957081447cbddc95fd0ae1dda9e5529"
        
       // fetch(`https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`)
       // .then((response) => response.json())
       // .then(recipesList => {
       //     this.setState({ recipes: recipesList})
        //    console.log(recipesList)
      //  })
       // console.log(this.state);
   // };
    render() {

        return (

            <div className = "green-block-main">
                <h4>Ingredients</h4>
                <form className = "search-form">
                    <input className = "search-bar" type="text" onChange= {this.updateSearch}>
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