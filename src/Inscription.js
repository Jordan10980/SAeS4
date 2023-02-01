import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';
import './Inscription.css'

function Inscription() {


  
    return (
      <>

        <section className="inscription_form">

            <h3>Inscription</h3>

        <form>
            
            <input type="text" placeholder="Votre pseudo" id="pseudo" name="pseudo" />
        <br />
            <input type="email" placeholder="Votre mail" id="mail" name="mail"  />
        <br />
            <input type="email" placeholder="Confirmez votre email" id="mail2" name="mail2" />
        <br />
            <input type="password" placeholder="Votre mot de passe" id="mdp" name="mdp"  />
        <br />
            <input type="password" placeholder="Confirmez votre mdp" id="mdp2" name="mdp2" />
        <br />

        <input type="submit" name="forminscription" id="btn" value="Je m'inscris"/>

        </form>


        </section>


</>

);
}

export default Inscription;