// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';

import heroBackground from '../assets/dino-fundo.jpg';

function Hero({ partyData }) {
  const calculateTimeLeft = () => {
    // IMPORTANTE: Substitua pela data e hora da sua festa!
    const difference = +new Date(`2025-11-30T16:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="hero-container" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="hero-text">
        <h1>Você está convidado para a {partyData.theme}!</h1>
        <h2 className="subtitle">
          para comemorar o
          <span className="highlight-text">{partyData.age} do {partyData.name}</span>
        </h2>
      </div>

      {/* Contagem Regressiva */}
      <div className="countdown">
        {timeLeft.dias !== undefined ? (
          <>
            <div className="countdown-item">
              <span>{timeLeft.dias}</span>
              <small>Dias</small>
            </div>
            <div className="countdown-item">
              <span>{timeLeft.horas}</span>
              <small>Horas</small>
            </div>
            <div className="countdown-item">
              <span>{timeLeft.minutos}</span>
              <small>Minutos</small>
            </div>
            <div className="countdown-item">
              <span>{timeLeft.segundos}</span>
              <small>Segundos</small>
            </div>
          </>
        ) : (
          <span className="party-time">É hora da festa!</span>
        )}
      </div>

      <a href="#local" className="hero-button">Ver Local da Festa</a>
    </div>
  );
}

export default Hero;