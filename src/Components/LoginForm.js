import React, { Component } from 'react'
import './ComponentsCss/LoginForm.css';

const LoginForm = () => {

return(
    <div className='login-container'>
  <div className='loginForm'>
    <form>
        <div className='loginField'>
            <input type="email" id="email" name="email" placeholder=" Email" required></input>
        </div>
        <div className='loginField'>
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