import app from '@/app';
import { getDeputadoById } from '@/services/camara/deputados';
import NotFoundError from '@/errors/not-found';

const action = async (request, response) => {
  const { id } = request.query;
  const {
    data: { dados },
  } = await getDeputadoById(id);

  if (Array.isArray(dados) && !dados.length) {
    response.status(404);

    throw new NotFoundError({
      name: 'NotFoundError',
      message: 'Deputado não encontrado.',
      type: 'not_found',
    });
  }
  response.status(200);
  response.json({
    status: 'ok',
    deputados: dados,
  });
};

export default app().get(action);
