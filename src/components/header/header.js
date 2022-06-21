import React from 'react';
import '../../css/header.css'
import Logo from '../../assets/img/Logo_N1_Rush.png'
import Menu from '../../assets/icons/menu.png'
import Plane from '../../assets/icons/paper-plane.png'
import Search from '../../assets/icons/search-solid.png'
import Bag from '../../assets/icons/shopping-bag-solid.png'

const Header = () => {
    return(
        <div>

            <header className="header">
                <div className="container">
                    <div className="row">
                        
                        <div className="col_1 no_padding">
                            <div className="main_menu_button">
                                <button><img src={Menu} alt="" /></button>
                            </div>
                        </div>
                        <div className="no_padding">
                            <div className="main_menu_logo">
                                    <img src={Logo} alt="" />
                            </div>
                        </div>

                        <div className="col_10 flex-end">
                            <ul className="main_menu_list">
                                <a href="google.com">
                                    <img src={Plane} alt="" />
                                    <li>CONTATO</li>
                                </a>
                                <a href="google.com">
                                    <img src={Search} alt="" />
                                    <li>BUSCAR</li>
                                </a>
                                <a href="google.com">
                                    <img src={Bag} alt="" />
                                    <li className="bag_button">0</li>
                                </a>
                            </ul>
                        </div>

                    </div>  
                </div>
            </header>

        </div>
    )
}

export default Header;