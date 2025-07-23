import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../styles/GlobalStyles'
import ListaProdutos from '../components/produtos/ListaProdutos'
import { obterCategoriaSelecionada } from '../components/produtos/ProdutosServices'
import BuscaProdutos from '../components/produtos/BuscaProdutos'
import { urlFormat } from '../components/home/HomeServices'
import Favoritos from './Favoritos'
import BtnVoltar from '../services/BtnVoltar'
import { getAllProdutos } from '../api/GetMethods'
import Loading from '../services/Loading'

export default function Produtos({ paginaBusca = false, paginaFavoritos = false }) {
  const { categoria } = useParams()
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProdutos(setProdutos).finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />

  const categoriaURL = categoria ? urlFormat(categoria) : null
  const categoriaSelecionada = categoriaURL ? obterCategoriaSelecionada(categoriaURL, produtos) : null

  if (paginaBusca) {
    return <BuscaProdutos />
  }

  if (paginaFavoritos) {
    return <Favoritos />
  }

  return (
    <>
      <title>{categoriaSelecionada?.categoria || 'Categoria'}</title>
      <Container>
        <BtnVoltar />
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