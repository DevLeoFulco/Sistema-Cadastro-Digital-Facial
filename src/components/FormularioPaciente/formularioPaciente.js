import React, { useState } from 'react';
import './formularioPaciente.css';
import logoClinica from '../../assets/Logo2024.png';
import CadastrarDigitalModal from '../CapturaDigital/cadastrarDigitalModal';
import CapturaFacialModal from '../CapturaFacial/cadastrarFacialModal';
import ModalComponent from '../Modal/ModalComponents';

const FormularioPaciente = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReconhecimentoFacialAberto, setIsReconhecimentoFacialAberto] = useState(false); // Novo estado para o modal de reconhecimento facial
  const [isClienteMaryCard, setIsClienteMaryCard] = useState(false);
  const [isBiometriaModalOpen, setIsBiometriaModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [pacienteCadastrado, setPacienteCadastrado] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsBiometriaModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (pacienteCadastrado) {
      setIsBiometriaModalOpen(true);
    }
  };

  const closeModalBiometria = () => {
    setIsBiometriaModalOpen(false);
    setIsReconhecimentoFacialAberto(true);
  };

  const closeModalFacial = () => {
    setIsReconhecimentoFacialAberto(false);
  };

  const onDigitalCadastrada = () => {
    // Aqui vou adicionar a lógica para executar quando a digital for cadastrada
    console.log('Digital cadastrada com sucesso!');
    // Abrindo o modal de reconhecimento facial aqui
    setIsReconhecimentoFacialAberto(true);
  };

  const handleClienteMaryCardChange = (e) => {
    setIsClienteMaryCard(e.target.checked);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const paciente = {
      nomeCompleto: event.target.nome.value,
      endereco: event.target.end.value,
      estado: event.target.estado.value,
      cep: event.target.cep.value,
      dataNascimento: event.target.nasc.value,
      estadoCivil: event.target.estadoCivil.value,
      idade: event.target.idade.value,
      quantidadeFilhos: event.target.filho.value,
      clienteMaryCard: event.target.marycard.checked,
      telefone: event.target.fone.value,
      email: event.target.mail.value,
      temDependentes: event.target.dependente.checked,
      dependente1: event.target.depen1.value,
      dependente2: event.target.depen2.value,
      dependente3: event.target.depen3.value,
      dependente4: event.target.depen4.value,
      dependente5: event.target.depen5.value,
      // biometria e imagemFacial vou tratar separadamente
    };
    const camposObrigatorios = [
      'nomeCompleto', 'endereco', 'estado', 'cep', 'dataNascimento', 'telefone', 'email'
    ];

    for (let campo of camposObrigatorios) {
      if (!paciente[campo]) {
        setModalMessage('Por favor, preencha todos os campos obrigatórios.');
        setPacienteCadastrado(false);
        openModal();
        return;
      }
    }
    fetch('http://localhost:8080/api/pacientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paciente),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Paciente cadastrado com sucesso:', data);
      // Abrir modal de sucesso
      setPacienteCadastrado(true);
      setModalMessage('Paciente cadastrado com sucesso!');
      openModal();
      closeModalBiometria();
    })
    .catch((error) => {
      console.error('Erro ao cadastrar paciente:', error);
      // Abrir modal de erro
      setPacienteCadastrado(false);
      setModalMessage('Erro ao cadastrar paciente.');
      openModal();
    });
  };

  return (
    <div className="container">
      <img src={logoClinica} alt="Logo da Clínica Mary Exames" className="logo" />
      <form className="formulario" onSubmit={handleSubmit}>
        <h2 className="titulo">Cadastro do Paciente</h2>
        <div className="campo">
          <label htmlFor="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div className="campo">
          <label htmlFor="end">Endereco:</label>
          <input type="text" id="end" name="end" required/>
        </div>
        <div className="campo">
          <label htmlFor="estado">Estado:</label>
          <input type="text" id="estado" name="estado" required />
        </div>
        <div className="campo">
          <label htmlFor="cep">CEP:</label>
          <input type="text" id="cep" name="cep" required/>
        </div>
        <div className="campo">
          <label htmlFor="nasc">Data Nascimento:</label>
          <input type="date" id="nasc" name="nascimento" required/>
        </div>
        <div className="campo">
          <label htmlFor="idade">Idade:</label>
          <input type="number" id="idade" name="idade" required />
        </div>
        <div className="campo">
          <label htmlFor="estadoCivil">Estado Civil:</label>
          <select id="estadoCivil" name="estadoCivil" required>
            <option value="solteiro">Solteiro(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="divorciado">Divorciado(a)</option>
            <option value="viuvo">Viúvo(a)</option>
          </select>
        </div>
        <div className="campo">
          <label htmlFor="filho">Quantidade Filhos:</label>
          <input type="number" id="filho" name="filho" />
        </div>
        <div className="campo">
          <label htmlFor="marycard">Cliente Mary Card:</label>
          <div className="checkbox-container">
            <input type="checkbox" id="marycard" name="marycard" onChange={handleClienteMaryCardChange} />
            <label htmlFor="marycard" className='checkbox-label'>Sim</label>
          </div>
        </div>
        <div className="campo">
          <label htmlFor="cpf">CPF:</label>
          <input type="number" id="cpf" name="cpf" required/>
        </div>
        <div className="campo">
          <label htmlFor="fone">Telefone:</label>
          <input type="number" id="fone" name="telefone" required/>
        </div>
        <div className="campo">
          <label htmlFor="mail">Email:</label>
          <input type="email" id="mail" name="mail" required/>
        </div>
        <div className="campo">
          <label htmlFor="dependente">Dependentes:</label>
          <div className="checkbox-container">
            <input type="checkbox" id="dependente" name="dependente" />
            <label htmlFor="dependente">Sim</label>
          </div>
        </div>
        <div className="campo">
          <label htmlFor="depen1">Dependente 1:</label>
          <input type="text" id="depen1" name="dependente1" disabled={!isClienteMaryCard}/>
        </div>
        <div className="campo">
          <label htmlFor="depen2">Dependente 2:</label>
          <input type="text" id="depen2" name="dependente2" disabled={!isClienteMaryCard}/>
        </div>
        <div className="campo">
          <label htmlFor="depen3">Dependente 3:</label>
          <input type="text" id="depen3" name="dependente3" disabled={!isClienteMaryCard}/>
        </div>
        <div className="campo">
          <label htmlFor="depen4">Dependente 4:</label>
          <input type="text" id="depen4" name="dependente4" disabled={!isClienteMaryCard}/>
        </div>
        <div className="campo">
          <label htmlFor="depen5">Dependente 5:</label>
          <input type="text" id="depen5" name="dependente5" disabled={!isClienteMaryCard}/>
        </div>
        <div className="button-container">
          <button type="submit">Cadastrar Paciente</button>
          <button type="button" onClick={openModal}>Cadastrar Digital</button>
        </div>
      </form>

      <CadastrarDigitalModal isOpen={isBiometriaModalOpen} onRequestClose={closeModalBiometria} onDigitalCadastrada={onDigitalCadastrada} />
      <CapturaFacialModal isOpen={isReconhecimentoFacialAberto} onRequestClose={() => setIsReconhecimentoFacialAberto(false)} />

      <ModalComponent
        title="Cadastro de Paciente"
        message="Paciente cadastrado com sucesso!"
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default FormularioPaciente;
