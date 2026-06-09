import { useState } from 'react';
import './Tombs.css';

const representativeTombs = [
  {
    name: '동구릉',
    location: '경기도 구리시',
    desc: "조선을 건국한 태조 이성계의 '건원릉'을 포함해 무려 9개의 능이 모여 있는 가장 큰 규모의 왕릉군입니다.",
    tag: '최대 규모 왕릉군'
  },
  {
    name: '영릉',
    location: '경기도 여주시',
    desc: '조선 최고의 성군으로 꼽히는 세종대왕과 소헌왕후가 잠들어 있는 곳입니다. 최초의 합장릉 형식을 취하고 있습니다.',
    tag: '세종대왕 & 소헌왕후'
  },
  {
    name: '선정릉',
    location: '서울시 강남구',
    desc: "성종과 정현왕후의 '선릉', 그리고 중종의 '정릉'이 함께 있습니다. 빌딩 숲이 우거진 서울 강남 한복판에 자리 잡고 있어 도심 속 특별한 휴식처가 되어줍니다.",
    tag: '도심 속 특별한 휴식처'
  },
  {
    name: '서오릉',
    location: '경기도 고양시',
    desc: '5개의 능이 모여 있는 곳으로, 숙종 and 인현왕후, 장희빈(대빈묘) 등 널리 알려진 조선 후기의 흥미로운 역사적 인물들이 잠들어 있습니다.',
    tag: '숙종 & 장희빈의 이야기'
  },
  {
    name: '융건릉',
    location: '경기도 화성시',
    desc: "비운의 왕세자인 사도세자(장조)와 혜경궁 홍씨의 '융릉', 그리고 효심 깊은 정조대왕과 효의왕후의 '건릉'이 나란히 자리하고 있습니다. 숲길이 유난히 아름답기로 유명합니다.",
    tag: '사도세자 & 정조대왕'
  }
];

const regionalTombs = [
  {
    region: '서울 강남/서초 지역',
    items: [
      { name: '헌인릉 (서초구)', desc: "조선 3대 태종과 원경왕후의 '헌릉', 그리고 23대 순조와 순원황후의 '인릉'이 있습니다. 대모산 자락에 있어 산책로가 잘 조성되어 있습니다." }
    ]
  },
  {
    region: '서울 노원/성북 지역',
    items: [
      { name: '태강릉 (노원구)', desc: "중종의 계비이자 조선 최고의 여걸로 불리는 문정왕후의 '태릉'과, 그의 아들 명종과 인순왕후의 '강릉'이 나란히 있습니다. 도심 속 울창한 소나무 숲길로 아주 유명합니다." },
      { name: '정릉 (성북구)', desc: '조선을 건국한 태조 이성계가 가장 사랑했던 신덕왕후의 능입니다. 아늑한 분위기에 도심과 가까워 걷기 좋습니다.' }
    ]
  },
  {
    region: '경기 남양주 지역',
    items: [
      { name: '광릉', desc: '수양대군으로 잘 알려진 7대 세조와 정희왕후의 능입니다. 광릉수목원(국립수목원)과 맞닿아 있어 자연경관이 매우 뛰어납니다.' },
      { name: '홍유릉', desc: '조선의 마지막과 대한제국의 시작을 함께한 고종(홍릉)과 순종(유릉)의 능입니다. 조선 왕릉 중 유일하게 황제릉 양식으로 지어져 다른 능들과는 사뭇 다른 석물들의 배치를 볼 수 있습니다.' }
    ]
  },
  {
    region: '강원 영월 지역',
    items: [
      { name: '장릉', desc: '숙부인 수양대군(세조)에게 왕위를 빼앗기고 유배되어 생을 마감한 비운의 왕, 6대 단종의 능입니다. 도읍지(한양) 주변 100리 이내에 조성해야 한다는 원칙을 벗어나 있는 유일한 왕릉이기도 합니다.' }
    ]
  }
];

const tombShapes = [
  {
    name: '단릉',
    visual: 'single',
    desc: '왕이나 왕비 중 한 분만 홀로 모신 능',
    example: '단종의 장릉, 중종의 정릉'
  },
  {
    name: '쌍릉',
    visual: 'double',
    desc: '왕과 왕비의 무덤 두 개를 나란히 조성한 능',
    example: '태종의 헌릉'
  },
  {
    name: '합장릉',
    visual: 'joined',
    desc: '하나의 거대한 무덤 안에 왕과 왕비를 함께 모신 능',
    example: '세종대왕의 영릉'
  },
  {
    name: '동원이강릉',
    visual: 'divided',
    desc: '제사를 지내는 정자각은 하나지만, 뒤편 언덕을 두 개로 나누어 왕과 왕비를 각각 모신 능',
    example: '세조의 광릉'
  },
  {
    name: '삼연릉',
    visual: 'triple',
    desc: '왕과 두 명의 왕비까지 총 3개의 무덤을 나란히 놓은 능',
    example: "조선 왕릉 중 헌종의 '경릉'이 유일합니다."
  }
];

const Tombs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        <h2 className="section-title">왕릉 & 종묘</h2>
        <p className="section-subtitle">유네스코 세계문화유산이 전하는 장엄하고 엄숙한 미</p>

        {/* Tab Navigation */}
        <div className="tomb-tabs">
          <button 
            className={`tomb-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            기본 소개
          </button>
          <button 
            className={`tomb-tab-btn ${activeTab === 'representative' ? 'active' : ''}`}
            onClick={() => setActiveTab('representative')}
          >
            대표 왕릉 5선
          </button>
          <button 
            className={`tomb-tab-btn ${activeTab === 'regional' ? 'active' : ''}`}
            onClick={() => setActiveTab('regional')}
          >
            지역별 대표 왕릉
          </button>
          <button 
            className={`tomb-tab-btn ${activeTab === 'shapes' ? 'active' : ''}`}
            onClick={() => setActiveTab('shapes')}
          >
            왕릉의 모양과 구조
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="tombs-section fade-in">
            <div className="tomb-block">
              <div className="tomb-image">
                <img src="/joseon_tomb_banner.jpg" alt="조선왕릉" />
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
                <img src="/jongmyo_shrine_banner.jpg" alt="종묘" />
              </div>
              <div className="tomb-content">
                <h3 className="tomb-title">종묘</h3>
                <p className="tomb-desc">
                  종묘는 조선 왕조의 역대 왕과 왕비, 그리고 사후에 추존된 왕과 왕비의 신주(위패)를 모시고 제사를 지내는 유교 사당입니다. 그 역사적 가치와 뛰어난 건축미를 인정받아 1995년 유네스코 세계문화유산으로 지정되었습니다.<br/><br/>
                  종묘의 핵심 공간인 <strong>정전(국보)</strong>은 무려 19칸에 달하는 세계에서 가장 긴 단일 목조 건축물 중 하나로, 거대한 스케일에도 불구하고 극도의 절제미를 보여줍니다. 단청을 칠하지 않은 붉은 기둥과 거친 박석(돌바닥), 묵직한 지붕선이 연출하는 공간감은 영혼들이 머무는 숭고하고 경건한 분위기를 자아냅니다. 옆에 위치한 <strong>영녕전(보물)</strong>은 정전의 규모가 부족해지자 새로 지은 별묘로, 조금 더 아늑하고 정겨운 건축 양식을 띄고 있습니다.<br/><br/>
                  건축물 자체뿐만 아니라, 이곳에서 거행되는 <strong>종묘제례와 종묘제례악</strong>은 조선 시대 국가 제사 의식을 고스란히 계승하여 지금까지 매년 전통 방식 그대로 재현되고 있으며, 유네스코 인류무형문화유산으로도 등재되어 있습니다. 이처럼 건축과 무형의 의례가 하나로 어우러진 종묘는 동양 전통 문화의 살아있는 정수입니다.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Representative Tombs */}
        {activeTab === 'representative' && (
          <div className="representative-section fade-in">
            <div className="section-intro">
              <h3>🌿 대표적인 조선 왕릉 (유네스코 세계문화유산)</h3>
              <p>남한에 남아있는 조선 왕릉은 총 40기로, 각기 다른 역사와 이야기를 품고 있습니다. 그중에서도 역사적 의미가 깊고 많은 분들이 찾는 대표적인 왕릉들을 소개합니다.</p>
            </div>
            <div className="tomb-grid">
              {representativeTombs.map((tomb, idx) => (
                <div key={idx} className="card tomb-card">
                  <div className="tomb-card-header">
                    <span className="tomb-card-tag">{tomb.tag}</span>
                    <h4 className="tomb-card-name">{tomb.name}</h4>
                    <span className="tomb-card-location">{tomb.location}</span>
                  </div>
                  <div className="tomb-card-body">
                    <p className="tomb-card-desc">{tomb.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Regional Tombs */}
        {activeTab === 'regional' && (
          <div className="regional-section fade-in">
            <div className="section-intro">
              <h3>📍 지역별 대표적인 조선 왕릉</h3>
              <p>거주하시는 지역이나 방문하기 편한 근교의 매력적인 조선 왕릉들을 찾아 탐방 계획을 세워보세요.</p>
            </div>
            <div className="regional-grid">
              {regionalTombs.map((regionGroup, idx) => (
                <div key={idx} className="region-card">
                  <h4 className="region-title">{regionGroup.region}</h4>
                  <div className="region-items">
                    {regionGroup.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="region-item">
                        <h5 className="region-item-name">{item.name}</h5>
                        <p className="region-item-desc">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Shapes of Tombs */}
        {activeTab === 'shapes' && (
          <div className="shapes-section fade-in">
            <div className="section-intro">
              <h3>💡 알고 보면 더 재밌는 '왕릉의 모양'</h3>
              <p>왕릉은 무덤(봉분)을 어떻게 배치했느냐에 따라 부르는 이름이 다릅니다. 능을 직접 방문하셨을 때 이 형태를 유심히 비교해 보는 것도 큰 재미입니다.</p>
            </div>
            <div className="shapes-grid">
              {tombShapes.map((shape, idx) => (
                <div key={idx} className="card shape-card">
                  <div className="shape-visual-container">
                    <div className={`shape-visual ${shape.visual}`}>
                      {shape.visual === 'single' && <div className="mound"></div>}
                      {shape.visual === 'double' && (
                        <>
                          <div className="mound"></div>
                          <div className="mound"></div>
                        </>
                      )}
                      {shape.visual === 'joined' && <div className="mound double-mound"></div>}
                      {shape.visual === 'divided' && (
                        <>
                          <div className="mound"></div>
                          <div className="t-gate"></div>
                          <div className="mound"></div>
                        </>
                      )}
                      {shape.visual === 'triple' && (
                        <>
                          <div className="mound"></div>
                          <div className="mound"></div>
                          <div className="mound"></div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="shape-content">
                    <h4 className="shape-name">{shape.name}</h4>
                    <p className="shape-desc">{shape.desc}</p>
                    <div className="shape-example">
                      <strong>대표 예시:</strong> {shape.example}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tombs;
