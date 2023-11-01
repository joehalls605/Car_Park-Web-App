import React, { Component, useState } from 'react';
import DateBooking from '../Components/DateBooking';
import SpaceBooking from '../Components/SpaceBooking';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


/*
BookingPage.js:

Manages the booking process and displays date and space booking components.
Allows users to switch between date and space booking sections.

*/


const BookingPage = () => {
  const [showSpaceBooking, setShowSpaceBooking] = useState(false);
  const [showDateBooking, setShowDateBooking] = useState(true);

  return (
    <div>
      <Header />
      Booking Page
      {showDateBooking && (
        <DateBooking
          setShowDateBooking={setShowDateBooking} 
          setShowSpaceBooking={setShowSpaceBooking}
        />
      )}
      {showSpaceBooking && <SpaceBooking onClose={() => setShowSpaceBooking(false)} />}
      <Footer />
    </div>
  );
}

export default BookingPage;
