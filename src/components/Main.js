import React from 'react';
import Greenblk from "./Greenblk";
import Blueblk from "./Blueblk";

class Main extends React.Component {

    render() {
        return (

        <div className = "base-wrapper-main">
            <Greenblk />
            <Blueblk />
        </div>
        );
    }


}
const api = () => {

    
    const APP_ID = "efb4537f";
    const APP_KEY = "3957081447cbddc95fd0ae1dda9e5529"
    }

export default Main;