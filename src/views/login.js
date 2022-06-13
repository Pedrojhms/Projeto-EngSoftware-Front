import React, { useContext, useState } from "react";

import Card from "../components/card";
import FormGroup from "../components/form-group";

import { useNavigate, Navigate } from "react-router-dom";

import UsuarioService from "../app/service/usuarioService";
import { UsuarioContext } from "../app/context/UsuarioContext";

const usuarioService = new UsuarioService();

const Login = () => {
  const navigate = useNavigate();
  const { isAutenticado, onAutenticar } = useContext(UsuarioContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState();

  if (isAutenticado()) {
    return <Navigate to="/inicio" />;
  }

  const handleCadastrar = () => {
    navigate("/cadastro-usuario");
  };

  const handleEntrar = () => {
    usuarioService
      .autenticar({
        email: email,
        senha: senha,
      })
      .then((response) => {
        onAutenticar(response.data);
        navigate("/inicio");
      })
      .catch((erro) => {
        setMensagem(erro.response.data);
      });
  };

  const handleFecharAlerta = () => {
    setMensagem(null);
  };

  return (
    <div className="row">
      <div className="col-md-6" style={{ position: "relative", left: "300px" }}>
        <div className="bs-docs-section">
          {mensagem && (
            <div className="alert alert-dismissible alert-danger">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                onClick={() => handleFecharAlerta()}
              ></button>
              <strong>{mensagem}</strong>
            </div>
          )}

          <Card title="Login">
            <div className="row">
              <div className="col-lg-12">
                <div className="bs-component">
                  <fieldset>
                    <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Digite o Email"
                        required
                      />
                    </FormGroup>

                    <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                      <input
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Senha"
                        required
                      />
                    </FormGroup>

                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => handleEntrar()}
                    >
                      Entrar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleCadastrar}
                    >
                      Cadastrar
                    </button>
                  </fieldset>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
