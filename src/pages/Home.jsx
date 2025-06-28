import React from 'react';
import { Container } from '../styles/GlobalStyles';
import CarouselCategoria from '../components/CarouselCategoria';
import { categoriasProdutos } from '../components/produtos/ProdutosServices';

export default function Home() {
  return (
    <Container>
      <title>Início</title>
      {categoriasProdutos.map((categoria, index) => (
        <CarouselCategoria
          key={index}
          categoria={categoria.categoria}
          produtos={categoria.produtos}
        />
      ))}
    </Container>
  );
}
