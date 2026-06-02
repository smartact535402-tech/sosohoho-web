import React, { useState } from 'react';
import './Museums.css';

const museumsData = [
  // 서울/수도권
  {
    id: 1,
    category: 'seoul',
    name: '국립중앙박물관',
    desc: '대한민국을 대표하는 박물관으로, 구석기 시대부터 조선 시대에 이르기까지 한국의 방대한 역사와 문화를 한눈에 살펴볼 수 있습니다. 수려한 자연 경관 속에 자리잡고 있어 휴식과 배움을 동시에 누릴 수 있습니다.',
    hours: '10:00 - 18:00 (수/토요일 21:00까지)',
    location: '서울 용산구 서빙고로 137',
    exhibition: '선사·고대관, 중·근세관, 서화관, 조각·공예관',
    image: '/museum_central.png'
  },
  {
    id: 2,
    category: 'seoul',
    name: '국립고궁박물관',
    desc: '조선 왕실과 대한제국 황실의 역사와 문화를 간직한 유물들을 체계적으로 보존 및 전시하는 곳입니다. 경복궁 내에 위치하여 궁궐 관람과 연계하기 좋습니다.',
    hours: '10:00 - 18:00 (수/토요일 21:00까지)',
    location: '서울 종로구 효자로 12',
    exhibition: '조선 국왕, 조선 궁궐, 왕실 생활관, 대한제국관',
    image: '/museum_palace.png'
  },
  {
    id: 3,
    category: 'seoul',
    name: '국립민속박물관',
    desc: '한국인의 전통적인 생활 양식과 풍속을 연구하고 전시하는 박물관입니다. 과거 우리 선조들의 삶의 모습과 지혜를 생생하게 엿볼 수 있는 다양한 전시가 마련되어 있습니다.',
    hours: '09:00 - 18:00 (시즌별 변동)',
    location: '서울 종로구 삼청로 37',
    exhibition: '한국인의 하루, 한국인의 일상, 한국인의 일생',
    image: '/museum_folk.png'
  },
  {
    id: 4,
    category: 'seoul',
    name: '국립한글박물관',
    desc: '우리의 소중한 문화유산인 한글의 역사적·문화적 가치를 널리 알리고 보존하기 위해 설립되었습니다. 한글의 탄생부터 현대의 쓰임까지 다양한 가치를 조명합니다.',
    hours: '10:00 - 18:00 (토요일 21:00까지)',
    location: '서울 용산구 서빙고로 139',
    exhibition: '한글의 역사, 한글과 한문, 어린이 한글 놀이터',
    image: '/museum_hangeul.png'
  },
  {
    id: 5,
    category: 'seoul',
    name: '대한민국역사박물관',
    desc: '19세기 말 개항기부터 오늘날에 이르기까지 대한민국의 역사를 기록하고 전시하는 국립 근현대사 박물관입니다. 한국의 발전 과정을 다채로운 영상과 유물로 조명합니다.',
    hours: '10:00 - 18:00 (수/토요일 21:00까지)',
    location: '서울 종로구 세종대로 198',
    exhibition: '대한민국의 태동, 대한민국의 기초 확립, 대한민국의 성장과 발전',
    image: '/museum_history.png'
  },
  // 영남권
  {
    id: 6,
    category: 'yeongnam',
    name: '국립경주박물관',
    desc: '천년고도 경주의 역사와 신라의 화려한 불교 미술 및 황금 문화재들을 보존하고 있습니다. 성덕대왕신종과 신라 금관 등 교과서에서 보던 국보급 유물들이 가득합니다.',
    hours: '10:00 - 18:00 (토요일/공휴일 19:00까지)',
    location: '경북 경주시 일정로 186',
    exhibition: '신라역사관, 신라미술관, 월지관, 옥외 전시 (성덕대왕신종)',
    image: '/museum_gyeongju.png'
  },
  {
    id: 7,
    category: 'yeongnam',
    name: '국립대구박물관',
    desc: '대구와 경북 지역의 풍부한 문화유산을 소개하며, 특히 우리나라의 전통 복식 문화를 체계적으로 연구하고 전시하는 복식 특화 박물관으로 자리매김하고 있습니다.',
    hours: '09:00 - 18:00 (월요일 휴관)',
    location: '대구 수성구 청호로 321',
    exhibition: '고고실, 미술실, 복식문화실, 아롱다롱방',
    image: '/museum_daegu.png'
  },
  {
    id: 8,
    category: 'yeongnam',
    name: '국립김해박물관',
    desc: '고대 가야의 역사와 우수한 철기 문화를 집중 조명하는 박물관입니다. 낙동강 유역의 철기 제작 유물과 가야의 문화를 깊이 있게 학습할 수 있습니다.',
    hours: '09:00 - 18:00 (월요일 휴관)',
    location: '경남 김해시 가야의길 190',
    exhibition: '가야로 가는 길, 가야와 가야 사람들, 철의 왕국 가야',
    image: '/museum_gimhae.png'
  },
  {
    id: 9,
    category: 'yeongnam',
    name: '국립진주박물관',
    desc: '임진왜란의 성지인 진주성 내에 자리잡고 있으며, 임진왜란과 동아시아 사회의 변화를 다룬 전쟁사 특화 박물관이자 서부 경남 지역의 역사 문화재를 전시하고 있습니다.',
    hours: '09:00 - 18:00 (월요일 휴관)',
    location: '경남 진주시 남강로 626-35 (진주성 내)',
    exhibition: '임진왜란실, 두암관(기증 문화재), 역사문화홀',
    image: '/museum_jinju.png'
  },
  // 호남/충청/기타
  {
    id: 10,
    category: 'other',
    name: '국립부여박물관',
    desc: '충청남도 부여 지역의 백제 사비 시기 문화유산을 전시하고 있으며, 백제 최고의 예술적 걸작인 백제금동대향로를 직접 감상할 수 있는 것으로 유명합니다.',
    hours: '09:00 - 18:00 (월요일 휴관)',
    location: '충남 부여군 부여읍 금성로 5',
    exhibition: '백제의 사비 도읍, 백제의 불교 미술, 백제금동대향로관',
    image: '/museum_buyeo.png'
  },
  {
    id: 11,
    category: 'other',
    name: '국립공주박물관',
    desc: '웅진 백제 시기의 문화재를 전문적으로 보존하며, 특히 무령왕릉에서 발굴된 수많은 왕과 왕비의 화려한 장신구와 석수 등 국보급 유물들이 전시되어 있습니다.',
    hours: '09:00 - 18:00 (월요일 휴관)',
    location: '충남 공주시 관광단지길 34',
    exhibition: '웅진백제실, 충청남도 역사문화실, 야외 정원',
    image: '/museum_gongju.png'
  },
  {
    id: 12,
    category: 'other',
    name: '국립익산박물관',
    desc: '유네스코 세계문화유산인 미륵사지 터에 건립되었으며, 백제 무왕 대의 미륵사 창건 유물과 사리장엄구 등 찬란했던 전북 지역 백제 유적을 체계적으로 전시합니다.',
    hours: '09:00 - 18:00 (월요일 휴관)',
    location: '전북 익산시 금마면 미륵사지로 362',
    exhibition: '익산 백제, 미륵사지실, 백제 역사유적지구관',
    image: '/museum_iksan.png'
  },
  {
    id: 13,
    category: 'other',
    name: '국립광주박물관',
    desc: '광주와 전남 지역의 문화재를 비롯하여, 신안 해저에서 발견된 대규모 중국 도자기 유물 등 아시아 도자 문화사를 조명하는 대표적인 도자 특화 박물관입니다.',
    hours: '09:00 - 18:00 (월요일 휴관)',
    location: '광주 북구 하서로 110',
    exhibition: '아시아도자문화실, 역사문화실, 신안해저문화재 전시',
    image: '/museum_gwangju.png'
  },
  {
    id: 14,
    category: 'other',
    name: '국립전주박물관',
    desc: '전주와 전북 지역의 역사와 조선 선비 문화의 맥을 보존하고 있습니다. 조선의 발상지로서의 전주 역사와 서화, 그리고 공예 작품들의 미학을 보여줍니다.',
    hours: '09:00 - 18:00 (월요일 휴관)',
    location: '전북 전주시 완산구 천잠로 387',
    exhibition: '전라북도 역사실, 미술실, 조선 선비 문화관',
    image: '/museum_jeonju.png'
  },
  {
    id: 15,
    category: 'other',
    name: '국립제주박물관',
    desc: '아름다운 섬 제주의 역사와 문화를 보존하고 있으며, 육지와 다른 섬 문화 고유의 발전 과정과 탐라국의 역사, 웅장한 화산섬 해양 실감 영상을 제공합니다.',
    hours: '09:00 - 18:00 (월요일 휴관)',
    location: '제주 제주시 일주동로 17',
    exhibition: '제주 탐라 역사실, 기획전시실, 해양문화재 전시실',
    image: '/museum_jeju.png'
  },
  {
    id: 16,
    category: 'other',
    name: '국립춘천박물관',
    desc: '강원도 지역의 유서 깊은 유물을 보존하는 중추 박물관으로, 자연과 역사와 사람이 어우러진 휴식처 같은 분위기 속에 영월 창령사 터 오백나한 유물이 깊은 여운을 줍니다.',
    hours: '09:00 - 18:00 (월요일 휴관)',
    location: '강원 춘천시 우석로 70',
    exhibition: '강원의 고대, 강원의 중근세, 오백나한 특별관, 실감영상관',
    image: '/museum_chuncheon.png'
  }
];

const Museums = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredMuseums = activeTab === 'all'
    ? museumsData
    : museumsData.filter((museum) => museum.category === activeTab);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory-dark)' }}>
      <div className="container">
        <h2 className="section-title">박물관 안내</h2>
        <p className="section-subtitle">과거와 현재가 만나는 깊이 있는 배움의 공간</p>
        
        {/* 지역 필터 탭 */}
        <div className="category-tabs">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            전체
          </button>
          <button 
            className={`tab-btn ${activeTab === 'seoul' ? 'active' : ''}`}
            onClick={() => setActiveTab('seoul')}
          >
            서울/수도권
          </button>
          <button 
            className={`tab-btn ${activeTab === 'yeongnam' ? 'active' : ''}`}
            onClick={() => setActiveTab('yeongnam')}
          >
            영남권 (경상)
          </button>
          <button 
            className={`tab-btn ${activeTab === 'other' ? 'active' : ''}`}
            onClick={() => setActiveTab('other')}
          >
            호남/충청/기타
          </button>
        </div>

        <div className="museum-list">
          {filteredMuseums.map((museum) => (
            <div key={museum.id} className="museum-card">
              <div className="museum-img-wrapper">
                <img src={museum.image} alt={museum.name} />
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
