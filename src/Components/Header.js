import React from 'react';
import './ComponentsCss/Navigation.css';

const Header = () => {
  return (
    <nav className='navigation'>
      <h1 className='font-mono left-title'>Kesington Car Park</h1>
      <ul>
        <li><a href="/">Account</a></li>
        <li><a href="/">Bookings</a></li>
      </ul>
    </nav>
  );
};

export default Header;
