// src/components/FormularioPaciente/FormularioPaciente.js

import React, { useState } from 'react';
import './formularioPaciente.css';
import logoClinica from '../../assets/Logo2024.png';
import CadastrarDigitalModal from '../CapturaDigital/cadastrarDigitalModal';
import CapturaFacialModal from '../CapturaFacial/cadastrarFacialModal';

const FormularioPaciente = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReconhecimentoFacialAberto, setIsReconhecimentoFacialAberto] = useState(false); // Novo estado para o modal de reconhecimento facial

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onDigitalCadastrada = () => {
    // Aqui você pode adicionar a lógica que deseja executar quando a digital for cadastrada
    console.log('Digital cadastrada com sucesso!');
    // Por exemplo, você pode abrir o modal de reconhecimento facial aqui
    setIsReconhecimentoFacialAberto(true);
  };


  return (
    <div className="container">
      <img src={logoClinica} alt="Logo da Clínica Mary Exames" className="logo" />
      <form className="formulario">
      <h2 className="titulo">Cadastro do Paciente</h2>
        <div className="campo">
          <label htmlFor="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" />
        </div>
        <div className="campo">
          <label htmlFor="nome">Endereco:</label>
          <input type="text" id="end" name="endereco" />
        </div>
        <div className="campo">
          <label htmlFor="nome">Estado:</label>
          <input type="text" id="estado" name="estado" />
        </div>
        <div className="campo">
          <label htmlFor="nome">CEP:</label>
          <input type="text" id="cep" name="cep" />
        </div>
        
        <div className="campo">
          <label htmlFor="nome">Data Nascimento:</label>
          <input type="date" id="nasc" name="nascimento" />
        </div>
        <div className="campo">
          <label htmlFor="nome">Idade:</label>
          <input type="number" id="idade" name="idade" />
        </div>
        <div className="campo">
          <label htmlFor="estadoCivil">Estado Civil:</label>
          <select id="estadoCivil" name="estadoCivil">
            <option value="solteiro">Solteiro(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="divorciado">Divorciado(a)</option>
            <option value="viuvo">Viúvo(a)</option>
          </select>
        </div>
        <div className="campo">
          <label htmlFor="nome">Quantidade Filhos:</label>
          <input type="number" id="filho" name="filho" />
        </div>
        <div className="campo">
          <label htmlFor="nome">Cliente Mary Card:</label>
          <div className="checkbox-container">
        <input type="checkbox" id="card" name="marycard" />
        <label htmlFor="card" className='checkbox-label'>Sim</label>
    </div>
        </div>
        <div className="campo">
          <label htmlFor="nome">CPF:</label>
          <input type="number" id="cpf" name="cpf" />
        </div>
        <div className="campo">
          <label htmlFor="nome">Telefone:</label>
          <input type="number" id="fone" name="telefone" />
        </div>
        <div className="campo">
          <label htmlFor="nome">Email:</label>
          <input type="email" id="mail" name="mail" />
        </div>
        <div className="campo">
          <label htmlFor="nome">Dependentes:</label>
          <div className="checkbox-container">
        <input type="checkbox" id="card" name="marycard" />
        <label htmlFor="card">Sim</label>
    </div>
        </div>
        <div className="campo">
          <label htmlFor="nome">Dependente 1:</label>
          <input type="text" id="depen1" name="dependente1" />
        </div>
        <div className="campo">
          <label htmlFor="nome">Dependente 2:</label>
          <input type="text" id="depen1" name="dependente1" />
        </div>
        <div className="campo">
          <label htmlFor="nome">Dependente 3:</label>
          <input type="text" id="depen1" name="dependente1" />
        </div>
        <div className="campo">
          <label htmlFor="nome">Dependente 4:</label>
          <input type="text" id="depen1" name="dependente1" />
        </div>
        <div className="campo">
          <label htmlFor="nome">Dependente 5:</label>
          <input type="text" id="depen1" name="dependente1" />
        </div>
        <div className="button-container">
          <button type="submit">Cadastrar Paciente</button>
          <button type="button" onClick={openModal}>Cadastrar Digital</button>
        </div>
        
      </form>
      
      <CadastrarDigitalModal isOpen={isModalOpen} onRequestClose={closeModal} onDigitalCadastrada={onDigitalCadastrada} />
      <CapturaFacialModal isOpen={isReconhecimentoFacialAberto} onRequestClose={() => setIsReconhecimentoFacialAberto(false)} />
    </div>
  );
}

export default FormularioPaciente;
