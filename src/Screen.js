import React from 'react';
import App from "./App";
import './Screen.css';


let testVariable;
testVariable = "result";
function Screen(){
    return(
        <div className={"output"} id={"result"}>
            {testVariable}
        </div>

    );
}

export default Screen;
