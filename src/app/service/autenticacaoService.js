import useLocalStorage from "../hooks/useLocalStorage";

class AutenticacaoService {
  static isAutenticado = () => {
    const [usuario] = useLocalStorage("_usuario_logado");

    return usuario;
  };
}

export default AutenticacaoService;
