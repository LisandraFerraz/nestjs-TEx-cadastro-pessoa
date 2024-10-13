import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { EstadoCivil } from 'src/utils/estado-civil';
import { Genero } from 'src/utils/genero';

export class CriarPFDto {
  @IsNotEmpty()
  readonly pNome: string;

  @IsNotEmpty()
  readonly pCpf: number;

  @IsNotEmpty()
  readonly pGenero: Genero;

  @IsNotEmpty()
  readonly pDataNasc: string;

  @IsOptional()
  readonly pTelefone: number;

  @IsNotEmpty()
  readonly pCep: number;

  @IsNotEmpty()
  readonly pCidade: string;

  @IsNotEmpty()
  readonly pEstado: string;

  @IsNotEmpty()
  readonly pBairro: string;

  @IsNotEmpty()
  readonly pRua: string;

  @IsNotEmpty()
  readonly pNumero: number;

  @IsNotEmpty()
  readonly pComplemento: string;

  @IsEmail()
  readonly pEmail: string;

  @IsNotEmpty()
  readonly pEstadoCivil: EstadoCivil;

  @IsNotEmpty()
  readonly pProfissao: string;
}
