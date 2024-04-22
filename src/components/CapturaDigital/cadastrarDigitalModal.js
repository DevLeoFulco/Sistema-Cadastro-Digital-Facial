// src/components/CadastrarDigitalModal.js

import React, { useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import './cadastrarDigitalModal.css';

Modal.setAppElement('#root');

const CadastrarDigitalModal = ({ isOpen, onRequestClose, onDigitalCadastrada }) => {
  const [digitalCadastrada, setDigitalCadastrada] = useState(false);

  const handleCadastrarDigital = () => {
    // Aqui você pode adicionar a lógica para cadastrar a digital
    // Suponha que a digital seja cadastrada com sucesso
    setDigitalCadastrada(true);
    // Exibir a notificação de sucesso
    toast.success('Digital cadastrada com sucesso!');

    onDigitalCadastrada();
  };
  const handleFecharModal = () => {
    setDigitalCadastrada(false); // Reseta o estado quando o modal é fechado
    onRequestClose(); // Fecha o modal
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleFecharModal}
      
      contentLabel="Cadastrar Digital"
      className="react-modal-content" // Adiciona a classe para estilização do modal
      overlayClassName="react-modal-overlay"
    >
      <h2>Cadastrar Digital</h2>
      <button onClick={handleCadastrarDigital} className='button-digital'>Cadastrar Digital</button>
      {digitalCadastrada && <p>Digital cadastrada com sucesso!</p>}

      <div className="digital-window">
        {/* Aqui você pode inserir a lógica para exibir a imagem da digital */}
        {/* Por exemplo: <img src={imagemDigital} alt="Digital" /> */}
        <p>Imagem da digital aqui</p>
      </div>
    </Modal>
  );
};

export default CadastrarDigitalModal;
