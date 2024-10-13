import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PessoaFisica } from './schema/pessoa-fisica.schema';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { ComboPessoas } from './schema/combo-pessoas.schema';

@Injectable()
export class PessoaFisicaService {
  constructor(
    @InjectModel(PessoaFisica.name)
    private pfModel: mongoose.Model<PessoaFisica>,
  ) {}

  async listarTodasPF(query: Query): Promise<any> {
    const itemsPagina = Number(query.itemsPage) || 5;
    const paginaAtual = Number(query.page) || 1;
    const proximaPagina = itemsPagina * (paginaAtual - 1);

    const pNome = query.pNome
      ? {
          pNome: {
            $regex: query.pNome,
            $options: 'i',
          },
        }
      : {};

    const totalItems = await this.pfModel.find({ ...pNome });
    const pessoas = await this.pfModel
      .find({ ...pNome })
      .limit(itemsPagina)
      .skip(proximaPagina);

    const paginacao = {
      totalItems: totalItems.length,
      itemsPagina: itemsPagina,
      paginaAtual: paginaAtual,
    };

    return { pessoas, paginacao };
  }

  async listarComboPessoas(): Promise<ComboPessoas[]> {
    const totalItems = await this.pfModel.find();

    const comboPessoas: any = totalItems.map((p) => ({
      pNome: p.pNome,
      _id: p._id,
    }));
    return comboPessoas;
  }

  async cadastrarPF(pf: PessoaFisica): Promise<PessoaFisica> {
    const response = await this.pfModel.create(pf);
    return response;
  }

  async listarPessoa(id: string): Promise<any> {
    const pessoas = await this.pfModel.findById(id);

    const paginacao = {
      totalItems: 1,
      itemsPagina: 1,
      paginaAtual: 1,
    };
    const data = { pessoas: [pessoas], paginacao };

    return data;
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
