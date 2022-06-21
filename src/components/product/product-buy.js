import React from 'react';
import '../../css/product-buy.css'
import Mario from '../../assets/icons/mario.png'


const ProductBuy = () => {
    return(
        <div>

            <div className="productbg"></div>

            <div className="product_buy">
                <div className="product_buy_button">
                    <button>X</button>
                </div>
                <div className="product_buy_title">
                    <p>Pedido realizado <br /> com sucesso! </p>
                </div>
                <div className="product_buy_mario">
                    <img src={Mario} alt="" />
                </div>
            </div>
           
        </div>
    )
}

export default ProductBuy;