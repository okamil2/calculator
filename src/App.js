import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';
import Screen from './Screen';
import * as utils from './utilities';


function App() {
  const [calculation, setCalculation] = useState("yo mama is a hoe");

  const [arrayOutput, setArrayOutput] = useState([]);


  //the only thing that connects buttons and app.js is this function down here
  function calculate(event){
    //utils.calculate(event.target.value);

    let tempArray = arrayOutput;
    
    //console.log(event.target.value);

    //this will og inside the switch statements to pop up on the screen
    //setCalculation(event.target.value)

    //var num, num1, total;
    var value = event.target.value;
    

  
    /**
     * Check if it's a operator or a number
     *               
     * if it's a number
     *  if array[array.length - 1] is a number (last button pressed)
     *    multiply that number by 10 and add the current button value
     *  Show it on the screen **DONE**
     * 
     * 
     * if it's an operator
     *  if operator is sqrt
     * 
     *  if operator is equals
     * 
     *  if operator is AC || C
     * 
     * ************* DONE *************
     *  
     *  if array length == 0 
     *    show on screen the operator
     *  else if array length > 2
     *    calculateTheResult(array)
     *    store the result in index 0
     *    append the operator to the array (index 1) (The current button value)
     *    show on screen the result
     *  else (if the array length != 0)
     *    append the operator to the array
     *    show on screen the value
     * 
     *  // You could also put this in the utilities file
     *  function calculateTheResult(array)
     *    firstNum = array[0]
     *    secNum = array[2]
     *    operator = array[1]
     * 
     *    switch(operator)
     *      case plus
     *        return firstNum + secNum;
     *        break;
     * 
     *      case minus
     *        return firsstNum - secNum
     *        break   
     *  
     *      case divide
     *        return firstNum / secNum
     *        break
     * 
     *      case mult
     *        return firstNum * secNum
     *        break
     *        
     *      ********** DONE BUT NEEDS WORK **********
     *
     */

    if(utils.isOperationButton(value)){
      if(value === "sqrt"){
        tempArray[0] = Math.sqrt(tempArray[0]);
        setCalculation(tempArray[0]);
      }
      else if(value === "AC"){
        tempArray = [];
        setCalculation(0);
      }
      else if(value === "equals"){
        if(tempArray.length == 0){
          setCalculation(0);
        }
        else{
          if(tempArray.length > 2){
            tempArray[tempArray.length - 1] = casesOperations(tempArray);
          } 
          tempArray = [ tempArray[tempArray.length -1] ];
          setCalculation(tempArray[tempArray.length -1]);
        }

      }
      else if(tempArray.length === 0){
        setCalculation(0);
      }
       else if(tempArray.length > 2){
        tempArray[tempArray.length - 1] = casesOperations(tempArray);
        setCalculation(tempArray[tempArray.length - 1]);
        tempArray.push(value);
      } 
      else if(tempArray.length != 0) {
        tempArray.push(value);
      }

    }
    else {  
      // If it's empty, add the value to the array
      if(tempArray.length === 0){
        tempArray.push(value);
        setCalculation(value);
      } 
      else {
        //check if its a number
        if(!utils.isOperationButton(tempArray[tempArray.length-1])){
          //debugger;
          value = value * 1;
          var results = tempArray[tempArray.length - 1] * 10 + value;
          tempArray[tempArray.length - 1] = results;
          setCalculation(results);
        } else {
            tempArray.push(value);
            // tempArray[tempArray.length -1] = casesOperations(tempArray);
            // setCalculation(tempArray[tempArray.length - 1]);
        }

      }

    }


// ******************** work on the C button ***************************


  function casesOperations(array){
    var firstNum = array[tempArray.length - 3] * 1;
    var secNum = array[tempArray.length - 1] * 1;
    var operator = array[tempArray.length - 2];
    //debugger;
    switch(operator){
      case "plus":
        return firstNum + secNum;
        break;
      
      case "minus":
        return firstNum - secNum;
        break;
      
      case "divide":
        return firstNum/secNum;
        break;
      
      case "mult":
        return firstNum * secNum;
        break;


      //Need a case for C but fuck this shit for now!

      default:
        setCalculation("yo mama is a hoe");
    
    }
      

    // At the verybottom of this function
    
  }
  setArrayOutput(tempArray);


}

  return (
      <wrapper>
        <Screen output = {calculation}/>
        <Buttons buttonsFunction = {calculate}/>
      </wrapper>
  );
}


export default App;

