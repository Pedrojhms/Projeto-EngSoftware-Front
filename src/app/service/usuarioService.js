import ApiService from "../apiservices";

class UsuarioService extends ApiService {
  constructor() {
    super("/api/usuarios");
  }

  async buscar(id) {
    return await this.get(`/buscar/${id}`)
  }

  autenticar(credenciais) {
    return this.post("/autenticar", credenciais);
  }

  cadastrar(formulario) {
    return this.post("/salvar", formulario);
  }

  editar(id, formulario) {
    return this.put(`/editar/${id}`, formulario)
  }

  deletar(id) {
    return this.delete(`/deletar/${id}`)
  }
}

export default UsuarioService;
