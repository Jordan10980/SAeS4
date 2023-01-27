import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from './image/logo.gif'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<a href="" className="logo"><img src={logo} alt=""/></a>
			<nav ref={navRef}>
				<a href="./Accueil">Accueil</a>
				<a href="">Actualité</a>
				<a href="#">Nous Retrouver</a>
        <a href="/#">Sondage</a>
				<a href="./Connexion.js">Connexion</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;