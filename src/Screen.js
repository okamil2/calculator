import React from 'react';
//import App from "./App";
import './Screen.css';


function Screen(props){
    return(
        <div className={"output"}>
            {props.output}
        </div>

    );
}

export default Screen;
