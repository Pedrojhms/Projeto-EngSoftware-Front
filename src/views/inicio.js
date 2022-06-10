import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../app/context/UsuarioContext";

const Inicio = () => {
  const navigate = useNavigate();
  const { usuario } = useContext(UsuarioContext);
  const [saldo, setSaldo] = useState(0);

  const handleCadastrar = () => {
    navigate("/cadastro-usuario");
  };

  return (
    <div className="jumbotron">
      <h1 className="display-3">
        Bem vindo {usuario ? usuario.nome : "Desconhecido"}!
      </h1>
      <p className="lead">Esse é seu sistema de finanças.</p>
      <p className="lead">Seu saldo atual é de R$ {saldo}</p>
      <hr className="my-4" />
      <p>
        E essa é sua área administrativa, utilize um dos menus ou botões abaixo
        para navegar pelo sistema.
      </p>
      <p className="lead">
        <a
          className="btn btn-primary btn-lg"
          onClick={handleCadastrar}
          role="button"
        >
          <i className="fa fa-users"></i> Cadastrar Usuário
        </a>
        <a
          className="btn btn-danger btn-lg"
          href="https://bootswatch.com/flatly/#"
          role="button"
        >
          <i className="fa fa-users"></i> Realizar compra
        </a>
      </p>
    </div>
  );
};

export default Inicio;
