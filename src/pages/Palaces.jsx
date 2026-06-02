import React from 'react';
import './Palaces.css';

const palacesData = [
  {
    id: 1,
    name: '경복궁',
    desc: '조선 왕조의 법궁으로, 5대 궁궐 중 가장 규모가 크고 웅장합니다. 웅장한 근정전과 경회루의 사계절 풍경이 일품입니다.',
    point: '추천 명소: 경회루, 향원정',
    image: '/palace_gyeongbokgung.png'
  },
  {
    id: 2,
    name: '창덕궁',
    desc: '자연과 조화로운 배치가 돋보이는 궁궐로, 유네스코 세계문화유산에 등재되어 있습니다. 비밀스러운 후원이 유명합니다.',
    point: '추천 명소: 후원, 인정전',
    image: '/palace_changdeokgung.jpg'
  },
  {
    id: 3,
    name: '덕수궁',
    desc: '전통 목조건축과 서양식 건축이 어우러진 독특한 매력을 지닌 궁궐입니다. 돌담길 산책로가 특히 아름답습니다.',
    point: '추천 명소: 석조전, 덕수궁 돌담길',
    image: '/palace_deoksugung.jpg'
  },
  {
    id: 4,
    name: '창경궁',
    desc: '왕실 가족들의 생활 공간으로 지어졌으며, 아담하고 정겨운 분위기를 자아냅니다. 대온실과 춘당지가 돋보입니다.',
    point: '추천 명소: 대온실, 춘당지',
    image: '/palace_changgyeonggung.jpg'
  },
  {
    id: 5,
    name: '경희궁',
    desc: '조선 후기의 이궁으로, 경사가 심한 지형을 교묘하게 이용한 건축미가 특징입니다. 고즈넉한 산책을 즐기기 좋습니다.',
    point: '추천 명소: 숭정전, 서암',
    image: '/palace_gyeonghuigung.jpg'
  }
];

const Palaces = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory-dark)' }}>
      <div className="container">
        <h2 className="section-title">우리나라 5대 궁궐</h2>
        <p className="section-subtitle">조선 왕조의 숨결이 살아 숨 쉬는 고궁을 거닐어 보세요</p>
        
        <div className="palace-grid">
          {palacesData.map((palace) => (
            <div key={palace.id} className="card palace-card">
              <div className="palace-img-wrapper">
                <img src={palace.image} alt={palace.name} />
              </div>
              <div className="palace-content">
                <h3 className="palace-name">{palace.name}</h3>
                <p className="palace-desc">{palace.desc}</p>
                <div className="palace-point">{palace.point}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Palaces;
