import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const UsuarioContext = createContext(null);

export default function UsuarioProvider({ children }) {
  const [usuario, setStore, remove] = useLocalStorage("_usuario_logado");

  function handleAutenticar(usuario = "") {
    setStore(usuario);
  }

  function handleEncerraSessao() {
    remove();
  }

  function isAutenticado() {
    return !!usuario; //Transformando variavel para boolean
  }

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        onAutenticar: handleAutenticar,
        onEncerraSessao: handleEncerraSessao,
        isAutenticado: isAutenticado,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}
