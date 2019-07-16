import React, { useState } from "react";
  
//import any components needed

//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperatorsState] = useState(operators);
  
  let operatorFunction = function(array) {
    array.map(operatorObject, ()=>{
      return (
        <button>{operatorObject.value}</button>
      )
    })
  }

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorFunction(operators)}
    </div>
  );
};

export default Operators