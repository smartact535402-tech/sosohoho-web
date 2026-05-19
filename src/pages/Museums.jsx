import React from 'react';
import './Museums.css';

const museumsData = [
  {
    id: 1,
    name: '국립중앙박물관',
    desc: '대한민국을 대표하는 박물관으로, 구석기 시대부터 조선 시대에 이르기까지 한국의 방대한 역사와 문화를 한눈에 살펴볼 수 있습니다. 수려한 자연 경관 속에 자리잡고 있어 휴식과 배움을 동시에 누릴 수 있습니다.',
    hours: '10:00 - 18:00 (수/토요일 21:00까지)',
    location: '서울 용산구 서빙고로 137',
    exhibition: '선사·고대관, 중·근세관, 서화관, 조각·공예관'
  },
  {
    id: 2,
    name: '국립고궁박물관',
    desc: '조선 왕실과 대한제국 황실의 역사와 문화를 간직한 유물들을 체계적으로 보존 및 전시하는 곳입니다. 경복궁 내에 위치하여 궁궐 관람과 연계하기 좋습니다.',
    hours: '10:00 - 18:00 (수/토요일 21:00까지)',
    location: '서울 종로구 효자로 12',
    exhibition: '조선 국왕, 조선 궁궐, 왕실 생활관, 대한제국관'
  },
  {
    id: 3,
    name: '국립민속박물관',
    desc: '한국인의 전통적인 생활 양식과 풍속을 연구하고 전시하는 박물관입니다. 과거 우리 선조들의 삶의 모습과 지혜를 생생하게 엿볼 수 있는 다양한 전시가 마련되어 있습니다.',
    hours: '09:00 - 18:00 (시즌별 변동)',
    location: '서울 종로구 삼청로 37',
    exhibition: '한국인의 하루, 한국인의 일상, 한국인의 일생'
  }
];

const Museums = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory-dark)' }}>
      <div className="container">
        <h2 className="section-title">박물관 안내</h2>
        <p className="section-subtitle">과거와 현재가 만나는 깊이 있는 배움의 공간</p>
        
        <div className="museum-list">
          {museumsData.map((museum) => (
            <div key={museum.id} className="museum-card">
              <div className="museum-img-wrapper">
                <img src="/museum_thumbnail.png" alt={museum.name} />
              </div>
              <div className="museum-content">
                <h3 className="museum-name">{museum.name}</h3>
                <p className="museum-desc">{museum.desc}</p>
                <div className="museum-info-grid">
                  <span className="info-label">관람시간</span>
                  <span>{museum.hours}</span>
                  
                  <span className="info-label">위치</span>
                  <span>{museum.location}</span>
                  
                  <span className="info-label">주요전시</span>
                  <span>{museum.exhibition}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Museums;
