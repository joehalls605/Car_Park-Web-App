import React from "react";
import useDateBookingButtons from "../Hooks/useDateBookingButtons";

const DateBooking = ({ handleClick}) => {
  const buttons = useDateBookingButtons(handleClick);

  return <div>{buttons}</div>;
};

export default DateBooking;
