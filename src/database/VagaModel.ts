import { IVaga } from '@database';
import { model, Schema } from 'mongoose';

const VagaSchema: Schema = new Schema({
  _id: String,
  nome: String,
  status: Boolean,
});

export default model<IVaga>('VagaModel', VagaSchema);
