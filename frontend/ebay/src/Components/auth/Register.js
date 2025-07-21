import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const res = await axios.post('http://localhost:9999/auth/register', {
        firstName,
        lastName,
        email,
        password,
      });

      setSuccessMsg('Đăng ký thành công. Vui lòng kiểm tra email để xác minh tài khoản.');

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setErrorMsg(err.response?.data?.msg || 'Đã xảy ra lỗi khi đăng ký');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        {/* Logo */}
        <div className="logo-container">
          <img src="/logo_ebay.png" alt="eBay Logo" className="logo" />
        </div>

        {/* Heading */}
        <h2>Create an account</h2>
        <p className="login-link-top">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>

        {/* Tabs */}
        <div className="tab-selector">
          <button className="tab active">Personal</button>
          <button className="tab">Business</button>
        </div>

        {/* Alerts */}
        {errorMsg && <div className="error-msg">{errorMsg}</div>}
        {successMsg && <div className="success-msg">{successMsg}</div>}

        {/* Form */}
        <form onSubmit={handleRegister}>
          <div className="name-fields">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p className="terms">
            By selecting <strong>Create personal account</strong>, you agree to our{' '}
            <a href="#">User Agreement</a> and acknowledge reading our{' '}
            <a href="#">User Privacy Notice</a>.
          </p>

          <button type="submit" className="submit-btn">Create personal account</button>
        </form>

        {/* Social login */}
        <div className="divider"><span>or continue with</span></div>
        <div className="social-buttons">
          <button className="google-btn">🔍 Google</button>
          <button className="facebook-btn">📘 Facebook</button>
          <button className="apple-btn">🍎 Apple</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>
          Copyright © 1995-2025 eBay Inc. All Rights Reserved.{' '}
          <a href="#">Accessibility</a>, <a href="#">User Agreement</a>,{' '}
          <a href="#">Privacy</a>, <a href="#">Cookies</a>, <a href="#">AdChoice</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
