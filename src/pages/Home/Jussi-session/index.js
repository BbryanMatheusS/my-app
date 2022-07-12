import React from "react";
import './index.css';

import jussi from '../../../assets/img/image-jussi.png';


const JussiSession = () => {
    return (
        <section className="jussi-session">
            <div className="jussi-session__conteudo content">
                <div className="jussi-session__conteudo__text">
                    <h2>olá.Somos a Jussi</h2>
                    <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
                    <button>Conheça a jussi</button>
                </div>
                <img src={jussi} alt="" />
            </div>
            
        </section>
    )
}

export default JussiSession;