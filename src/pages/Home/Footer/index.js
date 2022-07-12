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
                <img src={logo} alt="WPP Company Logo" />
                <ul>
                <li><img src={facebook} alt="Facebook" /></li>
                <li><img src={insta} alt="instagram" /></li>
                <li><img src={linkedin} alt="linkedin" /></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;