import { EstadoCivil } from 'src/utils/estado-civil';
import { Genero } from 'src/utils/genero';

export class AtualizarPFDto {
  readonly pNome: string;

  readonly pCpf: number;

  readonly pGenero: Genero;

  readonly pDataNasc: string;

  readonly pTelefone: number;

  readonly pCidade: string;

  readonly pEstado: string;

  readonly pBairro: string;

  readonly pRua: string;

  readonly pNumero: number;

  readonly pComplemento: string;

  readonly pEmail: string;

  readonly pEstadoCivil: EstadoCivil;

  readonly pProfissao: string;
}
