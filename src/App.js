import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditarPacientes from './components/EditarPaciente/editarPacientes';
import FormularioPaciente from './components/FormularioPaciente/formularioPaciente';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/editar-pacientes" element={<EditarPacientes />} />
        <Route path="/" element={<FormularioPaciente/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
