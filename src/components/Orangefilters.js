import React from 'react';

class Orangefilters extends React.Component {
    render() {
        return (

            <div className = "filter-wrapper">
                <div className = "time-wrapper">
                    <div className = "time-light">
                        <p className = "filter-text">
                            Time
                        </p>
                    </div>
                    <div className = "time-dark">
                    <img className = "filter-arrow"  src = "Images/filterarrow.png" alt = "drop down arrow"></img>
                    </div>
                </div>
                <div className = "diet-wrapper">
                    <div className = "diet-light">
                        <p className = "filter-text">
                            Diet
                        </p>
                    </div>
                    <div className = "diet-dark">
                            <button className = "meat-btn">

                            </button>
                            <p className = "filter-subtext">Include meat</p>
                            <button className = "plant-btn">
                                
                            </button>
                            <p className = "filter-subtext">Plant-based</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Orangefilters;