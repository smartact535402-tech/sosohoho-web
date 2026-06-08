import React, { useState, useRef, useEffect } from 'react';
import './Palaces.css';

const palacesData = [
  {
    id: 1,
    name: '경복궁',
    englishName: 'Gyeongbokgung Palace',
    desc: '조선 왕조의 법궁으로, 5대 궁궐 중 가장 규모가 크고 웅장합니다. 웅장한 근정전과 경회루의 사계절 풍경이 일품입니다.',
    detailDesc: '태조 4년(1395년)에 창건된 경복궁은 조선 왕조의 중심 법궁(정궁)입니다. 북악산 아래 자리 잡아 남쪽으로 광화문을 두고 축을 따라 근정전, 사정전, 강녕전 등이 배치되어 조선의 왕권과 기품을 고스란히 드러냅니다. 임진왜란 때 전소되었다가 고종 때 흥선대원군의 주도로 중건되었으며, 일제강점기 훼손의 아픔을 극복하고 지속적인 복원 사업을 통해 본래의 위엄을 되찾고 있습니다.',
    point: '추천 명소: 경회루, 향원정',
    image: '/palace_gyeongbokgung.jpg',
    closed: '매주 화요일',
    admission: '대인(만25세~64세) 3,000원 / 만24세 이하, 만65세 이상 무료',
    hours: '09:00 - 18:00 (계절별로 마감 시간이 17:00~18:30으로 변동, 입장 마감은 1시간 전)',
    special: '수문장 교대의식 (10:00, 14:00 / 광화문 앞) / 경회루 특별관람(사전 예약제)',
    route: [
      { name: '광화문', desc: '경복궁의 남쪽 정문으로, 3개의 홍예문(무지개문)과 2층 문루를 갖춘 웅장한 입구이자 궁궐의 얼굴입니다.' },
      { name: '흥례문 & 영제교', desc: '광화문을 지나 궁궐 안으로 본격 진입하는 문이며, 영제교는 액운을 막고 맑은 마음을 가지게 하는 돌다리입니다.' },
      { name: '근정전', desc: '경복궁의 법전(정전)으로 국보로 지정되어 있습니다. 왕의 즉위식, 조하, 외교 사신 접대 등 국가의 가장 공식적인 행사가 거행되던 경복궁의 심장입니다.' },
      { name: '사정전', desc: '왕의 공식 집무실인 편전으로, 매일 아침 국정을 논하고 학문을 토론하던 치열한 삶의 현장입니다.' },
      { name: '경회루', desc: '인공 연못 위에 우뚝 솟은 큰 규모의 누각으로, 왕실의 공식 연회를 열거나 가뭄 시 기우제를 지내던 명소입니다.' },
      { name: '강녕전 & 교태전', desc: '강녕전은 왕의 일상 거처이자 침전이며, 그 뒤에 위치한 교태전은 왕비의 침전이자 궁궐의 정중앙인 중궁전입니다.' },
      { name: '자경전', desc: '신정왕후(조대비)를 위해 고종이 지은 대비전으로, 아름다운 아미산 꽃담과 십장생을 새겨 넣은 십장생 굴뚝(국보)이 유명합니다.' },
      { name: '향원정 & 건청궁', desc: '향원정은 연못 한가운데 세워진 육각형 모양의 그림 같은 정자이며, 건청궁은 고종과 명성황후가 기거했던 사대부 주택 양식의 궁궐이자 을미사변의 아픈 역사가 깃든 곳입니다.' },
      { name: '집옥재 & 태원전', desc: '집옥재는 고종의 서재로 화려한 청나라풍 벽돌 양식의 특색 있는 건물이며, 태원전은 조선 태조의 어진(초상화)을 모셨던 빈전 영역입니다.' }
    ],
    tips: '경복궁 내에는 국립고궁박물관과 국립민속박물관이 함께 있어 전통문화를 함께 체험하기 좋습니다. 봄/가을철에는 예약제로 야간 특별 관람을 진행하므로 꼭 일정을 확인해 보세요.'
  },
  {
    id: 2,
    name: '창덕궁',
    englishName: 'Changdeokgung Palace',
    desc: '자연과 조화로운 배치가 돋보이는 궁궐로, 유네스코 세계문화유산에 등재되어 있습니다. 비밀스러운 후원이 유명합니다.',
    detailDesc: '태종 5년(1405년) 경복궁의 이궁(창건 이후 예비 궁궐)으로 건립된 창덕궁은, 조선 왕들이 경복궁보다 오랜 기간 동안 기거하며 실질적인 법궁 역할을 수행했습니다. 산자락의 자연 지형을 훼손하지 않고 조화롭게 건물을 배치한 전통 조경 예술의 극치를 보여주며, 유네스코 세계문화유산에 등재된 자랑스러운 유산입니다.',
    point: '추천 명소: 후원, 인정전',
    image: '/palace_changdeokgung.jpg',
    closed: '매주 월요일',
    admission: '전각: 대인 3,000원 / 후원: 대인 5,000원 (후원은 별도 입장권 필요)',
    hours: '전각: 09:00 - 18:00 (계절별 변동) / 후원: 시간별 제한 관람 (사전 예약 필수)',
    special: '창덕궁 후원 특별 관람 (해설사 인솔 하에 이동) / 창덕궁 달빛기행(야간 특별관람 프로그램)',
    route: [
      { name: '돈화문', desc: '창덕궁의 남쪽 정문으로, 현존하는 가장 오래된 궁궐 정문 중 하나이며 2층 누각 형태의 기품 있는 풍채를 자랑합니다.' },
      { name: '금천교', desc: '창덕궁의 명당수인 금천 위에 놓인 돌다리로, 다리 아래에는 액운을 쫓는 귀면상과 해태상이 조각되어 있어 지키고 있습니다.' },
      { name: '인정전', desc: '창덕궁의 중심 정전으로, 왕의 즉위식 등 국가 대사를 치른 곳입니다. 내부는 황색 천장과 유리 전등 등 대한제국기의 서양식 시설물이 더해져 이색적입니다.' },
      { name: '선정전', desc: '왕의 공식 집무 공간(편전)으로, 궁궐 전각 중 현존 유일의 푸른색 청기와 지붕을 얹어 매우 희귀하고 화려합니다.' },
      { name: '희정당 & 대조전', desc: '희정당은 왕이 평소에 머물던 사랑채이며, 대조전은 조선 왕비의 침전이자 궁궐 내전의 으뜸 전각으로, 마지막 임금 내외의 생활상이 보존되어 있습니다.' },
      { name: '낙선재', desc: '헌종이 후궁 경빈 김씨에 대한 지극한 사랑을 담아 지은 사가 형식의 서재이자 침전으로, 단청을 하지 않아 단아하고 소박한 한옥의 미를 전합니다.' },
      { name: '부용지 & 주합루', desc: '창덕궁 후원의 첫 번째 영역으로, 연못 한가운데 둥근 섬이 있는 부용지와 왕실 도서관이자 정조의 개혁 산실이었던 주합루(규장각)가 어우러진 비경입니다.' },
      { name: '애련지 & 연경당', desc: '불로문(늙지 않는 문)을 지나면 나타나는 애련정 연못과, 효명세자가 부친 순조를 위해 99칸 규모의 사대부 주택을 본떠 지은 연경당이 있습니다.' },
      { name: '옥류천', desc: '후원 가장 깊숙한 골짜기에 위치하여 거대한 암반에 둥근 홈을 파 물이 휘돌아 흐르게 하고, 정자가 옹기종기 모여 있는 지상 낙원 같은 공간입니다.' }
    ],
    tips: '창덕궁의 하이라이트인 후원(비원)은 관람 인원이 철저히 제한되므로 관람일 6일 전 오전 10시부터 열리는 온라인 사전 예약을 놓치지 마세요. 전각만 관람할 경우에는 자유 관람이 가능합니다.'
  },
  {
    id: 3,
    name: '덕수궁',
    englishName: 'Deoksugung Palace',
    desc: '전통 목조건축과 서양식 건축이 어우러진 독특한 매력을 지닌 궁궐입니다. 돌담길 산책로가 특히 아름답습니다.',
    detailDesc: '덕수궁은 조선 성종의 형인 월산대군의 사저에서 출발했습니다. 임진왜란 당시 도성의 궁궐이 모두 불타 선조의 임시 거처로 쓰이면서 궁궐로서의 지위를 얻었습니다. 1897년 고종 황제가 러시아 공사관에서 환궁(아관파천 후)하여 대한제국을 선포하면서 황제의 정궁이자 국가 중흥의 중심지가 되었습니다. 동서양 양식이 우아하게 녹아 있는 독특한 분위기가 감도는 궁궐입니다.',
    point: '추천 명소: 석조전, 덕수궁 돌담길',
    image: '/palace_deoksugung.jpg',
    closed: '매주 월요일',
    admission: '대인(만25세~64세) 1,000원 / 만24세 이하, 만65세 이상 무료',
    hours: '09:00 - 21:00 (입장 마감 20:00, 상시 야간 개방)',
    special: '덕수궁 왕궁수문장 교대의식 (11:00, 14:00, 15:30 / 대한문 앞) / 석조전 내부 관람(사전 예약제)',
    route: [
      { name: '대한문', desc: '덕수궁의 동쪽 정문으로 원래 이름은 대안문이었으나 국태민안을 기원하며 개칭되었으며, 매일 수문장 교대의식이 열려 활기가 넘칩니다.' },
      { name: '금천교 & 중화문', desc: '덕수궁의 중심 영역으로 향하는 관문이며, 중화문 앞 마당에는 왕을 수호하는 해태상과 박석이 깔려 있습니다.' },
      { name: '중화전', desc: '대한제국의 정전으로 고종 황제가 국정을 보고 사신을 맞이하던 궁궐의 심장입니다. 황제의 권위를 상징하는 황색 커튼과 답도의 쌍룡 부조가 특징입니다.' },
      { name: '석어당', desc: '덕수궁 내 유일한 2층 목조 건물로, 단청을 입히지 않아 소박한 여염집 분위기를 풍기며 임진왜란 당시 선조가 머무르고 승하한 역사적 공간입니다.' },
      { name: '즉조당 & 준명당', desc: '즉조당은 광해군과 인조가 즉위했던 유서 깊은 곳이며, 준명당은 고종이 신하를 접견하고 늦둥이 덕혜옹주를 위해 유치원으로 사용했던 따뜻하고 소박한 건물입니다.' },
      { name: '덕홍전 & 함녕전', desc: '덕홍전은 외빈을 접견하기 위해 내부에 화려한 샹들리에를 설치한 근대식 접견실이며, 함녕전은 고종 황제가 거처하다 승하하신 침전입니다.' },
      { name: '정관헌', desc: '러시아 건축가 사바틴이 설계한 서양식 테라스가 있는 목조 정자로, 고종 황제가 커피(양탕국)를 마시며 사색하거나 연회를 개최하던 사적 공간입니다.' },
      { name: '석조전', desc: '1910년에 준공된 조선의 정통 신고전주의 서양식 석조 건물로, 현재는 대한제국역사관으로 운영되고 있으며 내부 웅장한 로코코 양식 인테리어가 압권입니다.' }
    ],
    tips: '덕수궁은 5대 궁궐 중 유일하게 별도의 야간 특별 예약 없이 밤 9시까지 야간 조명이 켜진 고즈넉한 궁궐을 산책할 수 있습니다. 석조전 내부를 관람하고 싶으시다면 공식 홈페이지에서 일주일 전 사전 예약을 진행하세요.'
  },
  {
    id: 4,
    name: '창경궁',
    englishName: 'Changgyeonggung Palace',
    desc: '왕실 가족들의 생활 공간으로 지어졌으며, 아담하고 정겨운 분위기를 자아냅니다. 대온실과 춘당지가 돋보입니다.',
    detailDesc: '성종 14년(1483년) 세 분의 대비(정희왕후, 소혜왕후, 안순왕후)의 편안한 노후 생활을 위해 건립된 창경궁은 효심이 깃든 궁궐입니다. 창덕궁과 나란히 위치하여 동궐이라는 이름 아래 밀접한 생활 공간을 공유해 왔다. 임진왜란과 화재, 그리고 일제강점기 시절 동물원(창경원)으로 강등되는 수모를 겪었으나 1983년 벚나무를 걷어내고 명칭 복원 및 대대적인 고증 복원을 완수해 냈습니다.',
    point: '추천 명소: 대온실, 춘당지',
    image: '/palace_changgyeonggung.jpg',
    closed: '매주 월요일',
    admission: '대인(만25세~64세) 1,000원 / 만24세 이하, 만65세 이상 무료',
    hours: '09:00 - 21:00 (입장 마감 20:00, 상시 야간 개방)',
    special: '창경궁 인문학 해설 / 춘당지 야간 산책로 조명',
    route: [
      { name: '홍화문', desc: '창경궁의 동향 정문으로, 영조가 이곳에서 백성들을 친히 불러 세금 제도(균역법)를 개정하는 등 백성과 소통하던 애민 정신이 담긴 관문입니다.' },
      { name: '옥천교', desc: '봄이면 복사꽃과 살구꽃이 만발하여 궁궐 다리 중 단연 으뜸으로 꼽히며, 무지개 모양 아치(홍예) 사이에는 잡귀를 막는 도깨비 얼굴이 조각되어 있습니다.' },
      { name: '명정전', desc: '창경궁의 법전(정전)으로 국보입니다. 1616년 광해군 때 중건된 이래 불타지 않고 원형을 유지하여 우리나라 궁궐 정전 중 가장 오래된 단층 목조 건축물입니다.' },
      { name: '문정전 & 숭문당', desc: '문정전은 왕의 일상 집무실(편전)이자 영조가 사도세자를 뒤주에 가두도록 명했던 가슴 아픈 현장이며, 숭문당은 영조가 유생들과 경연을 벌이던 공부방입니다.' },
      { name: '함인정 & 환경전', desc: '함인정은 왕이 학자나 문무백관을 접견하던 사방이 트인 누각이며, 환경전은 왕들의 침전이자 세자빈의 상을 치르는 등 슬픔이 교차했던 공간입니다.' },
      { name: '경춘전 & 통명전', desc: '경춘전은 정조와 헌종이 태어난 길지이자 대비의 침전이며, 보물인 통명전은 왕비의 공식 침전으로 기와 지붕에 용마루가 없는 것이 특징입니다.' },
      { name: '영춘헌 & 집복재', desc: '후궁들의 처소이자 정조가 평소 조용히 기거하며 독서와 사색을 좋아했고 마침내 승하하신 소박한 여염집 양식의 별채입니다.' },
      { name: '춘당지', desc: '원래 왕이 친히 농사를 지어 시범을 보이던 논(권농장)이었으나 일제가 연못으로 판 곳을 현대에 들어와 한국 전통 정원의 연못으로 정화한 수려한 호수입니다.' },
      { name: '대온실', desc: '1909년에 완공된 우리나라 최초의 프랑스식 서양식 유리 온실입니다. 흰색 목재 프레임과 유리가 자아내는 아름답고 이국적인 분위기가 돋보이는 등록문화유산입니다.' }
    ],
    tips: '창경궁은 덕수궁과 마찬가지로 밤 9시까지 개장합니다. 춘당지 주변의 야간 산책길과 대온실의 낭만적인 야경은 놓칠 수 없는 백미입니다. 창덕궁과 연결통로가 있어 한 번에 두 궁을 함께 방문할 수 있습니다.'
  },
  {
    id: 5,
    name: '경희궁',
    englishName: 'Gyeonghuigung Palace',
    desc: '조선 후기의 이궁으로, 경사가 심한 지형을 교묘하게 이용한 건축미가 특징입니다. 고즈넉한 산책을 즐기기 좋습니다.',
    detailDesc: '광해군 10년(1623년) 건립된 경희궁은 인왕산 자락의 서쪽에 위치하여 동쪽의 창덕궁/창경궁에 대응하는 서궐(西闕)로 불렸습니다. 경사가 있는 자연 산세를 거스르지 않고 자연스러운 단차를 활용한 입체적 배치가 큰 아름다움이었으나, 일제강점기에 전각 대부분이 헐리고 경성중학교가 세워지는 등 5대 궁궐 중 가장 처참한 훼손을 겪었습니다. 이후 서울역사박물관 건립과 함께 일부 전각이 고증 복원되어 도심 속 숨겨진 조용한 쉼터 역할을 하고 있습니다.',
    point: '추천 명소: 숭정전, 서암',
    image: '/palace_gyeonghuigung.jpg',
    closed: '매주 월요일',
    admission: '무료',
    hours: '09:00 - 18:00 (입장 마감 17:30)',
    special: '조용하고 한적한 고궁 사색 / 서울역사박물관 연계 관람',
    route: [
      { name: '흥화문', desc: '경희궁의 정문으로 원래 현재 구세군빌딩 자리에 서 있었으나 일제에 의해 강제 매각/이전되었다가 남산 신라호텔 정문을 거쳐 천신만고 끝에 현재 위치로 복원 이전된 역사의 목격자입니다.' },
      { name: '숭정문 & 숭정전', desc: '경희궁의 중심 법전인 숭정전과 정문입니다. 숭정전은 경종, 정조, 헌종 등 조선 후기의 주요 군주들이 왕위를 이어받아 즉위식을 가졌던 상징적인 역사의 요람입니다.' },
      { name: '자정전', desc: '경희궁의 편전으로 왕이 신하들을 접견하고 일상 정무를 보거나 학술 토론(경연)을 치르던 학문과 실무의 건물입니다.' },
      { name: '태령전', desc: '영조 대왕의 어진(초상화)을 소중히 보관하고 모시기 위해 특별히 건립된 신성한 전각입니다.' },
      { name: '서암', desc: '태령전 뒤편에 솟아오른 기이한 모양의 거대한 바위로, 바위 아래 샘물(암천)이 흘러나옵니다. 광해군이 이곳의 왕기에 이끌려 궁궐을 짓게 되었다는 전설을 품고 있습니다.' }
    ],
    tips: '경희궁은 5대 궁궐 중 유일하게 입장료가 전면 무료입니다. 관광객이 적고 매우 한적하여 복잡한 도심 속에서 호젓한 궁궐 산책이나 명상을 즐기기에 가장 완벽한 시크릿 가든입니다.'
  }
];

const Palaces = () => {
  const [selectedPalaceId, setSelectedPalaceId] = useState(1);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const detailSectionRef = useRef(null);

  const selectedPalace = palacesData.find((p) => p.id === selectedPalaceId);

  // When palace changes, reset active step to 0
  useEffect(() => {
    setActiveStepIndex(0);
  }, [selectedPalaceId]);

  const handlePalaceSelect = (id) => {
    setSelectedPalaceId(id);
    // Smooth scroll to details
    setTimeout(() => {
      detailSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleNextStep = () => {
    if (activeStepIndex < selectedPalace.route.length - 1) {
      setActiveStepIndex(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(prev => prev - 1);
    }
  };

  return (
    <section className="section palaces-page-bg">
      <div className="container">
        <h2 className="section-title">우리나라 5대 궁궐</h2>
        <p className="section-subtitle">조선 왕조의 숨결이 살아 숨 쉬는 고궁을 거닐어 보세요</p>

        {/* Overview Grid */}
        <div className="palace-grid">
          {palacesData.map((palace) => (
            <div 
              key={palace.id} 
              className={`card palace-card ${selectedPalaceId === palace.id ? 'active-palace-card' : ''}`}
              onClick={() => handlePalaceSelect(palace.id)}
            >
              <div className="palace-img-wrapper">
                <img src={palace.image} alt={palace.name} />
                <div className="palace-card-overlay">
                  <span>자세히 보기</span>
                </div>
              </div>
              <div className="palace-content">
                <h3 className="palace-name">
                  {palace.name} <span className="palace-eng-small">{palace.englishName}</span>
                </h3>
                <p className="palace-desc">{palace.desc}</p>
                <div className="palace-point-wrapper">
                  <span className="palace-point-badge">대표 명소</span>
                  <span className="palace-point-text">{palace.point.replace('추천 명소: ', '')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Palace Detail Interactive Section */}
        <div className="palace-detail-section" ref={detailSectionRef}>
          {/* Quick tab navigator for detailed view */}
          <div className="palace-detail-tabs">
            {palacesData.map((p) => (
              <button
                key={p.id}
                className={`palace-tab-btn ${selectedPalaceId === p.id ? 'active' : ''}`}
                onClick={() => setSelectedPalaceId(p.id)}
              >
                {p.name}
              </button>
            ))}
          </div>

          <div className="palace-detail-container card fade-in">
            {/* Left: Palace General Info & Image */}
            <div className="palace-detail-header">
              <div className="palace-detail-img-box">
                <img src={selectedPalace.image} alt={selectedPalace.name} />
                <div className="palace-detail-title-overlay">
                  <h2>{selectedPalace.name}</h2>
                  <p>{selectedPalace.englishName}</p>
                </div>
              </div>
              
              <div className="palace-detail-intro-box">
                <h3 className="intro-title">궁궐 역사와 가치</h3>
                <p className="intro-text">{selectedPalace.detailDesc}</p>

                <div className="info-grid">
                  <div className="info-item">
                    <div className="info-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                    <div className="info-details">
                      <span className="info-label">정기 휴궁일</span>
                      <span className="info-val">{selectedPalace.closed}</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <div className="info-details">
                      <span className="info-label">관람시간</span>
                      <span className="info-val">{selectedPalace.hours}</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                    <div className="info-details">
                      <span className="info-label">관람료</span>
                      <span className="info-val">{selectedPalace.admission}</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    </div>
                    <div className="info-details">
                      <span className="info-label">주요 행사 및 안내</span>
                      <span className="info-val">{selectedPalace.special}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Interactive Tour Route (관람순서도) */}
            <div className="palace-tour-route-box">
              <h3 className="route-section-title">
                🗺️ 추천 관람 순서도
                <span className="route-subtitle">각 번호를 클릭해 주요 장소의 설명을 읽어보세요</span>
              </h3>

              {/* Scrollable Timeline Steps */}
              <div className="route-timeline-container">
                <div className="route-timeline-line"></div>
                <div className="route-timeline-steps">
                  {selectedPalace.route.map((step, idx) => (
                    <div 
                      key={idx} 
                      className={`route-timeline-node-wrapper ${idx === activeStepIndex ? 'active' : ''}`}
                      onClick={() => setActiveStepIndex(idx)}
                    >
                      <div className="route-timeline-node">
                        {idx + 1}
                      </div>
                      <span className="route-timeline-label">{step.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Route Spot Detail Panel */}
              <div className="route-spot-detail-card">
                <div className="spot-header">
                  <div className="spot-number">Step {activeStepIndex + 1}</div>
                  <h4 className="spot-title">{selectedPalace.route[activeStepIndex].name}</h4>
                </div>
                <p className="spot-desc">{selectedPalace.route[activeStepIndex].desc}</p>
                
                <div className="spot-navigator">
                  <button 
                    className="spot-nav-btn" 
                    onClick={handlePrevStep}
                    disabled={activeStepIndex === 0}
                  >
                    이전 장소
                  </button>
                  <span className="spot-progress">{activeStepIndex + 1} / {selectedPalace.route.length}</span>
                  <button 
                    className="spot-nav-btn" 
                    onClick={handleNextStep}
                    disabled={activeStepIndex === selectedPalace.route.length - 1}
                  >
                    다음 장소
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom: Tips Banner */}
            <div className="palace-tips-banner">
              <div className="tips-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line><circle cx="12" cy="12" r="10"></circle></svg>
              </div>
              <div className="tips-content">
                <strong>관람 꿀팁:</strong> {selectedPalace.tips}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Palaces;
