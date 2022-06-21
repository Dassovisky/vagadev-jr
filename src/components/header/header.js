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
        <div>

            <header className="header">
                <div className="container">
                    <div className="row">
                    < MenuItem />
                        <div className="">
                            
                                <button className="main_menu_button"><img src={Menu} alt="" />< MenuItem /></button>
                            
                        </div>
                            <div className="main_menu_logo">
                                <img src={Logo} alt="" />
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
                                    <li className="bag_button"></li>
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