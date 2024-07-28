import React, { useState } from 'react';
import NavBar from './NavBar';
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert('User created successfully!');
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <NavBar />
      <div className="login-root">
        <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
          <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
            <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
              <h1>Join the Party!</h1>
            </div>
            <div className="formbg-outer">
              <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15">Sign up for an account</span>
                  <form id="stripe-login" onSubmit={handleSubmit}>
                    <div className="field padding-bottom--24">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="field padding-bottom--24">
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="field padding-bottom--24">
                      <input type="submit" name="submit" value="Sign Up" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-link padding-top--24">
                <span>Already have an account? <a href="#">Sign in</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
