import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.svg';
import './header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="align-left">
          <a className="logo-link" href="Test">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="align-right">
          <Link to="/search">Search</Link>
          <Link to="#how-it-works">How it works</Link>
          <Link to="#About ">About</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
