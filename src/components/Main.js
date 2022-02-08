import React, {useState, useEffect } from 'react';
import Ingredients from "./Ingredients";
import Display from "./Display";

require('dotenv').config()

export let RecipeContext = React.createContext();

function Main() {


    const [glutenFree,setGlutenFree] = useState(false)
    const [vegetarian,setVegetarian] = useState(false)
    const [glutenFreeColor,setGlutenFreeColor] = useState("")
    const [vegetarianColor,setVegetarianColor] = useState("")
    const [search,setSearch] = useState("")
    const [recipes,setRecipes] = useState("")
    const [dropdown,setDropdown] = useState("none")
    const [timeFilter,setTimeFilter] = useState("")


    //FETCH RECIPES



    useEffect(()=>{
        let vegActive;
        let glutenActive;



        glutenFree === true ? glutenActive="&intolerances=gluten" : glutenActive=""; // toggles gluten filter
        vegetarian === true ? vegActive="&diet=vegetarian" : vegActive="";
        console.log("useEffect Fetch")
        console.log(`--time filter:${timeFilter}`)
        console.log(`--veg filter:${vegetarian}`)
        console.log(`--Gluten Filter:${glutenFree}`)
        console.log(`--search is:${search}`)

        
        fetch(`https://api.spoonacular.com/recipes/complexSearch?&includeIngredients=${search}&number=40${glutenActive}${vegActive}${timeFilter}&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&apiKey=${process.env.REACT_APP_SPOON_KEY}`)
        .then((response) => response.json())
        .then(recipesList => {
            setRecipes(recipesList.results)
            console.log(recipesList)
        })
        
        // let vegActive;
        // let glutenActive;



        // glutenFree === true ? glutenActive="&health=gluten-free" : glutenActive=""; // toggles gluten filter
        // vegetarian === true ? vegActive="&health=vegetarian" : vegActive="";
        // console.log("useEffect Fetch")
        // console.log(`--time filter:${timeFilter}`)
        // console.log(`--veg filter:${vegetarian}`)
        // console.log(`--Gluten Filter:${glutenFree}`)
        // console.log(`--search is:${search}`)

        
        // fetch(`https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}${glutenActive}${vegActive}${timeFilter}&from=1&to=100`)
        // .then((response) => response.json())
        // .then(recipesList => {
        //     setRecipes(recipesList.hits)
        //     console.log(recipesList)
        // })

    },[timeFilter,glutenFree,vegetarian,search])



    const searchStringAdd = (newString) => {
        setSearch(newString)
        console.log(newString)
    }
    
    const searchStringRemove = (ingredient) => {
        const ingredientPiece = "," + ingredient;
        const prevSearchString = search;
        const newSearchString = prevSearchString.replace(ingredientPiece,"")

        setSearch(newSearchString)
        console.log(newSearchString);
    }

    const searchStringReset = () => {
        setSearch("")
        console.log("list reset")
    }




    //ORANGE FILTERS


    //Time Filters


    const toggleTimeDropdown = () => {
        let dropdownStatus = "none";

        dropdown === "none" ? dropdownStatus="flex" : dropdownStatus="none";

        setDropdown(dropdownStatus);
        
    }
    const handleTime = (time) => {
        setTimeFilter(`&maxReadyTime=${time}`)
        toggleTimeDropdown();
        console.log(time)
        
    }


    


    //Diet Filters

    const toggleGlutenFilter = (searchInput) => {
        console.log("toggle")
        let glutenStatus=glutenFree;
        if(glutenStatus===false) {
            setGlutenFree(true)
            setGlutenFreeColor("white")
            glutenStatus=true
        } else {
            setGlutenFree(false)
            setGlutenFreeColor("")
            glutenStatus=false
        }
        console.log(glutenStatus)


    }

    const toggleVegetarianFilter = (searchInput) => {
        console.log("toggle")
        let vegStatus=vegetarian;
        if(vegStatus===false) {
            setVegetarian(true)
            setVegetarianColor("white")
            vegStatus=true
        } else {
            setVegetarian(false)
            setVegetarianColor("")
            vegStatus=false
        }
        console.log(vegStatus);

    }



        return (

        <RecipeContext.Provider value={recipes} >
            <div className = "base-wrapper-main">
                <Ingredients glutenFree={glutenFree}
                vegetarian={vegetarian}
                search={search}
                searchStringAdd={searchStringAdd}
                searchStringRemove={searchStringRemove}
                searchStringReset={searchStringReset}
                />
                <Display toggleGlutenFilter={toggleGlutenFilter}
                glutenFreeColor={glutenFreeColor} 
                toggleVegetarianFilter={toggleVegetarianFilter}
                vegetarianColor={vegetarianColor}
                searchState={search}
                toggleTimeDropdown={toggleTimeDropdown}
                dropdown={dropdown}
                handleTime={handleTime}
                recipes={recipes}
                />
            </div>
        </RecipeContext.Provider>
        );
}




export default Main;