import React ,{ useEffect, useState } from "react";
import './Reset.css';
import './Styles.css';
import api from "../../services/api";



import Navbar from './Nav-bar';
import HeroBanner from './Hero-banner';
import LogoBar from './Logo-bar';
import OurSoluctions from './Our-soluctions';
import JussiSession from './Jussi-session';
import ContactInfo from './Contact-info';
import Newletter from './Newletter';
import Footer from './Footer';


const Home = () => {

    const [DataPokemon, setDataPokemons] = useState([]);
    

    useEffect (() => {

        const pokemons = async () => {
            const {data} = await api.get("/pokedex/2")
            const dados = data.pokemon_entries

            setDataPokemons(...DataPokemon, dados.map(dado => (dado.pokemon_species.name)))
        };
        pokemons()
    },[]);

    // console.log(DataPokemon)

   

    return (
        <div className="App">

            <Navbar DataPokemon= {DataPokemon}/>
            
            <HeroBanner />
            
            <LogoBar />

            <OurSoluctions />

            <JussiSession />

            <ContactInfo />

            <Newletter />
            
            <Footer />

        </div>
    )
}

export default Home;


