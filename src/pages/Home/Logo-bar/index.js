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
            <p><HiOutlineArrowNarrowRight/></p>
            <ul className='logo-bar__content__marcas'>
              <li><img src={brastemp} alt="" /></li>
              <li><img src={compracerta} alt="" /></li>
              <li><img src={consul} alt="" /></li>
              <li><img src={thebar} alt="" /></li>
            </ul>
          </div>
        </section>
    )
}
export default LogoBar;