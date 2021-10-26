import React from 'react';


class Greenblk extends React.Component {
    render() {
        return (

            <div className = "green-block-main">
                <h4>Ingredients</h4>
                <form className = "search-form">
                    <input className = "search-bar">
                    </input>
                    <img className = "green-arrow"  src = "public/Union 2.png" ></img>
                </form>
            </div>

        );
    }
}

export default Greenblk;