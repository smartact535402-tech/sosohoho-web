import React, { useState, useEffect } from 'react';
import './Booking.css';

const PROGRAMS = [
  {
    id: 1,
    name: '경복궁 야간 해설 투어',
    desc: '조선 왕조의 법궁으로 가장 웅장한 경복궁에서 은은한 달빛과 함께 근정전, 경회루의 아름다움을 거닐며 궁궐 야경의 백미를 감상합니다.',
    duration: '2시간',
    fee: '20,000원',
    image: '/palace_gyeongbokgung.jpg'
  },
  {
    id: 2,
    name: '창덕궁 후원 비밀 정원 투어',
    desc: '유네스코 세계문화유산인 창덕궁에서 자연과 조화를 이루는 고즈넉한 후원의 비밀스러운 산책로를 걸으며 궁궐 조경의 극치를 만납니다.',
    duration: '2시간',
    fee: '25,000원',
    image: '/palace_changdeokgung.jpg'
  },
  {
    id: 3,
    name: '덕수궁 돌담길 & 야간 투어',
    desc: '전통 목조건축과 서양식 석조전이 조화롭게 어우러진 덕수궁을 은은한 야간 조명 아래 거닐며 파란만장한 대한제국 시기의 역사를 듣습니다.',
    duration: '1시간 30분',
    fee: '15,000원',
    image: '/palace_deoksugung.jpg'
  },
  {
    id: 4,
    name: '창경궁 대온실 & 춘당지 투어',
    desc: '왕실 가족의 정겨운 생활 공간이었던 창경궁의 춘당지 연못을 돌며, 한국 최초의 서양식 식물원인 대온실의 고풍스러운 야경을 감상합니다.',
    duration: '1시간 30분',
    fee: '15,000원',
    image: '/palace_changgyeonggung.jpg'
  },
  {
    id: 5,
    name: '북촌 한옥마을 골목길 산책',
    desc: '도심의 빌딩 숲을 벗어나 구불구불 이어지는 북촌 한옥마을 골목길 사이로 나지막한 돌담과 기와지붕이 주는 옛 골목의 여유를 만끽합니다.',
    duration: '2시간',
    fee: '10,000원',
    image: '/alleyway_bukchon.png'
  },
  {
    id: 6,
    name: '서촌 마을 골목길 산책',
    desc: '경복궁 서쪽 서촌 골목 구석구석 숨어있는 작은 갤러리, 유서 깊은 예술인들의 흔적, 그리고 대오서점 같은 다정한 시간의 숨결을 걷습니다.',
    duration: '2시간',
    fee: '10,000원',
    image: '/alleyway_seochon.png'
  },
  {
    id: 7,
    name: '정동길 근대 역사 산책',
    desc: '붉은 벽돌의 정동제일교회와 이국적인 옛 신아일보관 등 근대 역사의 숨결이 숨 쉬는 낭만 가득한 정동길 산책로를 걸어봅니다.',
    duration: '1시간 30분',
    fee: '무료',
    image: '/alleyway_jeongdong.png'
  },
  {
    id: 8,
    name: '조선 왕릉 & 종묘 해설 투어',
    desc: '유네스코 세계문화유산인 종묘의 웅장한 정전과 자연 속에 조영된 아늑한 왕릉의 숲길을 걸으며 조선의 혼과 역사를 배우는 코스입니다.',
    duration: '2시간 30분',
    fee: '15,000원',
    image: '/joseon_tomb_banner.png'
  }
];

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(PROGRAMS[0].id);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '18:30',
    guests: '1',
    message: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastBooking, setLastBooking] = useState(null);

  // Load bookings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('sosohoho_bookings');
    if (saved) {
      setBookings(JSON.parse(saved));
    }
  }, []);

  // Handle program click
  const selectProgramHandler = (programId) => {
    setSelectedProgram(programId);
    // Smooth scroll to form
    const formElement = document.getElementById('booking-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const program = PROGRAMS.find(p => p.id === Number(selectedProgram));
    const newBooking = {
      id: Date.now().toString(),
      programName: program.name,
      programFee: program.fee,
      ...formData,
      bookingDate: new Date().toLocaleDateString()
    };

    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    localStorage.setItem('sosohoho_bookings', JSON.stringify(updatedBookings));

    setLastBooking(newBooking);
    setSubmitSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '18:30',
      guests: '1',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 8000);
  };

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('예약을 취소하시겠습니까?')) {
      const updated = bookings.filter(b => b.id !== bookingId);
      setBookings(updated);
      localStorage.setItem('sosohoho_bookings', JSON.stringify(updated));
    }
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        <h2 className="section-title">체험 신청</h2>
        <p className="section-subtitle">전통 문화 해설사와 함께 걷는 호젓하고 유익한 시간</p>

        {/* 프로그램 소개 그리드 */}
        <div className="booking-programs-grid">
          {PROGRAMS.map((program) => (
            <div key={program.id} className={`booking-program-card ${selectedProgram === program.id ? 'active' : ''}`}>
              <div className="program-img-wrapper">
                <img src={program.image} alt={program.name} />
                <span className="program-badge-fee">{program.fee}</span>
              </div>
              <div className="program-details">
                <h3 className="program-title">{program.name}</h3>
                <p className="program-desc">{program.desc}</p>
                <div className="program-meta">
                  <span>⏰ 소요시간: {program.duration}</span>
                  <span>💰 참가비: {program.fee}</span>
                </div>
                <button 
                  type="button" 
                  className={`btn ${selectedProgram === program.id ? 'btn-accent' : 'btn-outline'}`}
                  onClick={() => selectProgramHandler(program.id)}
                >
                  {selectedProgram === program.id ? '선택됨' : '프로그램 선택'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 예약 폼 섹션 */}
        <div id="booking-form-section" className="booking-form-wrapper card">
          <div className="form-header">
            <h3>📝 예약신청서 작성</h3>
            <p>
              선택한 프로그램: <span className="highlight-program-name">
                {PROGRAMS.find(p => p.id === Number(selectedProgram))?.name}
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">예약자 성함</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="홍길동"
                  value={formData.name} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">연락처</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  placeholder="010-1234-5678"
                  value={formData.phone} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">희망 날짜</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  required 
                  value={formData.date} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">희망 시간</label>
                <select 
                  id="time" 
                  name="time" 
                  value={formData.time} 
                  onChange={handleInputChange}
                >
                  <option value="10:00">오전 10:00</option>
                  <option value="14:00">오후 02:00</option>
                  <option value="16:00">오후 04:00</option>
                  <option value="18:30">저녁 06:30 (야간)</option>
                  <option value="19:30">저녁 07:30 (야간)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="guests">참여 인원</label>
                <select 
                  id="guests" 
                  name="guests" 
                  value={formData.guests} 
                  onChange={handleInputChange}
                >
                  <option value="1">1명</option>
                  <option value="2">2명</option>
                  <option value="3">3명</option>
                  <option value="4">4명</option>
                  <option value="5">5명 이상 (단체)</option>
                </select>
              </div>
            </div>

            <div className="form-group msg-group">
              <label htmlFor="message">요청사항 (선택)</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="해설 진행 시 참고할 사항이 있다면 적어주세요."
                value={formData.message} 
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-block">예약 신청하기</button>
          </form>
        </div>

        {/* 예약 성공 알림 */}
        {submitSuccess && lastBooking && (
          <div className="booking-success-alert card animate-pop-in">
            <div className="alert-content">
              <h4>🎉 예약 신청이 완료되었습니다!</h4>
              <p>기재하신 연락처로 상세 안내 문자가 발송될 예정입니다.</p>
              <div className="success-ticket">
                <div className="ticket-header">sosohoho TOUR TICKET</div>
                <div className="ticket-body">
                  <div className="ticket-field">
                    <span className="label">프로그램</span>
                    <span className="value">{lastBooking.programName}</span>
                  </div>
                  <div className="ticket-row">
                    <div className="ticket-field">
                      <span className="label">날짜 및 시간</span>
                      <span className="value">{lastBooking.date} / {lastBooking.time}</span>
                    </div>
                    <div className="ticket-field">
                      <span className="label">인원</span>
                      <span className="value">{lastBooking.guests}명</span>
                    </div>
                  </div>
                  <div className="ticket-row">
                    <div className="ticket-field">
                      <span className="label">예약자명</span>
                      <span className="value">{lastBooking.name}</span>
                    </div>
                    <div className="ticket-field">
                      <span className="label">요금</span>
                      <span className="value text-accent">{lastBooking.programFee}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 신청 내역 목록 */}
        <div className="my-bookings-section">
          <h3 className="section-sub-title">내 예약 내역 ({bookings.length})</h3>
          {bookings.length === 0 ? (
            <div className="empty-bookings-box card">
              <p>신청된 체험 예약이 없습니다. 상단 프로그램 중 원하는 코스를 신청해 보세요!</p>
            </div>
          ) : (
            <div className="bookings-list">
              {bookings.map((booking) => (
                <div key={booking.id} className="booking-receipt-card card animate-fade-in">
                  <div className="receipt-status-badge">신청 완료</div>
                  <h4 className="receipt-program-title">{booking.programName}</h4>
                  <div className="receipt-details">
                    <div>
                      <strong>일시:</strong> {booking.date} / {booking.time}
                    </div>
                    <div>
                      <strong>인원:</strong> {booking.guests}명
                    </div>
                    <div>
                      <strong>예약자:</strong> {booking.name} ({booking.phone})
                    </div>
                    {booking.message && (
                      <div className="receipt-msg">
                        <strong>요청사항:</strong> "{booking.message}"
                      </div>
                    )}
                  </div>
                  <div className="receipt-footer">
                    <span className="receipt-date">신청일: {booking.bookingDate}</span>
                    <button 
                      type="button" 
                      className="btn-cancel" 
                      onClick={() => handleCancelBooking(booking.id)}
                    >
                      예약 취소
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;
