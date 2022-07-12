import React from "react";
import './index.css';



const Newletter = () => {
    return (
        <section className="newletter">
            <div className="newletter__content content">
                <h2>Receba novidades da nossa area de produtos digitais.</h2>
                <div className='email'>
                    <input type="email" name="e-mail" id="e-mail" placeholder='Digite seu e-mail' />
                    <input type="submit" for="e-mail" value="Cadastrar" />
                </div>
            </div>
        </section>
    )
}

export default Newletter;