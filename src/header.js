import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logo.svg';
import './header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="align-left">
          <Link className="logo-link" to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="align-right">
          <Link to="/search/javascript">Search</Link>
          <Link to="#how-it-works">How it works</Link>
          <Link to="#About ">About</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
