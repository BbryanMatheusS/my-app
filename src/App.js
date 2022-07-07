import './Reset.css';
import './App.css';
import React from 'react';

import {GoSearch} from 'react-icons/go';
import {CgShoppingCart} from 'react-icons/cg';

import logojussi from './assets/img/logoJussi.png'; 

import batedeira from './assets/img/batedeira.png';
import geladeira from './assets/img/geladeira.png';
import bebida from './assets/img/bebida.png';

import facebook from './assets/img/facebook.png';
import insta from './assets/img/instagram.png';
import linkedin from './assets/img/linkedin.png';
import logo from './assets/img/wppcompany.png';

import brastemp from './assets/img/logo-brastemp.png';
import compracerta from './assets/img/logo-compracerta.png';
import consul from './assets/img/logo-consul.png';
import thebar from './assets/img/logo-thebar.png';


import imagem1 from './assets/img/image (1).png';
import imagem2 from './assets/img/image (2).png';
import imagem3 from './assets/img/image (3).png';
import imagem from './assets/img/image.png';


import jussi from './assets/img/image-jussi.png';

function App() {
  return (
    <div className="App">
      <header className="nav-bar">        
        <ul className='nav-bar_logo'>
          <li><img src={logojussi} alt="" /></li>
          <li>Nossas Soluçoes</li>
          <li>Conheça  Jussi</li>
        </ul>
        <ul className='nav-bar_search'>
          <li>
            <div className='nav-bar_search_input-search'>
              <input type="text" name="" id="Busca" placeholder='Buscar'/>                
              <button type='submit' className='icon'><GoSearch/></button>      
            </div>
          </li>
          <li>Login</li>
          <li className='icon'><CgShoppingCart/></li>
        </ul>
      </header>
      <section className='hero-banner'>
        <div className="hero-banner__conteudo">
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
      <section className="logo-bar">
        <h3>Nosssas principais lojas vtex</h3>
        <p>--</p>
        <ul className='logo-bar_marcas'>
          <li><img src={brastemp} alt="" /></li>
          <li><img src={compracerta} alt="" /></li>
          <li><img src={consul} alt="" /></li>
          <li><img src={thebar} alt="" /></li>
        </ul>
      </section>

      <section className="our-soluctions">
        <div className="produtos">
        <h2>//Nossas Soluções</h2>
          <div className='produtos__produto'>
            <img src={imagem} alt="" />
            <h3>Nome do produto #1</h3>
            <h4>Descriçao do produto #1</h4>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Ver Soluçao</button>
          </div>
          <div className='produtos__produto'>
            <img src={imagem1} alt="" />
            <h3>Nome do produto #1</h3>
            <h4>Descriçao do produto #1</h4>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Ver Soluçao</button>
          </div>
          <div className='produtos__produto'>
            <img src={imagem2} alt="" />
            <h3>Nome do produto #1</h3>
            <h4>Descriçao do produto #1</h4>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Ver Soluçao</button>
          </div>
          <div className='produtos__produto'>
            <img src={imagem3} alt="" />
            <h3>Nome do produto #1</h3>
            <h4>Descriçao do produto #1</h4>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Ver Soluçao</button>
          </div>
        </div>
      </section>

      <section className="jussi-session">
        <div className="jussi-serrion__conteudo">
          <div className="jussi-serrion__conteudo__text">
            <h2>olá.Somos a Jussi</h2>
            <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
            <button>Conheça a jussi</button>
          </div>
          <img src={jussi} alt="" />
        </div>
        
      </section>

      <section className="contact-info">
        <h2>Essa loja foi construida usando uma das nossa soluçoes da plataforma VTEX. Tenha a sua</h2>
        <h5>Entre em contato</h5>
        <h3>Comercial@jussi.com.br</h3>
      </section>

      <section className="newletter">
        <h2>Receba novidades da nossa area de produtos digitais.</h2>
        <div className='email'>
          <input type="email" name="e-mail" id="e-mail" placeholder='Digite seu e-mail' />
          <input type="submit" for="e-mail" value="Cadastrar" />
        </div>
      </section>
      <footer>
        <img src={logo} alt="WPP Company Logo" />
        <ul>
          <li><img src={facebook} alt="Facebook" /></li>
          <li><img src={insta} alt="instagram" /></li>
          <li><img src={linkedin} alt="linkedin" /></li>
        </ul>
      </footer>

    </div>
  );
}

export default App;
