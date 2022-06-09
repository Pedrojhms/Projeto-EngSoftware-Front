import React, { useState } from "react";

import Card from "../components/card";
import FormGroup from "../components/form-group";

import { useNavigate } from "react-router-dom";
import UsuarioService from "../app/service/usuarioService";

const usuarioService = new UsuarioService();

const CadastroUsuario = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepetica, setSenhaRepetida] = useState("");
  const [mensagemErro, setMensagemErro] = useState();

  const handleCadastrar = () => {
    if (senha === senhaRepetica) {
      usuarioService
        .cadastrar({
          nome: nome,
          email: email,
          senha: senha,
        })
        .then((response) => {
          navigate("/inicio");
        })
        .catch((erro) => {
          setMensagemErro(erro.response.data);
        });
    } else {
      setMensagemErro("As senhas não coincidem.");
    }
  };

  const handleFecharAlerta = () => {
    setMensagemErro(null);
  };

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <Card title="Cadastro de Usuário">
      <div className="row">
        {mensagemErro && (
          <div className="alert alert-dismissible alert-danger">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              onClick={() => handleFecharAlerta()}
            ></button>
            <strong>{mensagemErro}</strong>
          </div>
        )}
        <div className="col-lg-12">
          <div className="bs-component">
            <FormGroup label="Nome: *" htmlFor="inputNome">
              <input
                type="text"
                id="inputNome"
                className="form-control"
                name="nome"
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup label="Email: *" htmlFor="inputEmail">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup label="Senha: *" htmlFor="inputSenha">
              <input
                type="password"
                id="inputSenha"
                className="form-control"
                name="senha"
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup label="Senha Repetição: *" htmlFor="inputSenhaRepeticao">
              <input
                type="password"
                id="inputSenhaRepeticao"
                className="form-control"
                name="senhaRepeticao"
                onChange={(e) => setSenhaRepetida(e.target.value)}
                required
              />
            </FormGroup>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleCadastrar}
            >
              Salvar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleVoltar}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CadastroUsuario;
