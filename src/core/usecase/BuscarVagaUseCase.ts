import { IVagaBoundary, VagaEntity } from '@core';

export default class BuscarVagaUseCase {
  public constructor(private iVagaBoundary: IVagaBoundary) {}

  public async execute(): Promise<VagaEntity[]> {
    const vagas: VagaEntity[] = await this.iVagaBoundary.buscarVagas();
    if (!vagas) return [];

    return vagas;
  }
}
