import '../../css/product.css'
import Square from '../../assets/icons/square.png'
import Outriders from '../../assets/img/product-outriders.png'
import Cyberpunk from '../../assets/img/product-cyberpunk2077.png'
import Donkey from '../../assets/img/product-donkey-kong-country-tropical-freeze.png'

const Product = () => {
    return(
        <div>

            <div className="container"> 
                <h1 className="product_title"><img src={Square} alt="quadrado" /> Produtos em destaque</h1>

                <div className="product_container">    
                    <div className="col_3">
                        <div className="product">
                            <img src={Outriders} alt="" />
                            <div className="pricebox">
                                <h5>Outriders</h5>
                                <p>R$ 200,00</p>
                                <button>COMPRAR</button>
                            </div>
                        </div>
                    </div>
                    <div className="col_3">
                        <div className="product">
                            <img src={Cyberpunk} alt="" />
                            <div className="pricebox">
                                <h5>CYBERPUNK 2077</h5>
                                <p>R$ 200,00</p>
                                <button>COMPRAR</button>
                            </div>
                        </div>
                    </div>

                    <div className="col_3">
                        <div className="product">
                            <img src={Donkey} alt="" />
                            <div className="pricebox">
                                <h5>Donkey Kong Country Tropical Freeze</h5>
                                <p>R$ 200,00</p>
                                <button>COMPRAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product;