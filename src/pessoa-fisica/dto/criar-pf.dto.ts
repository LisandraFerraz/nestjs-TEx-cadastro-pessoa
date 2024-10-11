import { EstadoCivil } from 'src/utils/estado-civil';

export class CriarPFDto {
  readonly pNome: string;

  readonly pCpf: number;

  readonly pDataNasc: string;

  readonly pTelefone: number;

  readonly pCidade: string;

  readonly pEstado: string;

  readonly pBairro: string;

  readonly pRua: string;

  readonly pNumero: string;

  readonly pComplemento: string;

  readonly pEmail: string;

  readonly pEstadoCivil: EstadoCivil;

  readonly pProfissao: string;
}
