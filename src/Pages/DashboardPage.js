import React, { Component } from 'react'
import './PageCss/Dashboard.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SpaceBooking from '../Components/SpaceBooking'
import { useState } from 'react';
import DateBooking from '../Components/DateBooking'
import AccountPage from './AccountPage'
import ViewBookingsPage from './ViewBookingsPage'


const DashboardPage = () => {

    const [isMakingBooking, setIsMakingBooking] = useState(false);
    const [isViewingBookings, setIsViewBookings] = useState(false);
    const [isViewingAccount, setIsViewAccount] = useState(false);

    const handleMakeBooking = () => {
      setIsMakingBooking(true);
      setIsViewBookings(false);
      setIsViewAccount(false);
     }

     const handleViewBookings = () => {
      setIsMakingBooking(false);
      setIsViewBookings(true);
      setIsViewAccount(false);
     }

     const handleViewAccount = () => {
      setIsMakingBooking(false);
      setIsViewBookings(false);
      setIsViewAccount(true);
     }

    return (
        <div>
          {!isMakingBooking && !isViewingBookings && !isViewingAccount ? (
            <>
              <Header />
              <div className='dashboard'>
                <div className='container' onClick={handleMakeBooking}>
                  <h2>Make a booking</h2>
                </div>
                <div className='container' onClick={handleViewBookings}>
                  <h2>View your bookings</h2>
                </div>
                <div className='container' onClick={handleViewAccount}>
                  <h2>Account</h2>
                </div>
              </div>
              <Footer />
            </>
          ) : (
            <>
            {isMakingBooking && <SpaceBooking/>}
            {isViewingBookings && <ViewBookingsPage/>}
            {isViewingAccount && <AccountPage/>}
            </>
          )}
        </div>
      );
}

export default DashboardPage;