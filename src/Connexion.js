import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';
import "./Connexion.css"

const Connexion=()=>{

    const [formData, setFormData] = useState({
        mailconnect: '',
        mdpconnect: '',
        rememberme: '',
      });
      const [response, setResponse] = useState(null);
      
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
      
        fetch("http://localhost/php_saes4/connexion.php", {
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
            if (data.includes('Bravo vous êtes connecté !')) {
                setResponse(<p class="valid">Bravo vous êtes inscrit.</p>);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };    
    
    return( 
        <>

<section className="contain">
    <h3>Connexion</h3>
    </section>

    <section className="connexion">
        <form onSubmit={handleSubmit}>

            <input type="email" name="mailconnect" placeholder="Mail" onChange={handleChange}/>
            <br /><br />
            <input type="password" name="mdpconnect" placeholder="Mot de passe" onChange={handleChange}/>
            <br /><br /> <br /><br />
            <input type="checkbox" name="rememberme" id="remembercheckbox" onChange={handleChange}/><label class="label" for="remembercheckbox">Se souvenir de moi </label>
            <br /><br /> <br />
            <input type="submit" name="formconnexion" id='btn' value="Se connecter !"/>
        </form>

        {response ? <p>{response}</p> : null}
        <br /><br />    

    </section>

    </>
    )

}

export default Connexion;
