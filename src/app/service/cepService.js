import axios from "axios";

const httpClient = axios.create({
  baseURL: `https://viacep.com.br/ws/`
});

class CepService {

  consultar(cep) {
    const requestUrl = `${cep}/json`;
    return httpClient.get(requestUrl);
  }
}

export default CepService;
