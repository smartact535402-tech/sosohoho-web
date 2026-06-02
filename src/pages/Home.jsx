import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">우리 궁궐 거닐기</h1>
          <p className="hero-subtitle">가장 호젓하고 아름다운 고궁의 순간들</p>
        </div>
        <Link to="/palaces" className="hero-link-overlay" aria-label="우리 궁궐 거닐기"></Link>
      </section>

      <section className="section concept-section">
        <div className="container">
          <h2 className="section-title">우리의 아름다운 유산</h2>
          <p className="concept-text">
            'sosohoho'는 한국의 전통적인 아름다움과 정겨운 동네 골목길이 주는 따뜻함을 담아냅니다.<br/>
            빌딩 숲 사이에서 조용히 숨 쉬고 있는 고궁, 수백 년의 시간을 간직한 왕릉과 종묘, <br/>
            그리고 발길 닿는 곳마다 이야기가 피어나는 소소한 골목길까지.<br/>
            우리의 일상 속에서 발견하는 호젓하고 찬란한 순간들을 소개합니다.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
