import React from 'react';
import './Buttons.css';
import App from "./App";

function Buttons(){
    return(
        <div className="keys">
            <div class={"container"}>
                <div>
                    <button className={"key AcColor"} id={"clear"}>AC</button>
                    <button className={"key CColor"} id={"backSpace"}>C</button>
                    <button className={"key sqrtColor"} >√</button>
                    <button className={"key addColor"} >+</button>
                </div>

                <div>
                    <button className={"key"}>1</button>
                    <button className={"key"}>2</button>
                    <button className={"key"}>3</button>
                    <button className={"key minusColor"} >-</button>
                </div>

                <div>
                    <button className={"key"}>4</button>
                    <button className={"key"}>5</button>
                    <button className={"key"}>6</button>
                    <button className={"key divColor"} >÷</button>
                </div>

                <div>
                    <button className={"key"}>7</button>
                    <button className={"key"}>8</button>
                    <button className={"key"}>9</button>
                    <button className={"key multColor"} >x</button>
                </div>

                <div>
                    <button className={"key"}>.</button>
                    <button className={"key"}>0</button>
                    <button className={"key"}>00</button>
                    <button className={"key equalsColor"}>=</button>
                </div>
            </div>
        </div>
    );
}
export default Buttons;
