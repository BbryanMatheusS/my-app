import React from "react";
import './index.css';

import batedeira from '../../../assets/img/batedeira.png';
import geladeira from '../../../assets/img/geladeira.png';
import bebida from '../../../assets/img/bebida.png';


const HeroBanner = () => {
    return (

        <section className='hero-banner'>
          <div className="hero-banner__conteudo content">
            <div className="hero-banner__conteudo__text">
              <h1>Criamos lojas que vendem mais.</h1>
              <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
              <button>Veja nossa soluçoes</button>
            </div>
            <div className="hero-banner__produtos">
              
              <div className="hero-banner__produtos__produto" id='produto1'>
                <img src={geladeira} alt="Geladeira" />
                <button>Mais Detalhes</button>
              </div>
              <div className="hero-banner__produtos__produto" id='produto2'>
                <img src={batedeira} alt="Batedeira" />
                <button>Comprar em 12x</button>
              </div>
              <div className="hero-banner__produtos__produto" id='produto3'>
                <img src={bebida} alt="Bebida" />
                <button>Adicionar à sacola</button>
              </div>
            </div>
          </div>
        </section>

    );
}

export default HeroBanner;