import { IVagaBoundary, VagaEntity } from '@core';
import { IVaga, VagaModel } from '@database';

export class MongoVagaRepository implements IVagaBoundary {
  public async buscarVagas(): Promise<VagaEntity[]> {
    const vagas: IVaga[] = await VagaModel.find();
 
    if (!vagas) return [];

    return vagas.map((vaga: IVaga) => ({
      nome: vaga.nome,
      status: vaga.status,
      id: vaga._id,
    }));
  }
}
