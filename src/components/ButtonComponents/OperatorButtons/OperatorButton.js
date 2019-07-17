import React from "react";

const OperatorButton = (props) => {
  const {handleOperatorClick, operatorObject} = props
  return (
    <button className="operatorButton" onClick={()=>handleOperatorClick(operatorObject.value)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {operatorObject.char}
    </button>
  );
};

export default OperatorButton
