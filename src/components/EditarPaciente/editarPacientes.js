import React, { useState, useEffect } from 'react';
import logoClinica from '../../assets/Logo2024.png';
import { useNavigate } from 'react-router-dom';
import './editarPacientes.css';

const EditarPacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/pacientes')
      .then(response => response.json())
      .then(data => setPacientes(data))
      .catch(error => console.error('Erro ao buscar pacientes:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEditClick = (paciente) => {
    navigate('/editar-pacientes', { state: { paciente } });
  };

  const filteredPacientes = pacientes.filter(paciente =>
    paciente.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="editar-pacientes-container">
        <img src={logoClinica} alt="Logo da Clínica Mary Exames" className="logo" />
      <h2 className="titulo">Editar Pacientes</h2>
      <input
        type="text"
        placeholder="Buscar paciente por nome"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <table className="pacientes-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredPacientes.map(paciente => (
            <tr key={paciente.cpf}>
              <td>{paciente.nomeCompleto}</td>
              <td>{paciente.cpf}</td>
              <td>
                <button onClick={() => handleEditClick(paciente)} className="edit-button">Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditarPacientes;
