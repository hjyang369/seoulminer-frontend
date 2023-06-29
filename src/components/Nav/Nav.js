import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavData from './NavData';
import './Nav.scss';
import NavToggle from './NavToggle/NavToggle';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClosed = () => {
    setIsOpen(false);
  };

  return (
    <header className="nav">
      <div className="navContainer">
        <span className="mainLogo">배민배민배</span>
        <div className="navMenu">
          <div className="link">
            {NavData.map((link, index) => (
              <Link to={link.path} key={index}>
                <button className="menuLink">{link.text}</button>
              </Link>
            ))}
          </div>
          <div className="icons">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="leadingGlass"
            />
            <FontAwesomeIcon icon={faCartShopping} className="cart" />
            <button className="loginBtn">로그인</button>
            <button className="menuBtn" onClick={handleOpen}>
              <FontAwesomeIcon icon={faBars} className="bar" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && <NavToggle isNavOpen={isOpen} onClose={handleClosed} />}
    </header>
  );
};

export default Nav;
