
import {FaBars , FaTimes} from "react-icons/fa"
import logo from './image/logo.gif'
import "./Footer.css";

function Footer() {
	return (
		<footer className="footer">
        <div className="box-container">

            <div className="box">
                <h3>Navigation</h3>
                <a href="/#">Accueil</a>
				<a href="/#">Actualité</a>
				<a href="/#">Contact</a>
                <a href="/#">Sondage</a>
				<a href="/#">Connexion</a>
            </div>

            <div className="box">
                <h3>Contact</h3>
                <p> 03 44 79 40 00</p>
                <p>1 rue Desgroux, 60021 Beauvais Cedex </p>
                <p>Newsletter && Fil info SMS</p> 
            </div>

            <div className="box">
                <h3>Suivez-nous</h3>
                <a href="#"><i className="fab fa-linkedin-in"></i>linkedin</a>
                <a href="#"><i className="fab fa-facebook-f"></i>facebook</a>
                <a href="#"><i className="fab fa-instagram"></i>instagram</a>
                <a href="#"><i className="fab fa-twitter"></i>twitter</a>
            </div>

        
        </div>
        <div className="log"><a href="#" className="logo"><img src={logo} alt=""/></a></div>
        <div className="credit"><span> © 2019 | Mairie de Beauvais - BP 60330 - 1, rue Desgroux - 60021 Beauvais Cedex | Tél : 03 44 79 40 00 | Mentions légales</span></div>

    </footer>

    );
}

export default Footer;
