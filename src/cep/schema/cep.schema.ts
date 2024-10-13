import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class CepS {
  @Prop()
  estado: string;
  @Prop()
  cidade: string;
  @Prop()
  bairro: string;
  @Prop()
  rua: string;
}

export type CepDocument = CepS & Document;
export const CepSchema = SchemaFactory.createForClass(CepS);
