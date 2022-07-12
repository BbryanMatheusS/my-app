import React, { useState } from "react";
import './index.css';

import { GoSearch } from 'react-icons/go';
import { CgShoppingCart } from 'react-icons/cg';

import logojussi from '../../../assets/img/logoJussi.png';
import api from "../../../services/api";



const Navbar = ({DataPokemon}) => {

  console.log(DataPokemon)

  

  const [Pesquisa, setPesquisa] = useState();
  const [pesquisar, setPesquisar] = useState();
  const [DadosDoPokemon, setDadosDoPokemon]= useState([]);

 
  
  async function pesquisarPokemon (){
    setPesquisar(DataPokemon.find(name => name === Pesquisa.toLowerCase()))

    if(pesquisar!== undefined){
      const poke = async () => {
        const {data} = await api.get(`/pokemon/${Pesquisa.toLowerCase()}`)
        const dados = {
          id : data.id,
          name : data.name,
          type : data.types.map(type => type.type.name),
          Moves : data.moves.map(move => move.move.name),
          Foto : data.sprites.other.home.front_default
        }
        setDadosDoPokemon(dados)        
      }
      await poke()
      handleClickOpen()

    }else{
      alert("este pokemon nao existe")
    }    
  }
  

  
  console.log(DadosDoPokemon)

  const [Popup, setPopup] = useState(false);

  const handleClickOpen = () => {
    setPopup(!Popup);
  }

  const closePopup = () => {
    setPopup(false)
  }


  

  console.log(Pesquisa)

  return (
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
              <input type="text" placeholder='Buscar' onChange={(e) => setPesquisa(e.target.value)}/>
              <button type='submit' className='icon' onClick={pesquisarPokemon}><GoSearch /></button>
            </div>
          </li>
          <li>Login</li>
          <li className='icon'><CgShoppingCart /></li>
        </ul>
      </div>

      {Popup?
      <div className="popup">
        <div className="popup__head">
          <h1>
            {DadosDoPokemon?DadosDoPokemon.name:"Nome do pokemon"}
          </h1>
          <button onClick={closePopup}>close</button>
        </div>
        <div className="popup__body">
          <div className="popup_imagem-dados">
            <img src={DadosDoPokemon.Foto} alt="" />
            <h2>Dados do pokemon</h2>
          </div>
          <p>Type:{DadosDoPokemon?DadosDoPokemon.type.map(dado =>  (` ${dado},`)):"Tipos do pokemon"}</p>
          <p>Habilidades:{DadosDoPokemon?DadosDoPokemon.Moves.map(dado =>  (` ${dado},`)):"Habilidades do pokemon"}</p>
          
        </div>
      </div>:""}      
    </header>
    



  )
}

export default Navbar;