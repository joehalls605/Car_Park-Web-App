import React, { Component } from 'react'
import useDateBookingButtons from '../Hooks/useDateBookingButtons';

const DateBooking = () => {


    const buttons = useDateBookingButtons();

    return (
        <div>{buttons}</div>
    )

}

export default DateBooking;
  