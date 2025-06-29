import React from 'react';
import Slider from 'react-slick';
import { ContainerImgsCarousel, ImgsCarousel, BtnAddCarrinho, Title } from '../styles/GlobalStyles';
import { settingsCarousel } from './home/HomeServices';
import { Link } from 'react-router-dom';

export default function CarouselCategoria({ categoria, produtos }) {
    return (
        <div>
            <Title>{categoria}</Title>
            <Slider {...settingsCarousel}>
                {produtos.map((produto, index) => (
                    <div key={index}>
                        <ContainerImgsCarousel>
                            <Link to={produto.nome}>
                                <ImgsCarousel src={produto.foto} alt={produto.nome} />
                            </Link>
                            <p>{produto.nome}</p>
                            <BtnAddCarrinho>Adicionar ao carrinho</BtnAddCarrinho>
                        </ContainerImgsCarousel>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
