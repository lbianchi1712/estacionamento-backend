import { BuscarVagaUseCase, VagaEntity } from '@core';
import { IVagaResponse } from '@entrypoint';

export class BuscarVagaController {
  public constructor(private usecase: BuscarVagaUseCase) {}

  public async handle(): Promise<IVagaResponse[]> {
    const vagas: VagaEntity[] = await this.usecase.execute();
    console.log(vagas);
    
    return vagas.map((vaga: VagaEntity) => ({
      id: vaga.id,
      nome: vaga.nome,
      status: vaga.status
    }));
  }
}
