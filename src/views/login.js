import React, { useState } from "react";

import Card from "../components/card";
import FormGroup from "../components/form-group";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState();

  const handleCadastrar = () => {
    navigate("/cadastro-usuario");
  };

  const handleEntrar = () => {
    axios
      .post("http://localhost:8080/api/usuarios/autenticar", {
        email: email,
        senha: senha,
      })
      .then((response) => {
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
                      class="btn btn-success"
                      onClick={() => handleEntrar()}
                    >
                      Entrar
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => handleCadastrar()}
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