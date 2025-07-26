import React, { useEffect, useState } from 'react'
import { filtroDeProdutos, useQuery } from './ProdutosServices'
import { Container } from '../../styles/GlobalStyles'
import ListaProdutos from './ListaProdutos'
import BtnVoltar from '../../services/BtnVoltar'
import { getAllProdutos } from '../../api/GetMethods'
import Loading from '../../services/Loading'

export default function BuscaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useQuery();

  useEffect(() => {
    getAllProdutos(setProdutos).finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />

  const termoBusca = query.get('query')?.toLowerCase() || ''
  const results = filtroDeProdutos(produtos, termoBusca);

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
