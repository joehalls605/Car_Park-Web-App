import React from 'react';
import './ComponentsCSS/Navigation.css';

const Navigation = () => {
  return (
    <div className='navigation'>
      <nav>
        <ul>
          <li><a href="/">Account</a></li>
          <li><a href="/">Bookings</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
