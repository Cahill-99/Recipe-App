import React, {useState} from 'react';
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

    const fetchRecipes = (search) => {
        

        let vegActive;
        let glutenActive;
        setSearch(search);


        glutenFree === true ? glutenActive="&health=gluten-free" : glutenActive=""; // toggles gluten filter
        vegetarian === true ? vegActive="&health=vegetarian" : vegActive=""; // toggles vegetarian filter
        let searchURL = `https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}${glutenActive}${vegActive}${timeFilter}`
        console.log(searchURL)
        
        fetch(searchURL)
        .then((response) => response.json())
        .then(recipesList => {
            setRecipes(recipesList)
            console.log(recipesList)
        })
    };
    


    //ORANGE FILTERS


    const toggleTimeDropdown = () => {
        let dropdownStatus = "none";

        dropdown === "none" ? dropdownStatus="flex" : dropdownStatus="none";

        setDropdown(dropdownStatus);
        
    }

    const handleTime = (time, searchInput) => {
        setTimeFilter(`time=${time}`)

        if(search!== "")
        {setTimeout(() => {fetchRecipes(searchInput);},200) //Timeout for fetch recipes to counter the info lag
        }
    }

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
        if(search !== "") 
        {setTimeout(() => {fetchRecipes(searchInput);},200) //Timeout for fetch recipes to counter the info lag
        }

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
        if(search !== "") 
        {setTimeout(() => {this.fetchRecipes(searchInput);},200) //Timeout for fetch recipes to counter the info lag
        }
    }



        return (

        <div className = "base-wrapper-main">
            <Greenblk glutenFree={glutenFree}
            vegetarian={vegetarian}
            fetchRecipes={fetchRecipes}
            search={search}
            />
            <Blueblk toggleGlutenFilter={toggleGlutenFilter}
            glutenFreeColor={glutenFreeColor} 
            toggleVegetarianFilter={toggleVegetarianFilter}
            vegetarianColor={vegetarianColor}
            searchState={search}
            toggleTimeDropdown={toggleTimeDropdown}
            dropdown={dropdown}
            handleTime={handleTime}
            />
        </div>
        );
}




export default Main;