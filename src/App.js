import React from 'react';
import Navbar from "./Navbar";
import Connexion from "./Connexion";
import Inscription from "./Inscription";
import Footer from "./Footer";
import Contact from "./Contact";
import Accueil from"./Accueil";
import Transport from './Transport';

function App() {
	return (
		<div>
			<Navbar/>
			<Transport/>
			<Footer/>
		</div>
	);
}

export default App;
