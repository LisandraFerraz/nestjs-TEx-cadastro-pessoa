import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EstadoCivil } from 'src/utils/estado-civil';

@Schema({
  timestamps: true,
})
export class PessoaFisica {
  @Prop()
  pNome: string;

  @Prop()
  pCpf: number;

  @Prop()
  pDataNasc: string;

  @Prop()
  pTelefone: number;

  @Prop()
  pCidade: string;

  @Prop()
  pEstado: string;

  @Prop()
  pBairro: string;

  @Prop()
  pRua: string;

  @Prop()
  pNumero: string;

  @Prop()
  pComplemento: string;

  @Prop()
  pEmail: string;

  @Prop()
  pEstadoCivil: EstadoCivil;

  @Prop()
  pProfissao: string;
}

export type PessoaFisicaDocumen = PessoaFisica & Document;
export const PessoaFisicaSchema = SchemaFactory.createForClass(PessoaFisica);

// Nome, CPF, RG, Data de Nascimento, Telefones, Endereço, E-mail, Estado Civil e etc
