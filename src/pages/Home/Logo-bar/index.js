import React from "react";
import './index.css';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import brastemp from '../../../assets/img/logo-brastemp.png';
import compracerta from '../../../assets/img/logo-compracerta.png';
import consul from '../../../assets/img/logo-consul.png';
import thebar from '../../../assets/img/logo-thebar.png';



const LogoBar = () => {
  return (
    <section className="logo-bar">
      <div className="logo-bar__content content">
        <h3>Nosssas principais lojas vtex</h3>
        <p><HiOutlineArrowNarrowRight /></p>
        <ul className='logo-bar__content__marcas'>
          <li><a href="https://www.brastemp.com.br/" target="_blank" rel="noreferrer"><img src={brastemp} alt="" /></a></li>
          <li><a href="https://www.compracerta.com.br/" target="_blank" rel="noreferrer"><img src={compracerta} alt="" /></a></li>
          <li><a href="https://loja.consul.com.br/" target="_blank" rel="noreferrer"><img src={consul} alt="" /></a></li>
          <li><a href="https://br.thebar.com/" target="_blank" rel="noreferrer"><img src={thebar} alt="" /></a></li>
        </ul>
      </div>
    </section>
  )
}
export default LogoBar;