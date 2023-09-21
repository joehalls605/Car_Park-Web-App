import React, { useState } from 'react';
import './ComponentsCss/LoginForm.css';
import useNavigation from '../Hooks/use-navigation';
import Dashboard from '../Pages/Dashboard';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useNavigation();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'test@gmail.com' && password === 'test') {
      navigate('/dashboard');
    } else {
      alert('Invalid login. Please try again');
    }
  };

  return (
    <div className="login-container">
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          <div className="loginField">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="loginField">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
          <div className="forgotten">
            <button type="button">Forgot your password?</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
