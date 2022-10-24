import React from 'react';
import '../main/main.css';

export default function Main() {
  return (
    <div className="main">
      <p className="main-title">НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</p>
      <div className="main-block">
        <div className="main-card">
          <img src="/images/image.png" alt="img"></img>
          <hr></hr>
          <p className="main-card-title">Арена</p>
          <p className="main-desc">
            Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой
            для разивтия на следующие десятилетия. Мы очень рады данному еву.
          </p>
        </div>
        <div className="main-card">
          <img src="/images/image.png" alt="img"></img>
          <hr></hr>
          <p className="main-card-title">Арена</p>
          <p className="main-desc">
            Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой
            для разивтия на следующие десятилетия. Мы очень рады данному еву.
          </p>
        </div>
        <div className="main-card">
          <img src="/images/image.png" alt="img"></img>
          <hr></hr>
          <p className="main-card-title">Арена</p>
          <p className="main-desc">
            Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой
            для разивтия на следующие десятилетия. Мы очень рады данному еву.
          </p>
        </div>
      </div>
    </div>
  );
}
