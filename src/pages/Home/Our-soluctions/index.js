import React from "react";
import './index.css';

import imagem1 from '../../../assets/img/image (1).png';
import imagem2 from '../../../assets/img/image (2).png';
import imagem3 from '../../../assets/img/image (3).png';
import imagem from '../../../assets/img/image.png';


const OurSoluctions = () => {
    return(
        <section className="our-soluctions">
          <div className="our-soluctions__content content">
            <div className="our-soluctions__content__produtos">
              <h2>//Nossas Soluções</h2>
              <div className='our-soluctions__content__produtos__produto'>
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
              <div className='our-soluctions__content__produtos__produto'>
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
              <div className='our-soluctions__content__produtos__produto'>
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
              <div className='our-soluctions__content__produtos__produto'>
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
          </div>
        </section>
    )
}
export default OurSoluctions;