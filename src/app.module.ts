import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaFisicaModule } from './pessoa-fisica/pessoa-fisica.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CepModule } from './cep/cep.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    PessoaFisicaModule,
    CepModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
