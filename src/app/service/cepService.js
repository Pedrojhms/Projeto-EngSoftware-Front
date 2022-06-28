import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://cep.la/",
  headers: {"Accept": "application/json"}
});

class CepService {

  consultar(cep) {
    const requestUrl = `${cep}`;
    return httpClient.get(requestUrl);
  }
}

export default CepService;
