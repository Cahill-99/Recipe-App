import React, {useState, useRef} from 'react';

require('dotenv').config()


function Ingredients(props) {



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
        console.log(`search ${search}`);
        fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${search}&number=5&apiKey=${process.env.REACT_APP_SPOON_KEY}`)
        .then((response) => response.json())
        .then(autoComplete => {
            setSuggestions(autoComplete);
        })
        console.log(suggestions);
    };



    const handleClick = (selected) => {
        let searchString = props.search + "," + selected;
        let ingredientsList = list.concat([selected]);
        setSuggestions("");
        setList(ingredientsList);
        console.log(list);

        localStorage.setItem("list",JSON.stringify(ingredientsList));
        setInputValue("");
        searchFocus();




        console.log(searchString)
        console.log(ingredientsList)

        props.searchStringAdd(searchString)

    }
    
    // focus on input feild on suggestion click
    const InputEl = useRef();
    const searchFocus = () => {


        InputEl.current.focus();
    }
    



    const deleteIngredient = (ingredient) => {

        //remove clicked ingredient from list
        const listCopy = [...list];
        const updatedList = listCopy.filter(item => item !== ingredient);

        setList(updatedList)
        localStorage.setItem("list",JSON.stringify(updatedList));

        //remove clicked ingredient from search state

        props.searchStringRemove(ingredient)

    }

    const resetSearch = () => { //Remove all ingredients
        setList([]);
        localStorage.setItem("list",JSON.stringify([]));
        props.searchStringReset();
        

    }


        return (

            <div className = "green-block-main">
                <div className = "green-upper-wrapper">
                    <h4>Ingredients</h4>
                    <form className = "search-form">
                        <input className = "search-bar" ref={InputEl} type="text" value = {inputValue} onChange= {handleChange}>
                        </input>
                    </form>
                    <div className = "green-info-wrapper">
                        {suggestions.length === 0 && list.length === 0 &&(
                        <div className = "green-instructions-wrapper">
                        <img className = "green-arrow"  src = {process.env.PUBLIC_URL +'/img/greenarrow.png'} alt = "up arrow"></img>
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
                        {localStorage.getItem("list") && (
                            <div className="ing-list">
                                {JSON.parse(localStorage.getItem("list")).map(ing => {
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

export default Ingredients;