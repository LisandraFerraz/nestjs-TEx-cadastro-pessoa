import { Controller, Get, Query } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { CepService } from './cep.service';

@Controller('buscar-cep')
export class CepController {
  constructor(private cepService: CepService) {}

  @Get()
  async buscarEndereco(@Query() query: ExpressQuery): Promise<any> {
    return await this.cepService.buscaEndereco(query);
  }
}
