import React from "react";


const NumberButton = (props) => {
 const {num, handleNumClick} = props;

  if (props.num !== "0") {
    return (<button onClick={() => handleNumClick(num)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {num}
    </button> )
  } else {
  return (
    <button className="zeroButton" onClick={() => handleNumClick(num)}>
      {num}
    </button>
  )};
};

export default NumberButton;