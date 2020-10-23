import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';
import Screen from './Screen';


function App() {
  const [calculation, setCalculation] = useState("yo mama is a hoe");


  //the only thing that connects buttons and app.js is this function down here
  function calculate(event){
    console.log(event.target.value);

    //this will og inside the switch statements to pop up on the screen
    //setCalculation(event.target.value)

    var num, num1, total;
    var value = event.target.value;

    // if(value == 1){
    //   num = 1;
    //   setCalculation(num);
    // }
    
    // if(value == 2){
    //   num1 = 2;
    //   setCalculation(num1);

    // }
    

    switch(value){
      case "plus":
        total = num + num1;
        setCalculation(total);
        break;
      
      case "minus":
        total = num - num1;
        setCalculation(total);
        break;
      
      case "divide":
        total = num/num1;
        setCalculation(total);
        break;
      
      case "mult":
        total = num * num1;
        setCalculation(total);
        break;
      
      case "sqrt":
        total = Math.sqrt(num);
        setCalculation(total);
        break;
      
      case "AC":
        setCalculation("00");
        break;

      case "equals":
        setCalculation(total);
        break;
      
      //Need a case for C but fuck this shit for now!

      default:
        setCalculation("yo mama is a hoe");
    
    }
      

  

  }



  return (
      <wrapper>
        <Screen output = {calculation}/>
        <Buttons buttonsFunction = {calculate}/>
      </wrapper>
  );
}

export default App;
