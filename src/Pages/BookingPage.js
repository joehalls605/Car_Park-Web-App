import React, { Component, useState } from 'react'
import DateBooking from '../Components/DateBooking';
import SpaceBooking from '../Components/SpaceBooking';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const BookingPage = () => {

const [isDateSet, setDate] = useState(false);

return(
    <div>
    <Header />
        Booking Page
         <DateBooking/>
         <Footer/>
    </div>
)
}
export default BookingPage;