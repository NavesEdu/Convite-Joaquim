// src/components/Sobre.jsx
import React from 'react';

import fotoJoaquim from '../assets/joaquim-1.jpeg';

function Sobre({ partyData }) {
  return (
    <div className="content-section">
      <h2>Nossa Pequena Aventura</h2>
      
      <div className="sobre-container">
        {/* Coluna da Esquerda: A Foto */}
        <div className="sobre-image">
          <img src={fotoJoaquim} alt="Foto do Joaquim" />
        </div>

        {/* Coluna da Direita: O Texto */}
        <div className="sobre-text">
          <p>
            Há um ano, nossa maior aventura começou! Estamos muito felizes em comemorar o primeiro rugido do nosso pequeno dinossauro com as pessoas que mais amamos. Junte-se a nós para um dia de muita diversão, doces e brincadeiras pré-históricas!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;