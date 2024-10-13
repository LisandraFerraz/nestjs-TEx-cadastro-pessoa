import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EstadoCivil } from 'src/utils/estado-civil';
import { Genero } from 'src/utils/genero';

@Schema({
  timestamps: true,
})
export class PessoaFisica {
  @Prop()
  pNome: string;

  @Prop()
  pCpf: number;

  @Prop()
  pGenero: Genero;

  @Prop()
  pDataNasc: string;

  @Prop()
  pTelefone: number;

  @Prop()
  pCep: number;

  @Prop()
  pCidade: string;

  @Prop()
  pEstado: string;

  @Prop()
  pBairro: string;

  @Prop()
  pRua: string;

  @Prop()
  pNumero: number;

  @Prop()
  pComplemento: string;

  @Prop()
  pEmail: string;

  @Prop()
  pEstadoCivil: EstadoCivil;

  @Prop()
  pProfissao: string;
}

export type PessoaFisicaDocument = PessoaFisica & Document;
export const PessoaFisicaSchema = SchemaFactory.createForClass(PessoaFisica);
