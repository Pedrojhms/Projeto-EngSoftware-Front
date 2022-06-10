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
    return <Navigate to="/login" />;
  }

  return children;
}

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route
          path="/inicio"
          element={
            <RotaAutenticada>
              <Inicio />
            </RotaAutenticada>
          }
        />
      </Routes>
    </Router>
  );
}

export default Rotas;
