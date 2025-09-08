// src/components/InvitationPage.jsx
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sobre from './Sobre';
import Fotos from './Fotos';
import Presentes from './Presentes';
import Local from './Local';
import Footer from './Footer';

function InvitationPage({ partyData }) {
  return (
    <div className="App">
      <Navbar partyData={partyData}/>

      <main>
        <section id="inicio">
          <Hero partyData={partyData}/>
        </section>

        <section id="sobre">
          <Sobre partyData={partyData}/>
        </section>
        
        <section id="fotos">
          <Fotos partyData={partyData}/>
        </section>
        
        <section id="presentes">
          <Presentes partyData={partyData}/>
        </section>
        
        <section id="local">
          <Local partyData={partyData}/>
          <Footer partyData={partyData}/>
        </section>
      </main> 
    </div>
  );
}

export default InvitationPage;