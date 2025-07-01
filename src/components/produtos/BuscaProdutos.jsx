import React from 'react'
import { resultadosBusca, useQuery } from './ProdutosServices'
import { Container } from '../../styles/GlobalStyles'
import ListaProdutos from './ListaProdutos'

export default function BuscaProdutos() {
  const query = useQuery()
  const termoBusca = query.get('query')?.toLowerCase() || ''
  const results = resultadosBusca(termoBusca);

  return (
    <>
      <title>Resultados da busca</title>
      <Container>
        <ListaProdutos
          categoria={`Resultados para "${termoBusca}"`}
          produtos={results}
        />
      </Container>
    </>
  )
}
