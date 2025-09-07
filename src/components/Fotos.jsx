// src/components/Fotos.jsx
import React, { useState } from 'react';
import './Fotos.css'; // Criaremos este arquivo de CSS específico para Fotos

function Fotos() {
  // Array com os caminhos das suas fotos.
  // IMPORTANTE: Ajuste estes caminhos e nomes de arquivo!
  const photos = [
    '/joaquim/joaquim-1.jpeg',
    '/joaquim/joaquim-2.jpeg',
    '/joaquim/joaquim-3.jpeg',
    '/joaquim/joaquim-4.jpeg',
    '/joaquim/joaquim-5.jpeg',
    '/joaquim/joaquim-6.jpeg',
    '/joaquim/joaquim-7.jpeg',
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      (prevIndex === photos.length - 1 ? 0 : prevIndex + 1)
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      (prevIndex === 0 ? photos.length - 1 : prevIndex - 1)
    );
  };

  return (
    <div className="content-section">
      <h2>Momentos Dino-Mágicos!</h2>
      <p>Reviva a aventura do nosso pequeno explorador.</p>

      <div className="carousel-container">
        <button onClick={prevPhoto} className="carousel-button prev">
          &#10094;
        </button>

        <div className="carousel-image-wrapper">
          <img 
            src={photos[currentPhotoIndex]} 
            alt={`Foto ${currentPhotoIndex + 1} do Joaquim`} 
            className="carousel-image"
          />
        </div>

        <button onClick={nextPhoto} className="carousel-button next">
          &#10095;
        </button>
      </div>

      <div className="carousel-indicators">
        {photos.map((_, index) => (
          <span 
            key={index}
            className={`indicator ${index === currentPhotoIndex ? 'active' : ''}`}
            onClick={() => setCurrentPhotoIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Fotos;