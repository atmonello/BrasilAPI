import app from '@/app';
import { getDeputados } from '@/services/camara/deputados';

const action = async (request, response) => {
  try {
    const {
      data: { dados: deputados },
    } = await getDeputados();
    response.status(200);
    response.json({
      status: 'ok',
      deputados,
    });
  } catch (error) {
    response.status(404);
    response.json({
      status: 'error',
      message: error.message,
    });
  }
};

export default app().get(action);
