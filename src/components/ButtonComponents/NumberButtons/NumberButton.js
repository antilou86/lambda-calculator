import React from "react";


const NumberButton = (props) => {
  if (props.num !== "0") {
    return (<button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.num}
    </button> )
  } else {
  return (
    <button className="zeroButton" onClick={props.handleClick}>
      {props.num}
    </button>
  )};
};

export default NumberButton;