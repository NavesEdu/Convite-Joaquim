// src/components/Local.jsx
import React from 'react';

function Local() {
  return (
    <div className="content-section">
      <h2>Local da Expedição</h2>
      
      <div className="local-container">
        <div className="address-info">
          <h3>Casa da minha Bisa Maria Angélica</h3>
          <p><strong>Endereço:</strong> Rua Eugênio de Souza, 315 - Bairro Centro</p>
          <p><strong>Data:</strong> 30/11/2025</p>
          <p><strong>Horário:</strong> às 16:00</p>
          <a 
          href="https://www.google.com/maps/place/R.+Eug%C3%AAnio+de+Souza,+315+-+Carmo+da+Cachoeira,+MG,+37225-000/@-21.4626948,-45.2254938,17z/data=!3m1!4b1!4m6!3m5!1s0x94cab934eb85a33d:0x32449abda0c792c!8m2!3d-21.4626998!4d-45.2229189!16s%2Fg%2F11fzf30vjg?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          rel="noopener noreferrer"
          className="button"
          >
            Ver no Google Maps
          </a>
        </div>

        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.1483557487213!2d-45.22549382394297!3d-21.462694787863164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cab934eb85a33d%3A0x32449abda0c792c!2sR.%20Eug%C3%AAnio%20de%20Souza%2C%20315%20-%20Carmo%20da%20Cachoeira%2C%20MG%2C%2037225-000!5e0!3m2!1spt-BR!2sbr!4v1757286659591!5m2!1spt-BR!2sbr"
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