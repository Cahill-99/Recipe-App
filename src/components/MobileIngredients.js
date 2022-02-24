import React, { useState, useRef } from 'react';



function MobileIngredients(props) {

    const [suggestions,setSuggestions] = useState([]);
    const [list,setList] = useState([]);
    const [inputValue,setInputValue] = useState('');
    const [timer,setTimer]  = useState('');

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
    localStorage.setItem("activeList","true");
    console.log(list);

    localStorage.setItem("list",JSON.stringify(ingredientsList));
    setInputValue("");
    searchFocus();




    console.log(searchString)
    console.log(ingredientsList)

    props.searchStringAdd(searchString)

}

const InputEl = useRef();
const searchFocus = () => {


    InputEl.current.focus();
};

return(
<div className = "ingredients-menu">
                <div className = "top-bar"> 
                    <h6>Ingredients</h6>
                    <img src = {process.env.PUBLIC_URL +'/img/backarrow.png'} className = "back-arrow-ing" alt = "back arrow"></img>
                </div>
                <form className = "search-form">
                    <input className = "search-bar" ref={InputEl} type="text" value = {inputValue} onChange= {handleChange}>
                    </input>
                </form>
            </div>
)
}
export default MobileIngredients