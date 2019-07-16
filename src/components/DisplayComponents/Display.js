import React, { useState } from "react";
import Operators from "./Operators";
import Specials from './Specials';
import Numbers from './Numbers'

const Display = (props) => {

  const [displayState, setDisplayState] = useState(0);
  
 const handleClick = (props) => {
    setDisplayState(displayState + props.child)
  }

  return <div className="display">{/* Display any props data here */}
           {displayState}
         </div>;
};

export default <Display handleClick={handleClick()}/>