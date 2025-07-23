import React from 'react'
import { resultadosBusca, useQuery } from './ProdutosServices'
import { Container } from '../../styles/GlobalStyles'
import ListaProdutos from './ListaProdutos'
import BtnVoltar from '../../services/BtnVoltar'

export default function BuscaProdutos() {
  const query = useQuery()
  const termoBusca = query.get('query')?.toLowerCase() || ''
  const results = resultadosBusca(termoBusca);

  return (
    <Container>
      <BtnVoltar />
      <title>Resultados da busca</title>
      <ListaProdutos
        categoria={`Resultados para "${termoBusca}"`}
        produtos={results}
      />
    </Container>
  )
}
