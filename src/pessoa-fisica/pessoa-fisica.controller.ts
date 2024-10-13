import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PessoaFisicaService } from './pessoa-fisica.service';
import { PessoaFisica } from './schema/pessoa-fisica.schema';
import { CriarPFDto } from './dto/criar-pf.dto';
import { AtualizarPFDto } from './dto/atualizar.pf.dto';

import { Query as ExpressQuery } from 'express-serve-static-core';
import { ComboPessoas } from './schema/combo-pessoas.schema';

@Controller('pessoa-fisica')
export class PessoaFisicaController {
  constructor(private pessoaFService: PessoaFisicaService) {}

  @Get('listar')
  async listarTodasPF(@Query() query: ExpressQuery): Promise<PessoaFisica[]> {
    return await this.pessoaFService.listarTodasPF(query);
  }

  @Get('listar/:id')
  async listarPF(@Param('id') id: string): Promise<PessoaFisica> {
    return await this.pessoaFService.listarPessoa(id);
  }

  @Get('combo-pessoas')
  async listaComboPessoas(): Promise<ComboPessoas[]> {
    return await this.pessoaFService.listarComboPessoas();
  }

  @Post('criar')
  async criarPF(@Body() pf: CriarPFDto): Promise<PessoaFisica> {
    return await this.pessoaFService.cadastrarPF(pf);
  }

  @Put(':id')
  async atualizarPF(
    @Param('id') id: string,
    @Body() pf: AtualizarPFDto,
  ): Promise<PessoaFisica> {
    return await this.pessoaFService.atualizarPF(id, pf);
  }

  @Delete(':id')
  async deletarPF(@Param('id') id: string): Promise<PessoaFisica> {
    return await this.pessoaFService.deletarPF(id);
  }
}
