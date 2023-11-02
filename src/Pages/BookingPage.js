import React, { useState } from 'react';
import DateBooking from '../Components/DateBooking';
import SpaceBooking from '../Components/SpaceBooking';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const BookingPage = () => {
  const [showSpaceBooking, setShowSpaceBooking] = useState(false);
  const [showDateBooking, setShowDateBooking] = useState(true);

  // Callback function to handle the click on a date button
  const handleDateButtonClick = (text) => {
    setShowSpaceBooking(true);
    setShowDateBooking(false);
  };

  return (
    <div>
      <Header />
      Booking Page
      {showDateBooking && (
        <DateBooking
         
     
          handleClick={handleDateButtonClick} // Pass the callback to DateBooking
        />
      )}
      {showSpaceBooking && <SpaceBooking />}
      <Footer />
    </div>
  );
};

export default BookingPage;
