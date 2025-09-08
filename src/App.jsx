// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Fotos from './components/Fotos';
import Presentes from './components/Presentes';
import Local from './components/Local';
import Footer from './components/Footer';
import './App.css'; // Importa o nosso CSS principal e consolidado

function App() {
  return (
    <div className="App">

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
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;