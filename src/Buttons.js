import React from 'react';
import './Buttons.css';
import App from "./App";

function Buttons(){
    return(

        <div className="keys">
            <div class={"container"}>
                    <div>
                        <button className={"key key1"} id={"clear"}>AC</button>
                        <button className={"key key2"} id={"backSpace"}>C</button>
                        <button className={"key key3"} >√</button>
                        <button className={"key key4"} >+</button>
                    </div>


                    <div>
                        <button className={"key"}>1</button>
                        <button className={"key"}>2</button>
                        <button className={"key"}>3</button>
                        <button className={"key key5"} >-</button>
                    </div>

                    <div>
                        <button className={"key"}>4</button>
                        <button className={"key"}>5</button>
                        <button className={"key"}>6</button>
                        <button className={"key key6"} >÷</button>
                    </div>

                    <div>
                        <button className={"key"}>7</button>
                        <button className={"key"}>8</button>
                        <button className={"key"}>9</button>
                        <button className={"key key7"} >x</button>
                    </div>

                    <div>
                        <button className={"key"}>.</button>
                        <button className={"key"}>0</button>
                        <button className={"key"}>00</button>
                        <button className={"key key8"} id={"calculate"}>=</button>
                    </div>
            </div>
        </div>
    );
}
export default Buttons;
// function getOutput(){
//     return document.getElementById("output-value").innerText;
// }
//
// var opertaor = document.getElementsByClassName("operator");
// for(var i=0; i<opertaor.length; i++){
//     opertaor[i].addEventListener('click', function(){
//         if(this.id=="clear"){
//             document.write("");
//         }
//         else if(this.id=="backSpace"){
//             var output = getOutput().toString();
//             if (output){
//                 output = output.substr(0, output.length-1);
//                 document.write(output);
//             }
//         }
//         else{
//
//         }
//
//     });
// }
//
// var Key = document.getElementsByClassName("Key");
// for(var i=0; i<Key.length; i++) {
//     opertaor[i].addEventListener('click', function () {
//
//     });
//
//
// }



