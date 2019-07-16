import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="SpecialButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.spOperator}
    </button>
  );
};

export default SpecialButton
