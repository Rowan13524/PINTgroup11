import React from 'react';
import './loginStyles.css';
import './checkBox.css';
import { useHandleCheckboxChange ,signUp,handleSignUpClick,handleSignInClick} from './HandleLogin';
import { useNavigate } from 'react-router-dom';

const LoginScreen = ({ setLoggedIn }) => {
  const [isChecked, handleCheckboxChange] = useHandleCheckboxChange();
  const navigate = useNavigate();

  const logIn = () => {
    setLoggedIn(true);
    navigate('/nurse-home-screen');
  };

  const forgotScreen = () => {
    navigate('/forgot');
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form>
          <h1 className="login">Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={signUp}>Sign Up</button>
          <div className="box">
            <input
              id="one"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="check"></span>
            <label htmlFor="one">Are you a nurse or a doctor?</label>
          </div>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1 className="login">Sign in</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a  href="#" onClick={forgotScreen}>Forgot your password?</a>
          <button onClick={logIn}>Sign In</button>
          <button className="google-button" onClick={logIn}>
            Sign In with Google
          </button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="login">Welcome Back!</h1>
            <p>To keep connected with us, please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="login">Welcome to RoboMedic Solutions!!!</h1>
            <p >Enter your personal details and start the journey with us</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
