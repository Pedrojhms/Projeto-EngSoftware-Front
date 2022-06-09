import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Inicio from "../views/inicio";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
