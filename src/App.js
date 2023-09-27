import React, { useState, useEffect } from 'react';
import { NavigationProvider } from './Context/Navigation';
import LandingPage from './Pages/LandingPage';
import DashboardPage from './Pages/DashboardPage';
import AccountPage from './Pages/AccountPage';
import BookingPage from './Pages/BookingPage';
import Route from './Components/Route';
import ViewBookingsPage from './Pages/ViewBookingsPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use useEffect to navigate to '/dashboard' when isLoggedIn becomes true
  useEffect(() => {
    if (isLoggedIn) {
      // Update the URL to '/dashboard'
      window.history.pushState({}, '', '/dashboard');
    }
  }, [isLoggedIn]);

  // Add a popstate event listener to handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      // Check if the current path is the root URL '/'
      if (window.location.pathname === '/') {
        // Set isLoggedIn to false when navigating back to the root URL
        setIsLoggedIn(false);

        // Programmatically navigate to the LandingPage
        window.history.pushState({}, '', '/');
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
          <DashboardPage />
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
          <Route path="/dashboard">
            <DashboardPage />
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
