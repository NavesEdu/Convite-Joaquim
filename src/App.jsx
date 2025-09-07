// src/App.jsx
import React from 'react';
// Importamos o componente de navegação que criamos
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Fotos from './components/Fotos';
import Presentes from './components/Presentes';
import Local from './components/Local';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="dino-footprints-background">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Navbar />

      <main>
        <section id="inicio">
          <Hero />
        </section>

        <section id="sobre">
          <Sobre />
        </section>
        
        <section id="fotos">
          <Fotos />
        </section>
        
        <section id="presentes">
          <Presentes />
        </section>
        
        <section id="local">
          <Local />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;