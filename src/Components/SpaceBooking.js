import React from "react";

/*
Represents a space booking component.
Allows the user to close it.
*/

const SpaceBooking = ({ onClose }) => {
  return (
    <div>
      <div>SpaceBooking Component</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SpaceBooking;
