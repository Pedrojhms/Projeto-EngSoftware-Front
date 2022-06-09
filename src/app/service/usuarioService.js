import ApiService from "../apiservices";

class UsuarioService extends ApiService {
  constructor() {
    super("/api/usuarios");
  }

  autenticar(credenciais) {
    return this.post("/autenticar", credenciais);
  }

  cadastrar(formulario) {
    return this.post("/salvar", formulario);
  }
}

export default UsuarioService;
