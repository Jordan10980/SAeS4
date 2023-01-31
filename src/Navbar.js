import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useRef } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./Navbar.css";
import logo from './image/logo.gif';


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (

		<Router>
		<header>
			<a href="" className="logo"><img src={logo} alt=""/></a>
			<nav ref={navRef}>

				{/*<a href="./src/Accueil.js">Accueil</a> 
				<a href="#">Actualité</a>
				<a href="./Contact.js">Nous Retrouver</a>
        		<a href="/#">Sondage</a>
				<a href="./Connexion.js">Connexion</a>*/}
				
				<Link to="/Accueil" className="nav-link">Accueil</Link>
            	<Link to="#" className="nav-link">Transport</Link>
				<Link to="/Contact" class="nav-link">Nous Retrouver</Link>
				<Link to="#" className="nav-link">Sondage</Link>
				<Link to="/Connexion" className="nav-link">Connexion</Link>
				
				<input type='search' placeholder="Rechercher..." className="search"/>
				<button className="search-btn"> <FaSearch /> </button>

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
		</Router>
	);
}

export default Navbar;