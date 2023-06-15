import React, { useState, useEffect } from 'react';
import logo from './logo/logo1.png';

import './HeaderStyles.css';

const Header = (props) => {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const title = props.name;
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setCurrentDateTime(`${time} ${date}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <header className="header-container">
      <div className="header-title">
        <h1>{title}</h1>
        <p class="text-base"> {currentDateTime} </p>
      </div>
      <div className="logo">
        <img src={logo}  />
      </div>
    </header>
  );
};

export default Header;
