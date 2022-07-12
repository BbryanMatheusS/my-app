import React from "react";
import './index.css';

import {GoSearch} from 'react-icons/go';
import {CgShoppingCart} from 'react-icons/cg';

import logojussi from '../../../assets/img/logoJussi.png'; 


const Navbar = () => {
    return(
        <header className="nav-bar">        
          <div className="nav-bar__content content">
            <ul className='nav-bar__content_logo'>
              <li><img src={logojussi} alt="" /></li>
              <li>Nossas Soluçoes</li>
              <li>Conheça  Jussi</li>
            </ul>
            <ul className='nav-bar__content_search'>
              <li>
                <div className='nav-bar__content_search_input-search'>
                  <input type="text" name="" id="Busca" placeholder='Buscar'/>
                  <button type='submit' className='icon'><GoSearch/></button>
                </div>
              </li>
              <li>Login</li>
              <li className='icon'><CgShoppingCart/></li>
            </ul>
          </div>
        </header>
    )
}

export default Navbar;