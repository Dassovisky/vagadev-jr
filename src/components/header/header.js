import React from 'react'
import '../../css/header.css'
import '../../css/menu-item.css'
import Logo from '../../assets/img/Logo_N1_Rush.png'
import Menu from '../../assets/icons/menu.png'
import Plane from '../../assets/icons/paper-plane.png'
import Search from '../../assets/icons/search-solid.png'
import Bag from '../../assets/icons/shopping-bag-solid.png'
import MenuItem from './MenuItem'
import '../product/product'


const Header = () => {

    return(
        <>

            <header className="header">
                <div className="container">

                    <div className="header_left">
                        <div className="header_button">
                            <button><img src={Menu} alt="icon button" />< MenuItem /></button>
                        </div>
                        
                        <div className="header_logo">
                            <img src={Logo} alt="logo" />
                        </div>
                    </div>

                    <ul className="header_list">
                        
                        <a href="google.com" className="link"><img src={Plane} alt="contato" /><li className="li">CONTATO</li></a>
                        <a href="google.com" className="link"><img src={Search} alt="procurar" /><li className="li">BUSCAR</li></a>
                        <a href="google.com" className="link"><img src={Bag} alt="procurar" /><li className="bag_button">1</li></a>

                    </ul>                    

                </div>
            </header>

        </>
    )
}

export default Header;