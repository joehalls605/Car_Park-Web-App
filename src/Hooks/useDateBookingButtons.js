import React from "react";
import dates from "../Data/Dates";

const useDateBookingButtons = (handleClick) => {
  const datesColour = (timeSlots) => {
    let bookingTotal = 0;
    timeSlots.forEach((slot) => {
      if (slot.booked === true) {
        bookingTotal++;
      }
    });

    let buttonClass = "bg-green-700 text-lg text-white px-4 w-30 h-30 py-2 rounded hover:bg-green-900 transition-colors duration-300 whitespace-no-wrap";

    if (bookingTotal > 9) {
      buttonClass = "bg-red-700 text-lg text-white px-4 w-30 h-30 py-2 rounded hover:bg-red-900 transition-colors duration-300 whitespace-no-wrap";
    } else if (bookingTotal >= 5 && bookingTotal < 9) {
      buttonClass = "bg-orange-700 text-lg text-white px-4 w-30 h-30 py-2 rounded hover:bg-orange-900 transition-colors duration-300 whitespace-no-wrap";
    }

    return buttonClass;
  };

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-2 p-10 mt-4">
        {dates.map((date) => (
          <button
            key={date._id}
            className={datesColour(date.timeSlots)}
            onClick={() => handleClick(date.text)}
          >
            {date.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default useDateBookingButtons;
