import { Module } from '@nestjs/common';
import { PessoaFisicaController } from './pessoa-fisica.controller';
import { PessoaFisicaService } from './pessoa-fisica.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PessoaFisicaSchema } from './schema/pessoa-fisica.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PessoaFisica', schema: PessoaFisicaSchema },
    ]),
  ],
  controllers: [PessoaFisicaController],
  providers: [PessoaFisicaService],
})
export class PessoaFisicaModule {}
