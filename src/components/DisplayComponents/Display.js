import React from "react";

const Display = (props) => {
const {displayValue} = props;
  return <div className="display">{/* Display any props data here */}
           {displayValue}
         </div>;
};

export default Display