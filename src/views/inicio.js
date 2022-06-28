import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../app/context/UsuarioContext";
import UsuarioService from "../app/service/usuarioService";

const usuarioService = new UsuarioService();

const Inicio = () => {
  const navigate = useNavigate();
  const { usuario, onEncerraSessao } = useContext(UsuarioContext);

  const handleEditar = () => {
    navigate("/editar-usuario");
  };

  const handleDeletar = () => {
    const deletar = window.confirm("Tem certeza que deseja excluir seu cadastro?")
    if (deletar) {
      usuarioService.deletar(usuario.id).then(() => {
        onEncerraSessao()
        window.location.href="/"
      })
      .catch(error => {
        window.alert(error.response.data.message)
      })
    }
  }

  return (
    <div className="jumbotron">
      <h1 className="display-3">
        Bem vindo {usuario ? usuario.nome : "Desconhecido"}!
      </h1>
      <hr className="my-4" />
      <p>
        E essa é sua área administrativa, utilize um dos menus ou botões abaixo
        para navegar pelo sistema.
      </p>
      <p className="lead">
        {/* <a
          className="btn btn-primary btn-lg"
          onClick={handleCadastrar}
          role="button"
        >
          <i className="fa fa-users"></i> Cadastrar Usuário
        </a> */}
        <a
          className="btn btn-warning btn-lg"
          onClick={handleEditar}
          role="button"
        >
          <i className="fa fa-users"></i> Editar Usuário
        </a>
        <a
          className="btn btn-danger btn-lg"
          onClick={handleDeletar}
          role="button"
        >
          <i className="fa fa-users"></i> Excluir Usuário
        </a>
      </p>
    </div>
  );
};

export default Inicio;
