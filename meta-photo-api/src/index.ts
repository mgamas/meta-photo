import Fastify from 'fastify';
import cors from '@fastify/cors';
import { getEnrichedPhoto, getFilteredPhotos } from './api';

const server = Fastify();

server.register(cors);

server.get('/externalapi/photos/:id', async (request, reply) => {
  const { id } = request.params as { id: string };
  const photo = await getEnrichedPhoto(parseInt(id));
  reply.send(photo);
});

server.get('/externalapi/photos', async (request, reply) => {
  const { title, albumTitle, email, limit = 25, offset = 0 } = request.query as {
    title?: string;
    albumTitle?: string;
    email?: string;
    limit?: number;
    offset?: number;
  };

  const photos = await getFilteredPhotos({ 
    title, 
    albumTitle, 
    email, 
    limit: parseInt(limit as unknown as string), 
    offset: parseInt(offset as unknown as string) 
  });
  reply.send(photos);
});

const start = async () => {
  try {
    await server.listen(3000);
    console.log('Server listening on http://localhost:3000');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();
