// src/components/Local.jsx
import React from 'react';

function Local() {
  return (
    <div className="content-section">
      <h2>Local da Expedição</h2>
      
      <div className="local-container">
        <div className="address-info">
          <h3>{partyData.locationName}</h3>
          <p><strong>Endereço:</strong> {partyData.adress}</p>
          <p><strong>Data:</strong> {partyData.date}</p>
          <p><strong>Horário:</strong> {partyData.time}</p>
          <a 
          href={partyData.googleMapsLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="button"
          >
            Ver no Google Maps
          </a>
        </div>

        <div className="map-container">
          <iframe 
            src={partyData.googleMapsiframe}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Local;