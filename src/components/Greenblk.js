import React, {useState} from 'react';


function Greenblk(props) {



    const [search,setSearch] = useState('')
    const [suggestions,setSuggestions] = useState([])
    const [list,setList] = useState([])
    const [inputValue,setInputValue] = useState('')
    const [timer,setTimer]  = useState('')


    const handleChange = e => {

        setInputValue(e.target.value)

        clearTimeout(timer)
        const val = e.target.value
        const newTimer = setTimeout(() => {
            if(val !== "")
            autoComplete(val)
        }, 500)

        setTimer(newTimer)

      }


      const autoComplete = (search) => {
        const API_KEY = "82138415fc524a1d950b2bc22191c8cc";
        console.log(`search ${search}`);
        fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${search}&number=5&apiKey=${API_KEY}`)
        .then((response) => response.json())
        .then(autoComplete => {
            setSuggestions(autoComplete);
        })
        console.log(suggestions);
    };



    const handleClick = (selected) => {
        let searchString = search + " " + selected;
        let ingredientsList = list.concat([selected]);
        setSearch(searchString);
        setSuggestions("");
        setList(ingredientsList)


        console.log(searchString)
        console.log(ingredientsList)

        props.fetchRecipes(searchString)
    }
    



    const deleteIngredient = (ingredient) => {

        //remove clicked ingredient from list
        const listCopy = [...list];
        const updatedList = listCopy.filter(item => item !== ingredient);

        setList(updatedList)

        //remove clicked ingredient from search state
        const ingredientPiece = " " + ingredient;
        const prevSearchString = search;
        const newSearchString = prevSearchString.replace(ingredientPiece,"")

        setSearch(newSearchString)
        props.fetchRecipes(newSearchString);

        console.log(newSearchString);
    }

    const resetSearch = () => { //Remove all ingredients
        setList([]);
        setSearch("")
        
        console.log("list reset")
    }


        return (

            <div className = "green-block-main">
                <div className = "green-upper-wrapper">
                    <h4>Ingredients</h4>
                    <form className = "search-form">
                        <input className = "search-bar" type="text" value = {inputValue} onChange= {handleChange}>
                        </input>
                    </form>
                    <div className = "green-info-wrapper">
                        {suggestions.length === 0 && list.length === 0 &&(
                        <div className = "green-instructions-wrapper">
                        <img className = "green-arrow"  src = "Images/greenarrow.png" alt = "up arrow"></img>
                        <p className = "green-instructions">Add an ingredient to begin your search</p>

                        </div>
                        )}
                        {suggestions.length !== 0 && (
                        <div className = "auto-complete-dropdown">
                            {suggestions.map(hit =>{
                                return (
                                    <p className = "suggestions" key = {hit.name} onClick = {()=> {handleClick(hit.name)}}>{hit.name}</p>
                                )
                            })}
                        </div>
                        )}
                        {list.length !== 0 &&(
                            <div className="ing-list">
                                {list.map(ing => {
                                    return (
                                        <div key={ing} className="ing-wrapper">
                                            <li className="ingredient">{ing}</li>
                                            <button onClick={() => deleteIngredient(ing)} className="ing-x-button">X</button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
                {list.length !== 0 &&(
                    <button className = "reset-button" onClick={() => resetSearch()}>Reset</button>
                )}

            </div>

        );
    }

export default Greenblk;