import React from 'react';
import LoginForm from '../Components/LoginForm';
import Header from '../Components/Header';
import './PageCss/LandingPage.css';
import Footer from '../Components/Footer';

const LandingPage = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    // Simulate a successful login
    setIsLoggedIn(true);
  };

  return (
    <div className="landing-page">
      <header className="font-mono">
        <Header />
        <p>Remove header unless logged in</p>
      </header>
      <LoginForm onLogin={handleLogin} />
      <Footer />
    </div>
  );
};

export default LandingPage;
