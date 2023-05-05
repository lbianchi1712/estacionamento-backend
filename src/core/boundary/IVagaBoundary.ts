import { VagaEntity } from '@core';

export interface IVagaBoundary {
  buscarVagas(): Promise<VagaEntity[]>;
}
