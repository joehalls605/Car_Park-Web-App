import React, { Component } from 'react';
import useDateBookingButtons from '../Hooks/useDateBookingButtons';

const DateBooking = ({ setShowDateBooking, setShowSpaceBooking }) => {
  const buttons = useDateBookingButtons((text) => {
    setShowSpaceBooking(true);
    setShowDateBooking(false);
  });

  return <div>{buttons}</div>;
};

export default DateBooking;
