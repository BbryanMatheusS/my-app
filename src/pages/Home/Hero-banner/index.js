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
              <a href="#" target="_blank"><button>Veja nossa soluçoes</button></a>
            </div>
            <div className="hero-banner__produtos">
              
              <div className="hero-banner__produtos__produto" id='produto1'>
                <img src={geladeira} alt="Geladeira" />
                <a href="#" target="_blank"><button>Mais Detalhes</button></a>
              </div>
              <div className="hero-banner__produtos__produto" id='produto2'>
                <img src={batedeira} alt="Batedeira" />
                <a href="#" target="_blank"><button>Comprar em 12x</button></a>
              </div>
              <div className="hero-banner__produtos__produto" id='produto3'>
                <img src={bebida} alt="Bebida" />
                <a href="#" target="_blank"><button>Adicionar à sacola</button></a>
              </div>
            </div>
          </div>
        </section>

    );
}

export default HeroBanner;