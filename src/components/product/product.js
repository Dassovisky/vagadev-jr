import React, { useState } from 'react'
import '../../css/product.css'
import Square from '../../assets/icons/square.png'
import Outriders from '../../assets/img/product-outriders.png'
import Cyberpunk from '../../assets/img/product-cyberpunk2077.png'
import Donkey from '../../assets/img/product-donkey-kong-country-tropical-freeze.png'
import Mario from '../../assets/icons/mario.png'
import ProductBuy from '../product/product-buy'

const Product = () => {

    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);

    const toogle1 = () => {
        setState1(!state1)
    }
    const toogle2 = () => {
        setState2(!state2)
    }
    const toogle3 = () => {
        setState3(!state3)
    }
    

    return(
        
        <div>

            <div className="container"> 
                <h1 className="product_title"><img src={Square} alt="quadrado" /> Produtos em destaque</h1>
                <div className="row">
                    <div className="product_container">    
                        <div className="col_3">
                            <div className="product">
                                <img src={Outriders} alt="" />
                                <div className="pricebox">
                                    <h5>Outriders</h5>
                                    <p>R$ 200,00</p>
                                    <button className={"button_default" + (state1 ? " button_mario" : "")} onClick={toogle1}>{state1 ? "COMPRADO!" : "COMPRAR"} 
                                        <img src={Mario} alt="" className={"img_mario" + (state1 ? " img_mario_toggle" : "")}/>
                                        <ProductBuy />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col_3">
                            <div className="product">
                                <img src={Cyberpunk} alt="" />
                                <div className="pricebox">
                                    <h5>CYBERPUNK 2077</h5>
                                    <p>R$ 200,00</p>
                                    <button className={"button_default" + (state2 ? " button_mario" : "")} onClick={toogle2}>{state2 ? "COMPRADO!" : "COMPRAR"} 
                                        <img src={Mario} alt="" className={"img_mario" + (state2 ? " img_mario_toggle" : "")}/>
                                        <ProductBuy />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col_3">
                            <div className="product">
                                <img src={Donkey} alt="" />
                                <div className="pricebox">
                                    <h5>Donkey Kong Country Tropical Freeze</h5>
                                    <p>R$ 200,00</p>
                                    <button className={"button_default" + (state3 ? " button_mario" : "")} onClick={toogle3}>{state3 ? "COMPRADO!" : "COMPRAR"} 
                                        <img src={Mario} alt="" className={"img_mario" + (state3 ? " img_mario_toggle" : "")}/>
                                        <ProductBuy />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product;