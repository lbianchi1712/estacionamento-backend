export default class VagaEntity {
  public readonly id: string;
  public nome: string;
  public status: boolean;

  public constructor(props: Partial<VagaEntity>) {
    Object.assign(this, props);
  }

  public static criarVaga({
    id,
    nome,
    status,
  }: Partial<VagaEntity>): VagaEntity {
    return new VagaEntity({
      id: id,
      nome: nome,
      status: status
    });
  }
}
