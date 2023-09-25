import React, { Component, useState } from 'react'
import DateBooking from '../Components/DateBooking';

const Booking = () => {

const [isDateSet, setDate] = useState(false);

return(
    <div>Booking Page
            {isDateSet ? ( <SpaceBooking/>

            ):(
            <DateBooking/>
            )}
    </div>
)
}
export default Booking;