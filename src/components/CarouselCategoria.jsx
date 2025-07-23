import React from 'react';
import Slider from 'react-slick';
import { ContainerImgsCarousel, ImgsCarousel, Title, FontPreco, NewPrice, BtnDefault, LinkProd } from '../styles/GlobalStyles';
import { precoFormat, settingsCarousel } from './home/HomeServices';

export default function CarouselCategoria({ categoria, produtos }) {
    if (!produtos || produtos.length === 0) return null;

    return (
        <div>
            <Title>{categoria}</Title>
            <Slider {...settingsCarousel}>
                {produtos.map((produto, index) => (
                    <div key={index}>
                        <ContainerImgsCarousel>
                            <LinkProd to={`/produtos/produto/${(produto.produto_id)}`}>
                                <ImgsCarousel src={produto.fotos[0].foto_produto_url} alt={produto.produto_nome} />
                                <p>{produto.produto_nome}</p>
                                {produto.oferta && produto.oferta.oferta_ativo ? (
                                    <NewPrice>
                                        <FontPreco style={{ textDecoration: 'line-through', color: 'gray' }}>
                                            R${precoFormat(produto.produto_preco)}
                                        </FontPreco>
                                        <FontPreco>R${precoFormat(produto.oferta.oferta_novo_preco)}</FontPreco>
                                    </NewPrice>
                                ) : (
                                    <FontPreco>R${precoFormat(produto.produto_preco)}</FontPreco>
                                )}
                            </LinkProd>
                            <BtnDefault>Adicionar ao carrinho</BtnDefault>
                        </ContainerImgsCarousel>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
