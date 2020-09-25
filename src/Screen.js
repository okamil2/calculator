import React from 'react';
import App from "./App";
import './Screen.css';

let output = 0;
function Screen(){
    return(
        <div className={"output"}>
            {output}
        </div>

    );
}

export default Screen;
