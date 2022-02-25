import React, {useState } from 'react';
import MobileResults from './MobileResults';
import MobileIngredients from './MobileIngredients';

function MobileWrap(props) {

    const [ingredientsStatus,setIngredientsStatus] = useState(false);

const expandIngredients = () => {
    ingredientsStatus === false ? setIngredientsStatus(true) : setIngredientsStatus(false);
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
                    <div className = "mobile-time-filter">
                        <h3>Time</h3>
                    </div>
                    <div className = "mobile-diet-filter">
                        <h3>Diet</h3>
                    </div>
                
                </div>
            </div>)}
            </div>)}

        </div>
    )
}

export default MobileWrap;