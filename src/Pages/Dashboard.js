import React, { Component } from 'react'
import './PageCss/Dashboard.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const handleMakeBooking = () => {

}

const Dashboard = () => {

    return(
        <div>
             <Header/>
             <div className='dashboard'>
            <div className='container' onClick={handleMakeBooking}>
                <h2>Make a booking</h2>
            </div>
            <div className='container' onClick={handleMakeBooking}>
                <h2>View your bookings</h2>
            </div>
            <div className='container' onClick={handleMakeBooking}>
                <h2>Account</h2>
            </div>
        </div>
        <Footer/>
        </div>
        
      
    )
}

export default Dashboard;