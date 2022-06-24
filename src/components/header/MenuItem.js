import React from 'react';
import './menu-item.css'


const MenuItem = () => {
    return(
        <div>

            <div className="menu_item hidden">
                <div className="menu">
                    <ul>
                        <li className="menu_item_category">Luta</li>
                        <a href="google.com.br"><li>Mortal Kombat</li></a>
                        <a href="google.com.br"><li>Smash Bros</li></a>
                        <a href="google.com.br"><li>Killer Instict</li></a>
                        <a href="google.com.br"><li>DBZ Kakarot</li></a>
                    </ul>
                        <div className="line"></div>
                    <ul>
                        <li className="menu_item_category">Ação / Aventura</li>
                        <a href="google.com.br"><li>GTA V</li></a>
                        <a href="google.com.br"><li>Tomb Raider</li></a>
                        <a href="google.com.br"><li>HALO</li></a>
                        <a href="google.com.br"><li>Call Of Duty</li></a>
                    </ul>
                        <div className="line"></div>
                    <ul>
                        <li className="menu_item_category">Corrida</li>
                        <a href="google.com.br"><li>NEED for SPEED</li></a>
                        <a href="google.com.br"><li>Forza Horizon</li></a>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default MenuItem;