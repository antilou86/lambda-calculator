import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton'
//Import your array data to from the provided data file
import { numbers } from '../../../data';
import { handleClick } from '../../DisplayComponents/Display'
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState(numbers);

 

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       { numbers.map(num => {
         return (<NumberButton num={num} numbersState={numbersState} setNumbersState={setNumbersState} handleClick={handleClick()}/>);
       })}
    </div>
  );
};

export default Numbers