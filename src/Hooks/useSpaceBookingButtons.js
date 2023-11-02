import React from "react";
import dates from "../Data/Dates";

const useSpaceBookingButtons = (handleClick) => {
  const buttonClasses = (rowIndex, colIndex) => {
    let buttonClass = "bg-green-700 text-lg text-white px-4 py-2 rounded hover:bg-green-900 transition-colors duration-300 whitespace-no-wrap";

    if ((rowIndex === 0 && colIndex >= 5) || (rowIndex === 2 && colIndex >= 5)) {
      buttonClass = "bg-red-700 text-lg text-white px-4 py-2 rounded hover:bg-red-900 transition-colors duration-300 whitespace-no-wrap";
    } else if (rowIndex === 1) {
      buttonClass = "bg-orange-700 text-lg text-white px-4 py-2 rounded hover:bg-orange-900 transition-colors duration-300 whitespace-no-wrap";
    }

    return buttonClass;
  };

  return (
    <div className="flex justify-center items-center">
      <h2>SPACE booking buttons</h2>
   
    </div>
  );
};

export default useSpaceBookingButtons;
