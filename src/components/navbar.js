import React from "react";

import NavBarItem from "./navbar-item";

function NavBar() {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="/inicio" className="navbar-brand">
          Projeto Final Raoni
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavBarItem href="/inicio" label="Inicio" />

            <NavBarItem href="usuarios.html" label="Usuários" />

            <NavBarItem href="/cadastro-usuario" label="Relizar Compra" />

            <NavBarItem href="/login" label="Login" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
