import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import ApiService from "../apiservices";
import jwt from "jsonwebtoken";

export const UsuarioContext = createContext(null);

export default function UsuarioProvider({ children }) {
  const [usuarioToken, setStore, remove] = useLocalStorage("_usuario_logado");
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    if (usuarioToken) {
      const claims = jwt.decode(usuarioToken);
      const usuario = {
        id: claims.userid,
        nome: claims.nome,
      };

      setUsuario(usuario);
    }
  }, [usuarioToken]);

  function handleAutenticar(tokenDTO = "") {
    const token = tokenDTO.token;

    ApiService.registrarToken(token);
    setStore(token);
  }

  function handleEncerraSessao() {
    remove();
  }

  function isAutenticado() {
    return !!usuarioToken; //Transformando variavel para boolean
  }

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        usuarioToken,
        onAutenticar: handleAutenticar,
        onEncerraSessao: handleEncerraSessao,
        isAutenticado: isAutenticado,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}
