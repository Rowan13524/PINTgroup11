import React from 'react';
import './forgotScreen.css';
import { useNavigate } from 'react-router-dom';

const ForgotScreen = () => {
  const navigate = useNavigate();
  const SignUp = () => {
    navigate('/');
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-in-container">
        <form action="#">
          <h1 className="forgot-pw">Forgot Password</h1>
          <span>Enter your email to reset your password</span>
          <input type="email" placeholder="Email" />
          <button>Reset Password</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="forgot-pw">Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="forgot-pw">Welcome to RoboMedic Solutions!!!</h1>
            <p>Enter your personal details and start the journey with us</p>
            <button className="ghost" id="signUp" onClick={SignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotScreen;
