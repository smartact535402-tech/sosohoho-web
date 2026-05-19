import React from 'react';
import './Alleyways.css';

const Alleyways = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">소소한 골목길</h2>
        <p className="section-subtitle">시간이 머무는 정겨운 길목에서 만나는 새로운 이야기</p>
        
        <div className="magazine-layout">
          <article className="magazine-article">
            <div className="magazine-img-wrapper">
              <img src="/alleyway_thumbnail.png" alt="북촌 한옥마을" />
            </div>
            <div className="magazine-content">
              <div className="article-category">Seoul, Bukchon</div>
              <h3 className="article-title">기와지붕 위로 내리는<br/>따스한 오후의 햇살</h3>
              <p className="article-text">
                도심의 빌딩 숲을 벗어나 북촌 한옥마을로 들어서면, 마치 시간이 느리게 흘러가는 듯한 착각에 빠집니다. 구불구불 이어지는 좁은 골목길 사이로 나지막한 돌담과 고풍스러운 나무 문들이 방문객을 반갑게 맞이합니다. 필름 카메라 하나 들고 발길 닿는 대로 걷다 보면, 잊고 있던 소소한 일상의 여유를 되찾게 됩니다.
              </p>
              <div className="course-box">
                <div className="course-title">추천 산책 코스</div>
                <div className="course-path">안국역 2번 출구 ➔ 북촌문화센터 ➔ 가회동 11번지 ➔ 북촌 8경 ➔ 삼청동 카페거리</div>
              </div>
            </div>
          </article>
          
          <article className="magazine-article">
            <div className="magazine-img-wrapper">
              <img src="/alleyway_thumbnail.png" alt="서촌 마을" />
            </div>
            <div className="magazine-content">
              <div className="article-category">Seoul, Seochon</div>
              <h3 className="article-title">오래된 책방과 예술이<br/>숨 쉬는 서촌 산책</h3>
              <p className="article-text">
                경복궁 서쪽에 위치한 서촌은 옛 문인들과 예술가들의 체취가 고스란히 남아있는 동네입니다. 미로처럼 얽힌 골목 모퉁이를 돌 때마다 작은 갤러리, 오래된 헌책방, 그리고 아기자기한 소품샵들이 보물처럼 숨어 있습니다. 낡았지만 다정한 풍경들이 바쁜 마음에 잔잔한 위로를 건네줍니다.
              </p>
              <div className="course-box">
                <div className="course-title">추천 산책 코스</div>
                <div className="course-path">경복궁역 2번 출구 ➔ 통인시장 ➔ 수성동 계곡 ➔ 박노수 미술관 ➔ 대오서점</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Alleyways;
