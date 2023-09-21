import React from 'react';
import LoginForm from '../Components/LoginForm';
import Header from '../Components/Header';
import './PageCss/LandingPage.css'
import Footer from '../Components/Footer';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <header className="font-mono">
        <Header/><p>remove header unless logged in</p>
      </header>
      <LoginForm />
      <Footer/>
    </div>
  );
};

export default LandingPage;
 