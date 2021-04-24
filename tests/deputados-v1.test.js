const axios = require('axios');

describe('/congresso/v1/deputados', () => {
  test('Requisitando todos os deputados', async () => {
    const requestUrl = `${global.SERVER_URL}/api/congresso/v1/deputados`;
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

  test('Requisitando deputados de um estado válido', async () => {
    const requestUrl = `${global.SERVER_URL}/api/congresso/v1/deputados/uf/SP`;
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

  test('Requisitando deputados de um estado inválido', async () => {
    const requestUrl = `${global.SERVER_URL}/api/congresso/v1/deputados/uf/123`;
    try {
      await axios.get(requestUrl);
    } catch (error) {
      const { response } = error;
      expect(response.status).toBe(404);
      expect(response.data).toMatchObject({
        name: 'NotFoundError',
        message: 'UF não encontrado.',
        type: 'not_found',
      });
    }
  });

  test('Requisitando deputados de um partido válido', async () => {
    const requestUrl = `${global.SERVER_URL}/api/congresso/v1/deputados/partido/PP`;
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

  test('Requisitando deputados de um partido inválido', async () => {
    const requestUrl = `${global.SERVER_URL}/api/congresso/v1/deputados/partido/123`;
    try {
      await axios.get(requestUrl);
    } catch (error) {
      const { response } = error;
      expect(response.status).toBe(404);
      expect(response.data).toMatchObject({
        name: 'NotFoundError',
        message: 'Partido não encontrado.',
        type: 'not_found',
      });
    }
  });

  test('Requisitando deputados com um ID válido', async () => {
    const requestUrl = `${global.SERVER_URL}/api/congresso/v1/deputados/160508`;
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

  test('Requisitando deputados com um ID inválido', async () => {
    const requestUrl = `${global.SERVER_URL}/api/congresso/v1/deputados/111111111`;
    try {
      await axios.get(requestUrl);
    } catch (error) {
      const { response } = error;
      expect(response.status).toBe(404);
      expect(response.data).toMatchObject({
        name: 'NotFoundError',
        message: 'Deputado não encontrado.',
        type: 'not_found',
      });
    }
  });
});
