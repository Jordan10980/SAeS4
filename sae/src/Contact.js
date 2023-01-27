import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';
import "./Contact.css"

function Contact() {


    return (
      <>

        <div className="container">
        <h3>Nous contacter</h3>
        </div>

        <div>
          <div className="contact_form">
              <form>
                  
                  <input type="email" placeholder="Votre mail" id="to" name="to" />
                  <br />
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