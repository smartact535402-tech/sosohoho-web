import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">sosohoho</div>
        <p className="footer-text">
          소소한 일상, 호젓한 기억.<br/>
          우리의 아름다운 전통 역사문화 유산과 정겨운 동네 골목길을 소개합니다.
        </p>
        <div className="footer-links">
          <Link to="/palaces">5대 궁궐</Link>
          <Link to="/tombs-shrine">왕릉 & 종묘</Link>
          <Link to="/museums">박물관 안내</Link>
          <Link to="/alleyways">소소한 골목길</Link>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} sosohoho. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
