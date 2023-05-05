import { expressAdapter } from '@adapter';
import { buscarVagaModule } from '@server';
import { Router } from 'express';

const router = Router();

router.get('/api/vagas', expressAdapter(buscarVagaModule));

router.get('/', function(req, res) {
  res.send('Olá, bem vindo à API do estacionamento!');
});

export { router };
