import React from 'react';
import './ProdutosColecao.css';
import { FaArrowRight } from "react-icons/fa";

// Importação direta das imagens
import king from '../../assets/img/kingimas.png';
import Aves from '../../assets/img/ColecaoAves.png';
import Decorativas from '../../assets/img/PlacasDecorativas.png';
import Esportivas from '../../assets/img/PlacasEsportivas.png';
import Religiosa from '../../assets/img/PlacasReligiosas.png';
import Gaiola from '../../assets/img/PlcasGaiola.png';

export default function ProdutosColecao() {
  const produtos = [
    { id: 1, nome: 'Imãs Decorativos', imagem: king },
    { id: 2, nome: 'Placas automotivas', imagem: Aves },
    { id: 3, nome: 'Placas Religiosas', imagem: Decorativas },
    { id: 4, nome: 'Placas esportivas', imagem: Esportivas },
    { id: 5, nome: 'Coleção de Aves', imagem: Religiosa },
    { id: 6, nome: 'Placas de Gaiolas', imagem: Gaiola },
  ];

  return (
<>
    <div className="produtos-colecao">
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
    </div>
    </>
  );
}
