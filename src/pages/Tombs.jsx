import React from 'react';
import './Tombs.css';

const Tombs = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">왕릉 & 종묘</h2>
        <p className="section-subtitle">유네스코 세계문화유산이 전하는 장엄하고 엄숙한 미</p>
        
        <div className="tombs-section">
          <div className="tomb-block">
            <div className="tomb-image">
              <img src="/tombs_banner.png" alt="조선왕릉" />
            </div>
            <div className="tomb-content">
              <h3 className="tomb-title">조선왕릉</h3>
              <p className="tomb-desc">
                조선 시대 역대 왕과 왕비의 무덤인 조선왕릉은 자연 지형을 훼손하지 않고 산세에 어우러지게 조영된 것이 특징입니다.<br/><br/>
                푸른 녹음이 우거진 능역을 거닐다 보면, 시공간을 초월한 <span className="tomb-highlight">평온함과 엄숙함</span>을 동시에 느낄 수 있습니다. 자연과 인공이 절묘하게 조화된 조선왕릉에서 사색의 시간을 가져보세요.
              </p>
            </div>
          </div>
          
          <div className="tomb-block">
            <div className="tomb-image">
              <img src="/tombs_banner.png" alt="종묘" />
            </div>
            <div className="tomb-content">
              <h3 className="tomb-title">종묘</h3>
              <p className="tomb-desc">
                종묘는 조선 왕조의 역대 왕과 왕비, 그리고 추존된 왕과 왕비의 신주를 모신 유교 사당입니다. 가장 정제되고 장엄한 한국의 전통 건축물로 평가받고 있습니다.<br/><br/>
                끝없이 이어지는 듯한 정전의 긴 지붕선과 기둥들이 만들어내는 <span className="tomb-highlight">규칙적이면서도 장엄한 절제미</span>는 보는 이로 하여금 깊은 경건함을 자아냅니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tombs;
