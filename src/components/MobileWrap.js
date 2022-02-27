import React, {useState } from 'react';
import MobileResults from './MobileResults';
import MobileIngredients from './MobileIngredients';

function MobileWrap(props) {

    const [ingredientsStatus,setIngredientsStatus] = useState(false);
    const [timeOpen,setTimeOpen] = useState(false);
    const [dietOpen,setDietOpen] = useState(false);

const expandIngredients = () => {
    ingredientsStatus === false ? setIngredientsStatus(true) : setIngredientsStatus(false);
}

const expandTime = () => {
    timeOpen === false ? setTimeOpen(true) : setTimeOpen(false);
}

const expandDiet = () => {
    dietOpen === false ? setDietOpen(true) : setDietOpen(false);
}





    return (
        <div className = "mobile-wrapper">
            {ingredientsStatus === true && (<MobileIngredients glutenFree={props.glutenFree}
                vegetarian={props.vegetarian}
                search={props.search}
                searchStringAdd={props.searchStringAdd}
                searchStringRemove={props.searchStringRemove}
                searchStringReset={props.searchStringReset}
                expandIngredients={expandIngredients}/>)}
            {ingredientsStatus === false && (<div className = "results-wrapper"><MobileResults/>

            {ingredientsStatus === false && (<div className = "green-mobile">
                <div className = "mobile-green-button" onClick={()=> expandIngredients()}>
                    <img src = {process.env.PUBLIC_URL +'/img/plus.png'} className = "mobile-plus" alt = "plus sign"></img>
                </div>
                <div className = "mobile-filter-wrapper">
                    {timeOpen === false && (<div className = "mobile-time-filter" onClick={()=> expandTime()}>
                        <h3>Time</h3>
                    </div>)}
                    {timeOpen === true && (<div className = "mobile-time-filter-expanded" onClick={()=> expandTime()}>
                        <h3 className = "time-label">Time</h3>
                        <div className = "mobile-button-wrapper">
                            <button className = "mobile-filter-option" onClick={()=> props.handleTime("15")}>15 min</button>
                        
                            <button className = "mobile-filter-option" onClick={()=> props.handleTime("30")}>30 min</button>

                            <button className = "mobile-filter-option" onClick={()=> props.handleTime("60")}>1 hr</button>
                        </div>
                    </div>)}
                    {dietOpen === false && (<div className = "mobile-diet-filter" onClick={()=> expandDiet()}>
                        <h3>Diet</h3>
                    </div>)}
                    {dietOpen === true && (<div className = "mobile-diet-filter-expanded" onClick={()=> expandDiet()}>
                        <h3 className = "diet-label">Diet</h3>
                        <div className = "mobile-button-wrapper">
                            <button className = "mobile-filter-option" onClick={()=> props.toggleGlutenFilter()}>Gluten-Free</button>
                        
                            <button className = "mobile-filter-option" onClick={()=> props.toggleVegetarianFilter()}>Vegetarian</button>
                        </div>
                    </div>)}
                
                </div>
            </div>)}
            </div>)}

        </div>
    )
}

export default MobileWrap;