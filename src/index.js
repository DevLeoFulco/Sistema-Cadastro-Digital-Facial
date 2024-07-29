// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importar o componente principal aqui
 // Se houver estilos globais, importar aqui

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Renderizar o componente principal aqui */}
  </React.StrictMode>,
  document.getElementById('root') // Onde 'root' é o id do elemento HTML onde desejo renderizar a aplicação
);
