import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';
import './Inscription.css'

function Inscription() {

    const [formData, setFormData] = useState({
        pseudo: '',
        mail: '',
        mail2: '',
        mdp: '',
        mdp2: '',
      });
  
  const [response, setResponse] = useState(null);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost/php_saes4/inscription.php", {
      method: 'POST',
      body: JSON.stringify({
        data: formData,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.text())
      .then((data) => {
        setResponse(data);
        if (data === 'Bravo vous êtes inscrit') {
          setResponse(<p class="valid">Votre compte a bien été crée ! </p>);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

    return (
      <>

        <section className="inscription_form">

            <h3>Inscription</h3>

        <form onSubmit={handleSubmit}>
            
            <input type="text" placeholder="Votre pseudo" id="pseudo" name="pseudo" onChange={handleChange}/>
        <br />
            <input type="email" placeholder="Votre mail" id="mail" name="mail"  onChange={handleChange}/>
        <br />
            <input type="email" placeholder="Confirmez votre email" id="mail2" name="mail2" onChange={handleChange}/>
        <br />
            <input type="password" placeholder="Votre mot de passe" id="mdp" name="mdp"  onChange={handleChange}/>
        <br />
            <input type="password" placeholder="Confirmez votre mdp" id="mdp2" name="mdp2" onChange={handleChange}/>
        <br />

        <input type="submit" name="forminscription" id="btn" value="Je m'inscris"/>

        </form>

        {response ? <p>{response}</p> : null}

        </section>


</>

);
}

export default Inscription;


