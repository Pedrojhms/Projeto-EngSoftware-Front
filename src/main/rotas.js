import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Inicio from "../views/inicio";
import { UsuarioContext } from "../app/context/UsuarioContext";

function RotaAutenticada({ children }) {
  const { isAutenticado } = useContext(UsuarioContext);
  if (!isAutenticado()) {
    return <Navigate to="/" />;
  }

  return children;
}

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/editar-usuario" element={<RotaAutenticada><CadastroUsuario edit={true} /></RotaAutenticada>} />
        <Route path="/inicio" element={<RotaAutenticada><Inicio /></RotaAutenticada>} />
        <Route path="*" element={<h1>Página não encontrada!</h1>} />
      </Routes>
    </Router>
  );
}

export default Rotas;
