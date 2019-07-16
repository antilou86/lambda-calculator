import React, { useState } from "react";

//import any components needed

//Import your array data to from the provided data file
import { numbers } from '../../../data';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState(numbers);

  let numberFunction = function(array) {
    array.map( num, () => {
       return (
         <button>{num}</button>
       )
    }
    )
  };

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberFunction(numbers)}
    </div>
  );
};

export default Numbers