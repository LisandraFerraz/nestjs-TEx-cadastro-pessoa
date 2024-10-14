import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
  Length,
} from 'class-validator';
import { EstadoCivil } from 'src/utils/estado-civil';
import { Genero } from 'src/utils/genero';

export class AtualizarPFDto {
  @IsString({ message: 'Nome deve ser uma sequência de alfanuméricos.' })
  @IsOptional()
  @MinLength(3, { message: 'Nome deve ter mais de 3 caracteres.' })
  pNome: string;

  @Length(11, 11, {
    message: 'CPF precisa ter 11 caracteres.',
  })
  @IsOptional()
  pCpf: string;

  @IsEnum(Genero, { message: 'Gênero precisa estar entre as opções.' })
  @IsOptional()
  pGenero: Genero;

  @IsString({
    message: 'Data de nascimento deve ser uma sequência de alfanuméricos.',
  })
  @IsOptional()
  @Length(10, 10, { message: 'Data de nascimento deve ter 10 caracteres.' })
  pDataNasc: string;

  @Length(11, 12, { message: 'Telefone precisa ter entre 11 e 12 caracteres.' })
  @IsOptional()
  pTelefone: string;

  @Length(8, 8, { message: 'CEP precisa ter 8 caracteres.' })
  @IsOptional()
  pCep: string;

  @IsString({
    message: 'Cidade deve ser uma sequência de alfanuméricos.',
  })
  @Length(3, 150, { message: 'Cidade deve ter entre 3 a 150 caracteres.' })
  @IsOptional()
  pCidade: string;

  @IsString({ message: 'Cidade deve ser uma sequência de alfanuméricos' })
  @Length(2, 150, {
    message: 'Data de nascimento deve ter entre 2 a 150 caracteres.',
  })
  @IsOptional()
  pEstado: string;

  @IsString({ message: 'Bairro deve ser uma sequência de alfanuméricos.' })
  @Length(2, 150, { message: 'Bairro precisa ter entre 2 a 150 caracteres.' })
  @IsOptional()
  pBairro: string;

  @IsString({ message: 'Rua  deve ser uma sequência de alfanuméricos.' })
  @Length(2, 100, { message: 'Rua deve ter entre 2 a 100 caracteres.' })
  @IsOptional()
  pRua: string;

  @IsString({
    message: 'Número da casa deve ser uma sequência de alfanuméricos.',
  })
  @IsOptional()
  pNumero: string;

  @IsOptional()
  pComplemento: string;

  @IsString({ message: 'E-mail deve ser uma sequência de alfanuméricos.' })
  @IsEmail()
  @Length(5, 100, { message: 'E-mail deve ter entre 5 a 100 caracteres.' })
  @IsOptional()
  pEmail: string;

  @IsEnum(EstadoCivil)
  @Length(8, 14, { message: 'Estado civil deve ter entre 8 a 14 caracteres.' })
  @IsOptional()
  pEstadoCivil: EstadoCivil;

  @IsString({
    message: 'Profissão deve ser uma sequência de alfanuméricos.',
  })
  @Length(1, 100, { message: 'Profissão deve ter entre 1 a 100 caracteres.' })
  @IsOptional()
  pProfissao: string;
}
