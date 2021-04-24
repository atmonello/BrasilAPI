const axios = require('axios');

describe('/camara/v1/deputados', () => {
  test('Requisitando todos os deputados', async () => {
    const requestUrl = `${global.SERVER_URL}/api/camara/v1/deputados`;
    const response = await axios.get(requestUrl);

    expect(response.data).toMatchObject({
      status: 'ok',
      deputados: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          nome: expect.any(String),
          siglaPartido: expect.any(String),
          siglaUf: expect.any(String),
          idLegislatura: expect.any(Number),
          urlFoto: expect.any(String),
          email: expect.any(String),
        }),
      ]),
    });
  });
});
