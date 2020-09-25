import React from 'react';
import App from "./App";
import './Screen.css';

let output = 0;
function Screen(){
    return(
        <div className={"output"} id={"result"}>
            {output}
        </div>

    );
}

export default Screen;
