import React, { Component } from 'react'
import './ComponentsCSS/LoginForm.css';

const LoginForm = () => {

return(
    <div className='login-container'>
  <div className='loginForm'>
    <form>
        <div className='loginField'>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder=" Email" required></input>
        </div>
        <div className='loginField'>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder=" Password" required></input>
        </div>
        <div className='login-button'>
        <button  type="submit">Login </button>
        </div>
        <div className='forgotten'>
        <button  type="submit">Forgot your password?</button>
        </div>
    </form>
    </div>
    </div>
)


}
export default LoginForm;