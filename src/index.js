// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importe o componente principal aqui
 // Se houver estilos globais, importe-os aqui

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderize o componente principal aqui */}
  </React.StrictMode>,
  document.getElementById('root') // Onde 'root' é o id do elemento HTML onde você deseja renderizar a aplicação
);
