import React, {useState, useEffect} from 'react';
import Greenblk from "./Greenblk";
import Blueblk from "./Blueblk";

require('dotenv').config()

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



        glutenFree === true ? glutenActive="&health=gluten-free" : glutenActive=""; // toggles gluten filter
        vegetarian === true ? vegActive="&health=vegetarian" : vegActive="";
        console.log("useEffect Fetch")
        console.log(`--time filter:${timeFilter}`)
        console.log(`--veg filter:${vegetarian}`)
        console.log(`--Gluten Filter:${glutenFree}`)
        console.log(`--search is:${search}`)


        fetch(`https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}${glutenActive}${vegActive}${timeFilter}&from=1&to=100`)
        .then((response) => response.json())
        .then(recipesList => {
            setRecipes(recipesList.hits)
            console.log(recipesList)
        })

    },[timeFilter,glutenFree,vegetarian,search])



    const searchStringAdd = (newString) => {
        setSearch(newString)
        console.log(newString)
    }
    
    const searchStringRemove = (ingredient) => {
        const ingredientPiece = " " + ingredient;
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
        setTimeFilter(`&time=${time}`)
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

        <div className = "base-wrapper-main">
            <Greenblk glutenFree={glutenFree}
            vegetarian={vegetarian}
            search={search}
            searchStringAdd={searchStringAdd}
            searchStringRemove={searchStringRemove}
            searchStringReset={searchStringReset}
            />
            <Blueblk toggleGlutenFilter={toggleGlutenFilter}
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
        );
}




export default Main;