import axios from 'axios';

async function getDeputados() {
  const endPoint = 'https://dadosabertos.camara.leg.br/api/v2/deputados';
  return axios.get(endPoint);
}

async function getDeputadosByUf(uf) {
  const endPoint = `https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=${uf}`;
  return axios.get(endPoint);
}

async function getDeputadosByPartido(partido) {
  const endPoint = `https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=${partido}`;
  return axios.get(endPoint);
}

async function getDeputadoById(id) {
  const endPoint = `https://dadosabertos.camara.leg.br/api/v2/deputados?id=${id}`;
  return axios.get(endPoint);
}

export {
  getDeputados,
  getDeputadosByUf,
  getDeputadosByPartido,
  getDeputadoById,
};
