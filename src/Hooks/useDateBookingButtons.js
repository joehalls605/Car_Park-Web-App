import React from "react";
import dates from "../Data/Dates";

const useDateBookingButtons = () => {
  // Create an array of arrays to represent rows and columns
  const rows = Array.from({ length: 4 }, (_, rowIndex) =>
    dates.slice(rowIndex * 7, (rowIndex + 1) * 7)
  );

  /* 
  
loop through the times, if the time is booked, update a variable number.
Depending on the variable number, update the button colour to display different hue of colour ranging from green to amber to red. The variable
  Below is just set up but hopefully on right path.

*/

  const datesTotal = () => {
    
    const bookingTotal = 0;
    dates.forEach(date => {
      if(date.timeSlots.booked === true){
        bookingTotal ++;
      }
    });

    return datesTotal
  } 

  // const datesColoured = (datesTotal) => {
  //   const dateColour = null;
   
  //   if(datesTotal <= 5){
  //     dateColour = "bg-green-700"
  //   }
  //   if(datesTotal >= 5 && 9){
  //     dateColour = "bg-amber-700"
  //   }
  //   dateColour = "bg-red-700"
   
  //   return dateColour
  // } 

 //

  return (
    <div className="grid grid-cols-7 gap-2 p-10">
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
