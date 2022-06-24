import React from 'react';
import './footer.css'
import Logo from '../../assets/img/logo_footer.png'

const Footer = () => {
    return(
        <div>

            <footer className="footer">
                <div className="logo">
                    <img src={Logo} alt="footer logo" />
                </div> 
                <div className="direitos">
                    <p>Agência N1 - Todos os direitos reservados</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer;