import React from 'react';
import Slider from 'react-slick';
import { ContainerImgsCarousel, ImgsCarousel, Title, FontPreco, NewPrice, BtnDefault } from '../styles/GlobalStyles';
import { precoFormat, settingsCarousel } from './home/HomeServices';
import { Link } from 'react-router-dom';

export default function CarouselCategoria({ categoria, produtos }) {
    return (
        <div>
            <Title>{categoria}</Title>
            <Slider {...settingsCarousel}>
                {produtos.map((produto, index) => (
                    <div key={index}>
                        <ContainerImgsCarousel>
                            <Link to={`/produtos/produto/${(produto.id)}`}>
                                <ImgsCarousel src={produto.fotos[0].foto} alt={produto.nome} />
                            </Link>
                            <p>{produto.nome}</p>
                            {produto.ofertas && produto.ofertas[0]?.oferta ? (
                                <NewPrice>
                                    <FontPreco style={{ textDecoration: 'line-through', color: 'gray' }}>
                                        R${precoFormat(produto.preco)}
                                    </FontPreco>
                                    <FontPreco>R${precoFormat(produto.ofertas[0].novoPreco)}</FontPreco>
                                </NewPrice>
                            ) : (
                                <FontPreco>R${precoFormat(produto.preco)}</FontPreco>
                            )}

                            <BtnDefault>Adicionar ao carrinho</BtnDefault>
                        </ContainerImgsCarousel>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
