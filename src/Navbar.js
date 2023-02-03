import React, { useRef } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./Navbar.css";
import logo from './image/logo.gif';
import { Link } from 'react-router-dom';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<>
		<header>
			<Link to="/" className="logo"><img src={logo} alt=""/></Link>
			<nav ref={navRef}>
				<Link to="/" className="nav-link">Accueil</Link>
				<Link to="/transport" className="nav-link">Transport</Link>
				<Link to="/nousretrouver" className="nav-link">Nous Retrouver</Link>
				<Link to="/sondage" className="nav-link">Sondage</Link>
				<Link to="/connexion" className="nav-link">Connexion</Link>
				<input type='search' placeholder="Rechercher..." className="search"/>
				<button className="search-btn"> <FaSearch /> </button>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
		</>
	);
}

export default Navbar;
