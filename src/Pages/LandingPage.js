import React, { Component } from 'react'
import LoginForm from '../Components/LoginForm';
import Navigation from '../Components/Navigation';
import '../Components/ComponentsCSS/LandingPage.css'


const LandingPage = () => {

return(
    <div>
        <div class='landing-page'>
        <header class="font-mono"> 
        <h1 class='font-mono'>Kesington Car Park</h1>
        <Navigation/>
        </header>
        </div>
        <body>
        <LoginForm/>
        </body>
    </div>
)

}

export default LandingPage;