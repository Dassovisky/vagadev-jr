import '../../css/footer.css'
import Logo from '../../assets/img/logo_footer.png'

const Footer = () => {
    return(
        <div>

            <footer className="footer">
                <div className="col_3 no_padding">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div> 
                </div>
                <div className="col_9 no_padding">
                    <div className="direitos">
                        <p>Agência N1 - Todos os direitos reservados</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;