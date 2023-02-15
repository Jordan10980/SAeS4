import React, { useRef } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./Navbar.css";
import logo from './image/logo agglo.png';
import fr from './image/fr.png'
import { Link } from 'react-router-dom';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<> 
		<header>
			
			<nav ref={navRef}>
				<Link to="/" className="nav-link">Accueil</Link>
				<Link to="/transport" className="nav-link">Transport</Link>
				<Link to="/nousretrouver" className="nav-link">Nous Retrouver</Link>
				<Link to="/sondage" className="nav-link">Sondage</Link>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
				<div className="section-btn-2">
					<Link to="/connexion"><button className='Connexion-btn-2'>Connexion</button></Link>
					<Link to ="/inscription"><button className='Inscription-btn-2'>Inscription</button></Link>
					<select className="lang-2">
						<option className="Fr" selected>🇫🇷</option>
						<option className="En">🇺🇸</option>
					</select>
				</div>
			</nav>
			<Link to="/" className="logo"><img src={logo} alt=""/></Link>
			<div className="section-btn">
				<Link to="/connexion"><button className='Connexion-btn'>Connexion</button></Link>
				<Link to ="/inscription"><button className='Inscription-btn'>Inscription</button></Link>
				<select className="lang">
					<option className="Fr" selected>🇫🇷</option>
					<option className="En">🇺🇸</option>
				</select>
			</div>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
		</>
	);
}

export default Navbar;
