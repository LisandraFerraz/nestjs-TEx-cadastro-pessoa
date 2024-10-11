import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PessoaFisica } from './schema/pessoa-fisica.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';

@Injectable()
export class PessoaFisicaService {
  constructor(
    @InjectModel(PessoaFisica.name)
    private pfModel: mongoose.Model<PessoaFisica>,
  ) {}

  async listarTodasPF(query: Query): Promise<PessoaFisica[]> {
    const itemsPagina = Number(query.itemsPage);
    const paginaAtual = Number(query.page) || 1;
    const proximaPagina = itemsPagina * (paginaAtual - 1);

    const keyword = query.keyword
      ? {
          pNome: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const pessoas = await this.pfModel
      .find({ ...keyword })
      .limit(itemsPagina)
      .skip(proximaPagina);

    return pessoas;
  }

  async cadastrarPF(pf: PessoaFisica): Promise<PessoaFisica> {
    const response = await this.pfModel.create(pf);
    return response;
  }

  async listarPessoa(id: string): Promise<PessoaFisica> {
    const response = await this.pfModel.findById(id);
    return response;
  }

  async atualizarPF(id: string, pf: PessoaFisica): Promise<PessoaFisica> {
    return await this.pfModel.findByIdAndUpdate(id, pf, {
      new: true,
      runValidators: true,
    });
  }

  async deletarPF(id: string): Promise<PessoaFisica> {
    return await this.pfModel.findByIdAndDelete(id);
  }
}
