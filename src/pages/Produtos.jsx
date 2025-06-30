import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../styles/GlobalStyles';
import ListaProdutos from '../components/produtos/ListaProdutos';
import { obterCategoriaSelecionada } from '../components/produtos/ProdutosServices';
import { urlFormat } from '../components/home/HomeServices';

export default function Produtos() {
  const { categoria } = useParams();
  const categoriaURL = urlFormat(categoria);
  const categoriaSelecionada = obterCategoriaSelecionada(categoriaURL);

  return (
    <>
    <title>{categoriaSelecionada.categoria}</title>
      <Container>
        {categoriaSelecionada ? (
          <ListaProdutos
            categoria={categoriaSelecionada.categoria}
            produtos={categoriaSelecionada.produtos}
          />
        ) : (
          <p>Categoria não encontrada</p>
        )}
      <div></div>
      </Container>
    </>
  )
}
