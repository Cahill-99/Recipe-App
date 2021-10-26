import React from 'react';


class Greenblk extends React.Component {
    render() {
        return (

            <div className = "green-block-main">
                <h4>Ingredients</h4>
                <form className = "search-form">
                    <input className = "search-bar">
                    </input>
                </form>
                <div className = "green-info-wrapper">
                    <img className = "green-arrow"  src = "Images/greenarrow.png" alt = "up arrow"></img>
                    <p className = "green-instructions">Add an ingredient to begin your search</p>
                </div>
            </div>

        );
    }
}

export default Greenblk;