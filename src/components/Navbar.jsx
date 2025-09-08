// src/components/Navbar.jsx

import React, { useState } from 'react';

import dinoIcon from '../assets/dino.png';

function Navbar() {
  // 'useState' é um "gancho" (hook) do React que nos permite guardar um estado.
  // 'isOpen' guardará a informação se o menu mobile está aberto ou fechado.
  const [isOpen, setIsOpen] = useState(false);

  // Esta função simplesmente inverte o valor de 'isOpen' (true para false, false para true)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
      <div className="logo">
        <a href="#inicio">
          Festa do Joaquim
          <img src={dinoIcon} alt="Ícone de Dinossauro" className="logo-icon" />
        </a>
      </div>

      {/* O botão "hambúrguer" que só aparece em telas pequenas */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Este é o código HTML para o ícone de hambúrguer */}
      </button>

      {/* A navegação. A classe 'open' é adicionada/removida dinamicamente */}
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        {/* Ao clicar em um link, o menu se fecha (onClick={toggleMenu}) */}
        <a href="#inicio" onClick={toggleMenu}>Início</a>
        <a href="#sobre" onClick={toggleMenu}>Nossa Aventura</a>
        <a href="#fotos" onClick={toggleMenu}>Momentos</a>
        <a href="#presentes" onClick={toggleMenu}>Presentes</a>
        <a href="#local" onClick={toggleMenu}>Local da Festa</a>
      </nav>
    </header>
  );
}

export default Navbar;