import React from "react";
import dates from "../Data/Dates";
import useSpaceBookingButtons from "../Hooks/useSpaceBookingButtons";


/*
Represents a space booking component.
Allows the user to close it.
*/

const SpaceBooking = () => {

 const spaceButtons = useSpaceBookingButtons();

  return <div>{spaceButtons}</div>
};

export default SpaceBooking;
