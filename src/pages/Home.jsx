import React from 'react';
import { Container } from '../styles/GlobalStyles';
import CarouselCategoria from '../components/CarouselCategoria';
import { categoriasProdutos, lancamentos } from '../components/produtos/ProdutosServices';

export default function Home() {
  return (
    <Container>
      <title>Início</title>

      {lancamentos.length > 0 && (
        <CarouselCategoria
          categoria="Lançamentos"
          produtos={lancamentos}
        />
      )}
      {categoriasProdutos.map((categoria, index) => (
        <CarouselCategoria
          key={index}
          categoria={categoria.categoria}
          produtos={categoria.produtos}
        />
      ))}
      <div></div>
    </Container>
  );
}
