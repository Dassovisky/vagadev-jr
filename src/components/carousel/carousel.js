import React, { Component } from "react"
import Slider from "react-slick"
import '../../css/carousel.css'


class SimpleSlider extends Component {

    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
        <>

            <Slider {...settings}>

                <div className="carousel_slider">
                    <div className="carousel_bg1">

                        <div className="carousel_info">
                            <h1>MORTAL KOMBAT</h1>
                            <h2>R$ 299<span>,99</span></h2>
                            <div className="carousel_text">
                                <p>Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="carousel_slider">
                    <div className="carousel_bg2">

                        <div className="carousel_info">
                            <h1>Red Dead Redemption</h1>
                            <h2 className="white">R$ 299<span>,99</span></h2>
                            <div className="carousel_text">
                                <p>A história se passa em 1899 em uma representação ficcional do oeste, meio-oeste e sul dos Estados Unidos e acompanha o fora da lei Arthur Morgan, que precisa lidar com o declínio do Velho Oeste e sobreviver à perseguição de forças governamentais.</p>
                            </div>
                        </div>

                    </div>
                </div>
            
            </Slider>
            
        </>
      );
    }
}

export default SimpleSlider;