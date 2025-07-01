import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../styles/GlobalStyles'
import ListaProdutos from '../components/produtos/ListaProdutos'
import { obterCategoriaSelecionada } from '../components/produtos/ProdutosServices'
import BuscaProdutos from '../components/produtos/BuscaProdutos'
import { urlFormat } from '../components/home/HomeServices'

export default function Produtos({ paginaBusca = false }) {
  const { categoria } = useParams()
  const categoriaURL = categoria ? urlFormat(categoria) : null
  const categoriaSelecionada = categoriaURL ? obterCategoriaSelecionada(categoriaURL) : null

  if (paginaBusca) {
    return <BuscaProdutos />
  }

  return (
    <>
      <title>{categoriaSelecionada?.categoria || 'Categoria'}</title>
      <Container>
        {categoriaSelecionada ? (
          <ListaProdutos
            categoria={categoriaSelecionada.categoria}
            produtos={categoriaSelecionada.produtos}
          />
        ) : (
          <p>Categoria não encontrada</p>
        )}
      </Container>
    </>
  )
}