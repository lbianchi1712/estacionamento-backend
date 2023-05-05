import { BuscarVagaUseCase } from '@core';
import { BuscarVagaController } from '@entrypoint';
import { MongoVagaRepository } from '@repository';

export const buscarVagaModule = (): BuscarVagaController => {
  const mongoVagaRepository = new MongoVagaRepository();
  const buscarVagaUseCase = new BuscarVagaUseCase(mongoVagaRepository);

  return new BuscarVagaController(buscarVagaUseCase);
};
