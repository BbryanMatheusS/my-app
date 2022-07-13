import React from "react";
import './index.css';


import facebook from '../../../assets/img/facebook.png';
import insta from '../../../assets/img/instagram.png';
import linkedin from '../../../assets/img/linkedin.png';
import logo from '../../../assets/img/wppcompany.png';


const Footer = () => {
    return (
        <footer>
            <div className="footer__content content">
                <a href="https://www.wpp.com/" target="_blank"><img src={logo} alt="WPP Company Logo" /></a>
                <ul>
                <li><a href="https://www.facebook.com/agencia.jussi" target="_blank"><img src={facebook} alt="Facebook" /></a></li>
                <li><a href="https://www.instagram.com/jussi/" target="_blank"><img src={insta} alt="instagram" /></a></li>
                <li><a href="https://www.linkedin.com/company/agencia-jussi/" target="_blank"><img src={linkedin} alt="linkedin" /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;