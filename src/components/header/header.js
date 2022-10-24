import React from 'react';
import '../header/header.css';
export default function Header() {
  return (
    <div className="header">
      <div className="logo-header">
        <a href="/">
          <img src="/images/logo.png" alt="logo"></img>
        </a>
        <a href="#!">
          <img src="/images/menu-gamburger.png" alt="hamburger-menu"></img>
        </a>
      </div>
      <h1 className="header-title">РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В Украине</h1>
      <p className="header-desc">стадионы, газопроводы, мосты, дамбы</p>
      <div className="ads">
        <div className="card">
          <p className="card-heading">26</p>
          <p className="card-title">ЛЕТ</p>
          <p className="card-desc">на рынке</p>
        </div>
        <div className="card">
          <p className="card-heading">26</p>
          <p className="card-title">ЛЕТ</p>
          <p className="card-desc">на рынке</p>
        </div>
        <div className="card">
          <p className="card-heading">26</p>
          <p className="card-title">ЛЕТ</p>
          <p className="card-desc">на рынке</p>
        </div>
        <div className="card">
          <p className="card-heading">26</p>
          <p className="card-title">ЛЕТ</p>
          <p className="card-desc">на рынке</p>
        </div>
      </div>
    </div>
  );
}
