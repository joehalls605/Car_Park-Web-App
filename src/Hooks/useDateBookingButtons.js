import React from "react";
import dates from "../Data/Dates";

const useDateBookingButtons = () => {
  // Create an array of arrays to represent rows and columns
  const rows = Array.from({ length: 4 }, (_, rowIndex) =>
    dates.slice(rowIndex * 7, (rowIndex + 1) * 7)
  );

  return (
    <div className="grid grid-cols-7 gap-2">
      {rows.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((date) => (
            <button
              key={date._id}
              className="bg-blue-700 text-xl text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300"
            >
              {date.text}
            </button>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default useDateBookingButtons;
