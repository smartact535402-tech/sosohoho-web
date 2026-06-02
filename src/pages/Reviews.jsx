import React, { useState, useEffect } from 'react';
import './Reviews.css';

const INITIAL_REVIEWS = [
  {
    id: 'initial-1',
    name: '김민지',
    programName: '경복궁 밤의 수라간 & 야간 해설 투어',
    rating: 5,
    content: '달빛 아래 비치는 경복궁은 정말 환상적이었습니다! 해설사님의 전문적이고 따뜻한 설명 덕분에 역사 지식도 머리에 쏙쏙 들어오고 잊지 못할 추억을 만들었습니다. 대접받은 궁중 음식도 정갈하고 아주 맛있었어요. 다음에는 가족들과 꼭 다시 오고 싶습니다.',
    date: '2026-05-20'
  },
  {
    id: 'initial-2',
    name: '박우진',
    programName: '정동길 & 덕수궁 돌담길 야간 산책',
    rating: 4,
    content: '정동길의 고요하고 차분한 밤 분위기는 대단히 낭만적이네요. 복잡한 도심 한복판에 이토록 마음이 쉼을 얻을 수 있는 골목길이 숨겨져 있다는 게 정말 신기하고 좋았습니다. 안내해주시는 분의 목소리 톤도 좋으시고 내용도 흥미진진해서 지루할 틈이 없었습니다.',
    date: '2026-05-15'
  },
  {
    id: 'initial-3',
    name: '이지아',
    programName: '북촌 한옥마을 필름카메라 출사',
    rating: 5,
    content: '평소에 필름 카메라 감성을 너무 좋아했는데 작동법부터 예쁜 구도 잡는 노하우까지 세심하게 알려주셔서 인생샷 진짜 많이 건졌어요! 골목 한구석, 기와 너머로 흐르는 햇살을 필름에 담을 때의 아날로그적인 희열이 잊히지 않습니다. 강추합니다.',
    date: '2026-05-10'
  }
];

const PROGRAMS = [
  '경복궁 밤의 수라간 & 야간 해설 투어',
  '정동길 & 덕수궁 돌담길 야간 산책',
  '북촌 한옥마을 필름카메라 출사',
  '조선 왕릉 & 종묘 역사 해설 투어'
];

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    programName: PROGRAMS[0],
    content: ''
  });

  // Load reviews on mount
  useEffect(() => {
    const saved = localStorage.getItem('sosohoho_reviews');
    if (saved) {
      setReviews(JSON.parse(saved));
    } else {
      setReviews(INITIAL_REVIEWS);
      localStorage.setItem('sosohoho_reviews', JSON.stringify(INITIAL_REVIEWS));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.content.trim()) return;

    const newReview = {
      id: Date.now().toString(),
      name: formData.name,
      programName: formData.programName,
      rating: rating,
      content: formData.content,
      date: new Date().toISOString().split('T')[0]
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem('sosohoho_reviews', JSON.stringify(updated));

    // Reset Form
    setFormData({
      name: '',
      programName: PROGRAMS[0],
      content: ''
    });
    setRating(5);
  };

  const handleDeleteReview = (reviewId) => {
    if (window.confirm('작성하신 후기를 삭제하시겠습니까?')) {
      const updated = reviews.filter(r => r.id !== reviewId);
      setReviews(updated);
      localStorage.setItem('sosohoho_reviews', JSON.stringify(updated));
    }
  };

  // Get average rating
  const avgRating = reviews.length > 0 
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory-dark)' }}>
      <div className="container">
        <h2 className="section-title">여행 후기</h2>
        <p className="section-subtitle">체험을 나누고 추억을 교감하는 소중한 발걸음</p>

        <div className="reviews-layout">
          {/* 왼쪽: 후기 통계 및 작성 폼 */}
          <div className="reviews-sidebar">
            {/* 평점 통계 카드 */}
            <div className="stats-card card">
              <h4>소소호호 만족도</h4>
              <div className="big-rating">{avgRating}</div>
              <div className="stars-display">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`star-char ${idx < Math.round(Number(avgRating)) ? 'filled' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="review-count">총 {reviews.length}개의 진솔한 후기</p>
            </div>

            {/* 후기 작성 폼 카드 */}
            <div className="review-form-card card">
              <h3>✍️ 생생한 후기 남기기</h3>
              <form onSubmit={handleSubmit} className="review-form">
                <div className="form-group">
                  <label htmlFor="name">작성자 이름</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="이름 혹은 닉네임"
                    value={formData.name} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="programName">참여한 프로그램</label>
                  <select 
                    id="programName" 
                    name="programName" 
                    value={formData.programName} 
                    onChange={handleInputChange}
                  >
                    {PROGRAMS.map((program, idx) => (
                      <option key={idx} value={program}>{program}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>평점 선택</label>
                  <div className="rating-selector">
                    {Array.from({ length: 5 }).map((_, idx) => {
                      const starValue = idx + 1;
                      return (
                        <button
                          key={idx}
                          type="button"
                          className={`star-btn ${starValue <= (hoverRating || rating) ? 'active' : ''}`}
                          onClick={() => handleStarClick(starValue)}
                          onMouseEnter={() => setHoverRating(starValue)}
                          onMouseLeave={() => setHoverRating(0)}
                          aria-label={`${starValue}점 주기`}
                        >
                          ★
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="content">후기 내용</label>
                  <textarea 
                    id="content" 
                    name="content" 
                    required 
                    placeholder="체험하며 느끼신 소소하고 행복한 순간들을 자유롭게 공유해 주세요!"
                    value={formData.content} 
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-block">후기 등록하기</button>
              </form>
            </div>
          </div>

          {/* 오른쪽: 후기 피드 목록 */}
          <div className="reviews-feed">
            {reviews.length === 0 ? (
              <div className="empty-reviews-box card">
                <p>아직 남겨진 후기가 없습니다. 첫 번째 여행 후기의 주인공이 되어보세요!</p>
              </div>
            ) : (
              <div className="reviews-list-grid">
                {reviews.map((review) => (
                  <div key={review.id} className="review-card card animate-fade-in">
                    <div className="review-card-header">
                      <div className="user-profile">
                        <div className="avatar">{review.name.charAt(0)}</div>
                        <div>
                          <h4 className="user-name">{review.name}</h4>
                          <span className="review-date">{review.date}</span>
                        </div>
                      </div>
                      <div className="stars-badge">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <span 
                            key={idx} 
                            className={`star-char ${idx < review.rating ? 'filled' : ''}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="review-card-body">
                      <span className="review-program-tag">{review.programName}</span>
                      <p className="review-content-text">{review.content}</p>
                    </div>
                    <div className="review-card-footer">
                      <button 
                        type="button" 
                        className="btn-review-delete" 
                        onClick={() => handleDeleteReview(review.id)}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
