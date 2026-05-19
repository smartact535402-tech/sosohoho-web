import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          sosohoho
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FiX /> : <FiMenu />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={`nav-links ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>
              홈
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/palaces" className={`nav-links ${location.pathname === '/palaces' ? 'active' : ''}`} onClick={closeMobileMenu}>
              우리나라 5대 궁궐
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tombs-shrine" className={`nav-links ${location.pathname === '/tombs-shrine' ? 'active' : ''}`} onClick={closeMobileMenu}>
              왕릉 & 종묘
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/museums" className={`nav-links ${location.pathname === '/museums' ? 'active' : ''}`} onClick={closeMobileMenu}>
              박물관 안내
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/alleyways" className={`nav-links ${location.pathname === '/alleyways' ? 'active' : ''}`} onClick={closeMobileMenu}>
              소소한 골목길
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
