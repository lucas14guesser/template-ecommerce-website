import React, { useEffect, useState } from 'react';
import { Container } from '../styles/GlobalStyles';
import CarouselCategoria from '../components/CarouselCategoria';
import { categoriasUnicas, lancamentos, ofertas, todosProdutos } from '../components/produtos/ProdutosServices';
import { getAllProdutos } from '../api/GetMethods';
import Loading from '../services/Loading';

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProdutos(setProdutos).finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />
  
  const categoria = categoriasUnicas(produtos);

  return (
    <Container>
      <title>Início</title>

      {ofertas(produtos).length > 0 && (
        <CarouselCategoria
          categoria="Ofertas"
          produtos={ofertas(produtos)}
        />
      )}
      {lancamentos(produtos).length > 0 && (
        <CarouselCategoria
          categoria="Lançamentos"
          produtos={lancamentos(produtos)}
        />
      )}
      {categoria.map((nomeCategoria, index) => (
        <CarouselCategoria
          key={index}
          categoria={nomeCategoria}
          produtos={todosProdutos(produtos, nomeCategoria)}
        />
      ))}
      <div></div>
    </Container>
  );
}
