import React from 'react';
import LoginForm from '../Components/LoginForm';
import Navigation from '../Components/Navigation';
import '../Components/ComponentsCSS/LandingPage.css';
import Footer from '../Components/Footer';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <header className="font-mono">
        <Navigation />
      </header>
      <LoginForm />
      <Footer/>
    </div>
  );
};

export default LandingPage;
 