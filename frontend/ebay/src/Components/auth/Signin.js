import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:9999/auth/login', {
        email,
        password,
      });

      alert(res.data.message || 'Login successful!');
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password.');
    }
  };

  return (
    <div className="signin-container">
      <img
        src="../../assets/ebay-logo.png"
        alt="eBay Logo"
        className="logo"
      />

      <h2>Sign in to your account</h2>
      <p>
        New to eBay? <Link to="/register">Create account</Link>
      </p>

      <form onSubmit={handleLogin} className="signin-form">
        <div className={`input-group ${error ? 'error' : ''}`}>
          <input
            type="email"
            placeholder="Email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={`input-group ${error ? 'error' : ''}`}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-text">❗ {error}</p>}
        </div>

        <button type="submit" className="continue-btn">Sign in</button>

        <div className="divider"><span>or</span></div>

        <button type="button" className="social-btn google">Continue with Google</button>
        <button type="button" className="social-btn facebook">Continue with Facebook</button>
        <button type="button" className="social-btn apple">Continue with Apple</button>

        <label className="stay-signed">
          <input type="checkbox" checked readOnly /> Stay signed in
        </label>
      </form>

      <footer className="signin-footer">
        <p>
          Copyright © 1995–2025 eBay Inc. All Rights Reserved.{' '}
          <a href="#">User Agreement</a>, <a href="#">Privacy</a>, <a href="#">Cookies</a>.
        </p>
      </footer>
    </div>
  );
};

export default Signin;
