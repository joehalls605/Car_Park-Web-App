import React from "react";
import dates from "../Data/Dates";

const useDateBookingButtons = () => {
  // Create an array of arrays to represent rows and columns
  const rows = Array.from({ length: 4 }, (_, rowIndex) =>
    dates.slice(rowIndex * 7, (rowIndex + 1) * 7)
  );

  const datesColour = (timeSlots) => {
    let bookingTotal = 0;
    timeSlots.forEach((slot) => {
      if (slot.booked === true) {
        bookingTotal++;
      }
    });

    if (bookingTotal > 9) {
      return "bg-red-700 text-xl text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300";
    } else if (bookingTotal >= 5 && bookingTotal < 9) {
      return "bg-orange-700 text-xl text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300";
    } else {
      return "bg-green-700 text-xl text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300";
    }
  };

  return (
    <div className="grid grid-cols-7 gap-2 p-10">
      {rows.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((date) => {
            const buttonClass = datesColour(date.timeSlots);
            return (
              <button key={date._id} className={buttonClass}>
                {date.text}
              </button>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default useDateBookingButtons;
