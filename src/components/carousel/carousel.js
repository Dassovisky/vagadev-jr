import React, { Component } from "react"
import Slider from "react-slick"
import '../../css/carousel.css'
import Mortal from '../../assets/img/principal_banner_desktop.jpg'
import Red from '../../assets/img/principal_banner_desktop_02.jpg'


class SimpleSlider extends Component {

    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (

        <div>

            <Slider {...settings}>

                <div className="carousel_slider">
                    
                    <div className="carousel_info">
                        <div className="container">
                            <h1>MORTAL KOMBAT</h1>
                            <h2>R$ 299<span>,99</span></h2>
                            <div className="carousel_text">
                                <p>Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.</p>
                            </div>
                        </div>
                    </div>
                    
                    <img src={Mortal} alt="Mortal Kombat" />

                </div>

                <div className="carousel_slider">
                    
                    <div className="carousel_info">
                        <div className="container">
                            <h1>MORTAL KOMBAT</h1>
                            <h2>R$ 299<span>,99</span></h2>
                            <div className="carousel_text">
                                <p>Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.</p>
                            </div>
                        </div>
                    </div>
                    
                    <img src={Red} alt="Red Dead Redemption" />

                </div>
            
            </Slider>
            
        </div>

      );
    }
}

export default SimpleSlider;