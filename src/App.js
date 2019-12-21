import React, { useState } from "react";
import "./App.scss";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  const [displayValue, setDisplayValue] = useState(' ');
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  const handleNumClick = (value) => {
    setDisplayValue(displayValue + value)
  };

  const handleOperatorClick = (value) => {
    if (value === '=') { setDisplayValue(eval(displayValue))
    } else { setDisplayValue(displayValue + ' ' + value)
    }}

  const handleSpecialClick = (value) => {
    if (value === 'C') {
    setDisplayValue(' ')
    } else if (value === "+/-") {
      setDisplayValue('-'+displayValue)
    } else {
      setDisplayValue(displayValue +' '+"%")
    }
  };

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display displayValue={displayValue}
                 setDisplayValue={setDisplayValue} />
        <div className="buttonsContainer">
          <Specials handleSpecialClick={handleSpecialClick}/>
          <Numbers handleNumClick={handleNumClick}/>
        </div>
        <Operators handleOperatorClick={handleOperatorClick}/>
      </div>
    </div>
  );
}

export default App;
