import React from 'react';
import Slider from 'react-slick';
import './ProdutosColecao.css';
import { FaArrowRight } from "react-icons/fa";

// Importação direta das imagens
import king from '../../assets/img/kingimas.png';
import Aves from '../../assets/img/ColecaoAves.png';
import Decorativas from '../../assets/img/PlacasDecorativas.png';
import Esportivas from '../../assets/img/PlacasEsportivas.png';
import Religiosa from '../../assets/img/PlacasReligiosas.png';
import Gaiola from '../../assets/img/PlcasGaiola.png';

// Importação do CSS do slick-carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ProdutosColecao() {
  const produtos = [
    { id: 1, nome: 'Imãs Decorativos', imagem: king  },
    { id: 2, nome: 'Coleção de Aves', imagem: Aves },
    { id: 3, nome: 'Placas de Gaiolas', imagem: Gaiola },
    { id: 4, nome: 'Placas automotivas', imagem: Decorativas },
    { id: 5, nome: 'Placas Religiosas', imagem: Religiosa },
    { id: 6, nome: 'Placas esportivas', imagem: Esportivas },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="produtos-colecao">
      <Slider {...settings}>
        {produtos.map(produto => (
          <div key={produto.id} className="produto-item">
            <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
            <div className="produto-info">
              <h3 className="produto-nome">{produto.nome}</h3>
              <a href="#" className="produto-link">
                <FaArrowRight className="produto-seta" />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
