import React from 'react';
import Slider from 'react-slick';
import { ContainerImgsCarousel, ImgsCarousel, BtnAddCarrinho, Title, FontPreco } from '../styles/GlobalStyles';
import { precoFormat, settingsCarousel, urlFormat } from './home/HomeServices';
import { Link } from 'react-router-dom';

export default function CarouselCategoria({ categoria, produtos }) {
    return (
        <div>
            <Title>{categoria}</Title>
            <Slider {...settingsCarousel}>
                {produtos.map((produto, index) => (
                    <div key={index}>
                        <ContainerImgsCarousel>
                            <Link to={urlFormat(produto.nome)}>
                                <ImgsCarousel src={produto.fotos[0].foto} alt={produto.nome} />
                            </Link>
                            <p>{produto.nome}</p>
                            <FontPreco>R${precoFormat(produto.preco)}</FontPreco>
                            <BtnAddCarrinho>Adicionar ao carrinho</BtnAddCarrinho>
                        </ContainerImgsCarousel>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
