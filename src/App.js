import React, { useState, useEffect } from 'react';
import { NavigationProvider } from './Context/Navigation';
import LandingPage from './Pages/LandingPage';
import DashboardPage from './Pages/DashboardPage';
import AccountPage from './Pages/AccountPage';
import BookingPage from './Pages/BookingPage';
import Route from './Components/Route';
import ViewBookingsPage from './Pages/ViewBookingsPage';
import Link from './Components/Link';

/* 
App.js:

The main entry point of the application.
Handles routing and navigation based on the user's login status.
Imports and renders various pages and components like LandingPage, DashboardPage, AccountPage, BookingPage, ViewBookingsPage, and Route.
Uses the NavigationProvider to manage navigation context.
*/

const App = () => {
  const initialIsLoggedIn = false;
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

  useEffect(()=> {
    const initialIsLoggedIn = false;
    setIsLoggedIn(initialIsLoggedIn);
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname;

      if (currentPath === '/') {
        setIsLoggedIn(false);
        window.history.pushState({}, '', '/');
      } else if (currentPath === '/dashboard' || currentPath === '/booking') {
        setIsLoggedIn(true);
      }
    };

    // Attach the event listener
    window.addEventListener('popstate', handlePopState);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <NavigationProvider>
      <div>
        {isLoggedIn ? (
          <DashboardPage setIsLoggedIn={setIsLoggedIn}/>
        ) : (
          <LandingPage setIsLoggedIn={setIsLoggedIn} />
        )}
        <div>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/booking">
            <BookingPage />
          </Route>
          <Route path="/viewBookings">
            <ViewBookingsPage />
          </Route>
        </div>
      </div>
    </NavigationProvider>
  );
};

export default App;
