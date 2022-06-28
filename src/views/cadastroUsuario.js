import React, { useEffect, useState, useContext } from "react";

import Card from "../components/card";
import FormGroup from "../components/form-group";

import { useNavigate } from "react-router-dom";
import UsuarioService from "../app/service/usuarioService";
import CepService from "../app/service/cepService";
import { UsuarioContext } from "../app/context/UsuarioContext";

const usuarioService = new UsuarioService();

const cepService = new CepService();

const CadastroUsuario = ({ edit }) => {
  const [formFields, setFormFields] = useState({});
  const {
    id,
    nome,
    email,
    senha,
    senhaRepetida,
    cep,
    logradouro,
    bairro,
    cidade,
    uf,
    numero,
    complemento } = formFields
  const { usuario } = useContext(UsuarioContext);
  const [mensagemErro, setMensagemErro] = useState();


  const navigate = useNavigate();

  useEffect(() => {
    if (edit && usuario) handleBuscarUsuario()
  }, [edit])

  const changeValue = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const handleBuscarUsuario = () => {
    usuarioService.buscar(usuario.id).then(response => {
      setFormFields(response.data)
    })
      .catch((erro) => {
        setMensagemErro(erro.response.data.message);
      });
  }

  const handleCadastrar = () => {
    if (senha === senhaRepetida) {
      const body = {
        id: id,
        nome: nome,
        email: email,
        senha: senha,
        cep: cep,
        logradouro: logradouro,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
        numero: numero,
        complemento: complemento,
      }
      if (edit) {
        usuarioService.editar(body.id, body)
        .then(() => navigate("/"))
        .catch(erro => setMensagemErro(erro.reponse.data.message))
      } else {
        usuarioService
          .cadastrar(body)
          .then(() => navigate("/"))
          .catch(erro => setMensagemErro(erro.response.data))
      }
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

  const handleBuscarCep = async () => {
    const { data } = await cepService.consultar(cep)
    setFormFields({ ...formFields, ...data, cidade: data.localidade })
  }

  return (
    <Card title={edit ? "Editar Usuário" : "Cadastro de Usuário"}>
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
                onChange={changeValue}
                value={nome}
                required
              />
            </FormGroup>
            <FormGroup label="Email: *" htmlFor="inputEmail">
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                name="email"
                onChange={changeValue}
                value={email}
                required
              />
            </FormGroup>
            <FormGroup label="Senha: *" htmlFor="inputSenha">
              <input
                type="password"
                id="inputSenha"
                className="form-control"
                name="senha"
                onChange={changeValue}
                required
              />
            </FormGroup>
            <FormGroup label="Senha Repetição: *" htmlFor="inputsenhaRepetida">
              <input
                type="password"
                id="inputsenhaRepetida"
                className="form-control"
                name="senhaRepetida"
                onChange={changeValue}
                required
              />
            </FormGroup>
            <FormGroup id="inputCep" label="Cep: *" htmlFor="inputCep">
              <input
                type="text"
                className="form-control"
                name="cep"
                onChange={changeValue}
                value={cep}
                required
              />
            </FormGroup>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleBuscarCep}
            >
              Buscar
            </button>
            <FormGroup id="inputLogradouro" label="Logradouro: *" htmlFor="inputLogradouro">
              <input
                type="text"
                className="form-control"
                name="logradouro"
                onChange={changeValue}
                value={logradouro}
                disabled
              />
            </FormGroup>
            <div className="endereco-grupo">
              <FormGroup id="inputBairro" label="Bairro: *" htmlFor="inputBairro">
                <input
                  type="text"
                  className="form-control"
                  name="bairro"
                  onChange={changeValue}
                  value={bairro}
                  disabled
                />
              </FormGroup>
              <FormGroup id="inputCidade" label="Cidade: *" htmlFor="inputCidade">
                <input
                  type="text"
                  className="form-control"
                  name="cidade"
                  onChange={changeValue}
                  value={cidade}
                  disabled
                />
              </FormGroup>
            </div>
            <div className="endereco-grupo">
              <FormGroup id="inputUf" label="UF: *" htmlFor="inputUf">
                <input
                  type="text"
                  className="form-control"
                  name="uf"
                  onChange={changeValue}
                  value={uf}
                  disabled
                />
              </FormGroup>
              <FormGroup id="inputNumero" label="Numero: *" htmlFor="inputNumero">
                <input
                  type="text"
                  className="form-control"
                  name="numero"
                  onChange={changeValue}
                  value={numero}
                />
              </FormGroup>
              <FormGroup id="inputComplemento" label="Complemento: " htmlFor="inputComplemento">
                <input
                  type="text"
                  className="form-control"
                  name="complemento"
                  onChange={changeValue}
                  value={complemento}
                />
              </FormGroup>
            </div>
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
