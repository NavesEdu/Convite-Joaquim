// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import InvitationPage from './components/invitationPage.jsx';
import { parties } from './partyData'; // Importa nossos dados
import './index.css';

// Cria o roteador com as diferentes páginas
const router = createHashRouter([
  {
    path: "/joaquim-carmo",
    element: <InvitationPage partyData={parties.joaquim_carmo} />,
  },
  {
    path: "/joaquim-srs", // URL para a festa da Maria
    element: <InvitationPage partyData={parties.joaquim_srs} />,
  },
  {
    // Opcional: Uma página inicial que leva para os dois convites
    path: "/",
    element: <div><h1>Escolha um convite:</h1><a href="#/joaquim-carmo">Festa do Joaquim em Carmo</a><br/><a href="#/joaquim-srs">Festa do Joaquim em Santa Rita</a></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);