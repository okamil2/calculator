import React from 'react';
import './Buttons.css';
//import App from "./App";


function Buttons(props){
    return(
        <div className="keys">
            <div class={"container"}>
                <div>
                    <button className={"key AcColor"} value={"AC"} onClick={props.buttonsFunction}>AC</button>
                    <button className={"key CColor"} value={"C"} onClick={props.buttonsFunction}>C</button>
                    <button className={"key sqrtColor"} value={"sqrt"} onClick={props.buttonsFunction}>√</button>
                    <button className={"key addColor"} value={"plus"} onClick={props.buttonsFunction}>+</button>
                </div>

                <div>
                    <button className={"key"} value={1} onClick={props.buttonsFunction}>1</button>
                    <button className={"key"} value={2} onClick={props.buttonsFunction}>2</button>
                    <button className={"key"} value={3} onClick={props.buttonsFunction}>3</button>
                    <button className={"key minusColor"} value={"minus"} onClick={props.buttonsFunction}>-</button>
                </div>

                <div>
                    <button className={"key"} value={4} onClick={props.buttonsFunction}>4</button>
                    <button className={"key"} value={5} onClick={props.buttonsFunction}>5</button>
                    <button className={"key"} value={6} onClick={props.buttonsFunction}>6</button>
                    <button className={"key divColor"} value={"divide"} onClick={props.buttonsFunction}>÷</button>
                </div>

                <div>
                    <button className={"key"} value={7} onClick={props.buttonsFunction}>7</button>
                    <button className={"key"} value={8} onClick={props.buttonsFunction}>8</button>
                    <button className={"key"} value={9} onClick={props.buttonsFunction}>9</button>
                    <button className={"key multColor"} value={"mult"} onClick={props.buttonsFunction}>x</button>
                </div>

                <div>
                    <button className={"key"} value={"dot"} onClick={props.buttonsFunction}>.</button>
                    <button className={"key"} value={0} onClick={props.buttonsFunction}>0</button>
                    <button className={"key"} value={"00"} onClick={props.buttonsFunction}>00</button>
                    <button className={"key equalsColor"} value={"equals"} onClick={props.buttonsFunction}>=</button>
                </div>
            </div>
        </div>
    );
}
export default Buttons;
