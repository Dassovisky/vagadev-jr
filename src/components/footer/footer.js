import '../../css/footer.css'
import Logo from '../../assets/img/logo_footer.png'

const Footer = () => {
    return(
        <div>

            <div className="footer">
                <div className="col-md-3">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div> 
                </div>
                <div className="col-md-push-4">
                    <div className="direitos">
                        <p>Agência N1 - Todos os direitos reservados</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;