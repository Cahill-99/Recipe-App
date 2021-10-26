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

export default Main;