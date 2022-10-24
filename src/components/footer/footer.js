import React from 'react';
import '../footer/footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-block">
        <p className="footer-title">САМЫЕ УМНЫЕ ПРОЕКТЫ</p>
        <p className="footer-desc">РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ</p>
      </div>
      <button className="footer-btn">
        <img className="email" src="/images/mail.png" alt="icon"></img>
        <span>ВАШ ЗАПРОС</span>
      </button>
    </div>
  );
}
