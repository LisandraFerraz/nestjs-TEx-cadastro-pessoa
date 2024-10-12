import { PessoaFisica } from 'src/pessoa-fisica/schema/pessoa-fisica.schema';

export interface PaginatedResponse<> {
  pessoas: PessoaFisica[];
  totalPaginas: number;
  totalItens: number;
  paginaAtual: number;
}
