import app from '@/app';
import { getDeputadosByPartido } from '@/services/camara/deputados';
import NotFoundError from '@/errors/not-found';

const action = async (request, response) => {
  const { partido } = request.query;
  const {
    data: { dados },
  } = await getDeputadosByPartido(partido);

  if (Array.isArray(dados) && !dados.length) {
    response.status(404);

    throw new NotFoundError({
      name: 'NotFoundError',
      message: 'Partido não encontrado.',
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
