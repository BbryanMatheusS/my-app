import React from "react";
import './Reset.css';
import './Styles.css';

import Navbar from './Nav-bar';
import HeroBanner from './Hero-banner';
import LogoBar from './Logo-bar';
import OurSoluctions from './Our-soluctions';
import JussiSession from './Jussi-session';
import ContactInfo from './Contact-info';
import Newletter from './Newletter';
import Footer from './Footer';


const Home = () => {
    return (
        <div className="App">

            <Navbar />
            
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


