import React, { Component } from 'react'
import './PageCss/Dashboard.css'

const handleMakeBooking = () => {

}

const Dashboard = () => {

    return(
        <div className='dashboard'>
            <div className='container' onClick={handleMakeBooking}>
                <h2>Make a booking</h2>
            </div>
            <div className='container' onClick={handleMakeBooking}>
                <h2>View bookings</h2>
            </div>
            <div className='container' onClick={handleMakeBooking}>
                <h2>Account</h2>
            </div>
        </div>
        
      
    )
}

export default Dashboard;