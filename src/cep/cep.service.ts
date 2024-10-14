import { Injectable } from '@nestjs/common';
import { Query } from 'express-serve-static-core';
import { CepS } from './schema/cep.schema';

@Injectable()
export class CepService {
  async buscaEndereco(query: Query): Promise<CepS> {
    const res = await fetch(`https://brasilapi.com.br/api/cep/v1/${query.cep}`);
    const data = await res.json();

    const endereco = {
      estado: data.state,
      cidade: data.city,
      bairro: data.neighborhood,
      rua: data.street,
    };

    return endereco;
  }
}
