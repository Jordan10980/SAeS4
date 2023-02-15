import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';

import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    to: '',
    tel: '',
    subject: '',
    message: ''
  });

  const [response, setResponse] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };



  const handleSubmit = event => {
    event.preventDefault();

    fetch("http://localhost/php_saes4/sendmail.php", {
      method: 'POST',
      body: JSON.stringify({
        data: formData,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.text())
      .then((data) => {
        setResponse(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };




    return (
      <>
      <div className="container">
        <h3>Nous Retrouver</h3>
        

      <div className='double-contenu'>

        <div className='contenu'>

            <div className="carte">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.907679812469!2d2.07988231547164!3d49.42955936827393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e706cce059d537%3A0x6a0ca46432eef192!2sMairie%20de%20Beauvais!5e0!3m2!1sfr!2sfr!4v1674860630267!5m2!1sfr!2sfr" width="600" height="450" style={{ bordure : 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="info">
                  <h4>Emplacement</h4>
                  <p>1 Rue Desgroux, 60000 Beauvais, 03 44 79 40 00</p>
                  <br/>
                  <h4>Horaire</h4>
                  <p>Lundi - Vendredi <br/> 07:00 - 20:00 <br/><br/> Les jours d'ouvertures et les horaires peuvent être différents en fonction du service.</p>
                  <a href='http://www.beauvais.fr/votre-mairie/horaires.html'>Pour plus de détail, cliquez ici </a>
            </div>      
        </div>

        <div className="contact_form">
                  <h4>Envoyez-nous un message</h4>
                  <br/>
                    <form onSubmit={handleSubmit}>
                        
                        <input type="name" placeholder='Nom*' id='name' name="name" onChange={handleChange} required/>
                        <br/>
                       
                        <input type="email" placeholder="E-mail*" id="to" name="to" onChange={handleChange} required/>
                        <br />
                        
                        <input type="tel" placeholder="Téléphone" id="tel" name="tel" onChange={handleChange} required/>
                        <br />    
                        
                        <input type="text" placeholder="Objet du message*" id="subject" name="subject" onChange={handleChange} required/>
                        <br />    
                        <textarea placeholder="Ecrivez un message ..." id="message" name="message"onChange={handleChange} required />
                        <br /> 
                        <input className="envoyer" type="submit" name="formcontact" id="btn" value="Soumettre" />
                          
                      </form>

                      {response ? <p>{response}</p> : null}
                        
              </div>
            </div>
          </div>
        </>
    );

}

export default Contact;




    
