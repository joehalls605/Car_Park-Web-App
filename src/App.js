import React, { useState, useEffect } from 'react';
import { NavigationProvider } from './Context/Navigation';
import LandingPage from './Pages/LandingPage';
import Dashboard from './Pages/Dashboard';
import AccountPage from './Pages/AccountPage';
import BookingsPage from './Pages/BookingsPage';
import Route from './Components/Route';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use useEffect to navigate to '/dashboard' when isLoggedIn becomes true
  useEffect(() => {
    if (isLoggedIn) {
      // Update the URL to '/dashboard'
      window.history.pushState({}, '', '/dashboard');
    }
  }, [isLoggedIn]);

  return (
    <NavigationProvider>
      <div>
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <LandingPage setIsLoggedIn={setIsLoggedIn} />
        )}
        <div>
          <Route path="/accounts">
            <AccountPage />
          </Route>
          <Route path="/bookings">
            <BookingsPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </div>
      </div>
    </NavigationProvider>
  );
};

export default App;
