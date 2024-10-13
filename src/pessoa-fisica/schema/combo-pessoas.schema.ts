import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class ComboPessoas {
  @Prop()
  pNome: string;

  @Prop()
  pId: string;
}

export type ComboPessoasDocument = ComboPessoas & Document;
export const ComboPessoasSchema = SchemaFactory.createForClass(ComboPessoas);
