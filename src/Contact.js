import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';

import "./Contact.css";

function Contact() {


    return (
      <>
        <div className="container">
        <h3>Nous Retrouver</h3>
        



        <div className='contenu'>

            <div className="carte">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.907679812469!2d2.07988231547164!3d49.42955936827393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e706cce059d537%3A0x6a0ca46432eef192!2sMairie%20de%20Beauvais!5e0!3m2!1sfr!2sfr!4v1674860630267!5m2!1sfr!2sfr" width="600" height="450" style={{ bordure : 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
              
            <div className="info">
                  <h4>Appelez-Nous</h4>
                  <p>03 44 79 40 00</p>
                  <br/>
                  <h4>Emplacement</h4>
                  <p>1 Rue Desgroux, 60000 Beauvais</p>
                  <br/>
                  <h4>Horaire</h4>
                  <p>Lundi - Vendredi <br/> 07:00 - 20:00 <br/><br/> Les jours d'ouvertures et les horaires peuvent être différents en fonction du service.</p>
                  <a href='#'>Pour plus de détail, cliquez ici </a>
            </div>      
        </div>

        <div className="contact_form">
                  <h4>Envoyez-nous un message</h4>
                  <br/>
                    <form>
                        <label>Nom *</label><br/>
                        <input type="name" placeholder='Votre nom' id='name' name="name" />
                        <br/>
                        <label>Email *</label><br/>
                        <input type="email" placeholder="Votre mail" id="to" name="to" />
                        <br />
                        <label>Téléphone</label><br/>
                        <input type="tel" placeholder="Votre numéros" id="tel" name="tel" />
                        <br />    
                        <label>Objet / Message *</label><br/>
                        <input type="text" placeholder="Objet" id="subject" name="subject" />
                        <br />    
                        <textarea placeholder="Ecrivez un message ..." id="message" name="message" />
                        <br /> 
                        <input className="envoyer" type="submit" name="formcontact" id="btn" value="Envoyer" />
                          
                      </form>
                        
            </div>

            </div>
        </>
    );

}

export default Contact;