import { IVagaBoundary, VagaEntity } from '@core';

export default class BuscarVagaUseCase {
  public constructor(private iVagaBoundary: IVagaBoundary) {}

  public async execute(): Promise<VagaEntity[]> {
    const vagas: VagaEntity[] = await this.iVagaBoundary.buscarVagas();
    if (!vagas) return [];

    return this.ordenarPorNome(vagas);
  }

  private ordenarPorNome(vagas: VagaEntity[]): VagaEntity[] {
     return vagas.sort((a: VagaEntity, b: VagaEntity) => {
        return a.nome.localeCompare(b.nome, undefined, { numeric: true })
    });
  }
}
