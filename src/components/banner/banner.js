import React from 'react';
import './banner.css'
import Zelda from '../../assets/img/zelda_banner.jpg'
import Sekiro from '../../assets/img/sekiro_banner.jpg'

const Banner = () => {
    return(
        <div>

            <div className="container">
                <div className="justify">
                    <div className="col_5">
                        <div className="banner">
                            <img src={Zelda} alt="" />
                            <div className="banner_name">
                                <div className="line_1"></div>
                                <p>The Legend of Zelda - Breath of the Wild</p>
                                <div className="line_2"></div>
                            </div>
                        </div> 
                    </div>
                    <div className="col_5">
                        <div className="banner">
                            <img src={Sekiro} alt="" />
                            <div className="banner_name">
                                <div className="line_1"></div>
                                <p>SEKIRO - Shadow Die Twice</p>
                                <div className="line_2"></div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner;