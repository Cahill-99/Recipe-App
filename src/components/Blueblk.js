import React from 'react';
import Orangefilters from './Orangefilters';


class Blueblk extends React.Component {
    render() {
        return (

            <div className = "blue-block-main">
                <Orangefilters/>
                <div className = "white-block-main">
                <img className = "placeholder-plate"  src = "Images/plate.png" alt = "plate with fork"></img>
                </div>
            </div>
        );
    }
}

export default Blueblk;