import React, {useState, useEffect } from 'react';
import Ingredients from "./Ingredients";
import Display from "./Display";

require('dotenv').config()

export let RecipeContext = React.createContext();

function Main() {


    const [glutenFree,setGlutenFree] = useState(() => {
        return localStorage.getItem("glutenFree") || false;
    })
    const [vegetarian,setVegetarian] = useState(() => {
        const saved = localStorage.getItem("vegetarian");
        const initialValue = saved;
        return initialValue || "";
    })
    const [glutenFreeColor,setGlutenFreeColor] = useState(() => {
        const saved = localStorage.getItem("glutenFreeColor");
        const initialValue = saved;
        return initialValue || "";
    })
    const [vegetarianColor,setVegetarianColor] = useState(() => {
        const saved = localStorage.getItem("vegetarianColor");
        const initialValue = saved;
        return initialValue || "";
    })
    const [search,setSearch] = useState(() => {
        const saved = localStorage.getItem("searchString");
        const initialValue = saved;
        return initialValue || "";
    })
    const [recipes,setRecipes] = useState("")
    const [dropdown,setDropdown] = useState("none")
    const [timeFilter,setTimeFilter] = useState(() => {
        const saved = localStorage.getItem("timeFilter");
        const initialValue = saved;
        return initialValue || "";
    })


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


    },[timeFilter,glutenFree,vegetarian,search])



    const searchStringAdd = (newString) => {
        setSearch(newString)
        console.log(newString)
        localStorage.setItem("searchString",newString)
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
        localStorage.setItem("timeFilter",time)
        toggleTimeDropdown();
        console.log(time)
        
    }





    //Diet Filters

    const toggleGlutenFilter = () => {
        console.log("toggle")
        let glutenStatus=glutenFree;
        if(glutenStatus===false) {
            setGlutenFree(true)
            localStorage.setItem("glutenFree",true)
            setGlutenFreeColor("white")
            localStorage.setItem("glutenFreeColor","white")
            glutenStatus=true
        } else {
            setGlutenFree(false)
            localStorage.setItem("glutenFree",false)
            setGlutenFreeColor("")
            localStorage.setItem("glutenFreeColor","")
            glutenStatus=false
        }
        console.log(glutenStatus)


    }

    const toggleVegetarianFilter = () => {
        console.log("toggle")
        let vegStatus=vegetarian;
        if(vegStatus===false) {
            setVegetarian(true)
            localStorage.setItem("vegetarian",true)
            setVegetarianColor("white")
            localStorage.setItem("vegetariancolor","white")
            vegStatus=true
        } else {
            setVegetarian(false)
            localStorage.setItem("vegetarian",false)
            setVegetarianColor("")
            localStorage.setItem("vegetariancolor","")
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