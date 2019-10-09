import React, { useState } from "react";
import { SpecialButton } from "./SpecialButton.js";
import { specials } from "../../../data.js";

//import any components needed

//Import your array data to from the provided data file

export const Specials = props => {
  // STEP 2 - add the imported data to state
  const [sButton] = useState(specials);
  return (
    <div>
      {sButton.map((spec, index) => (
        <SpecialButton key={index} specials={spec} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
