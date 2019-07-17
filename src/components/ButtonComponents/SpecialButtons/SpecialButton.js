import React from "react";

const SpecialButton = (props) => {
  const {handleSpecialClick, spOperator} = props;
  return (
    <button className="SpecialButton" onClick={()=>{handleSpecialClick(spOperator)}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {spOperator}
    </button>
  );
};

export default SpecialButton
