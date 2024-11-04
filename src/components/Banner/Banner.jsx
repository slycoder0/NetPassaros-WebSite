import React from 'react';
import './Banner.scss';

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="text text--top">
          <span>Net</span>
          <span>Pássaros</span>
        </div>
        <div className="text text--knockout">
          <span>Net</span>
          <span>Pássaros</span>
        </div>
        <div className="stripes">-</div>
        <button className="banner-button">TODOS PRODUTOS</button>
      </div>
    </div>
  );
}
