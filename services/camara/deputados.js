import axios from 'axios';

const endPoint = 'https://dadosabertos.camara.leg.br/api/v2/deputados';

async function getDeputados() {
  return axios.get(endPoint);
}

export default getDeputados;
