import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';
import "./Connexion.css"

const Connexion=()=>{


    
    return( 
        <>

<section className="contain">
    <h3>Connexion</h3>
    </section>

    <section className="connexion">
        <form>

            <input type="email" name="mailconnect" placeholder="Mail"/>
            <br /><br />
            <input type="password" name="mdpconnect" placeholder="Mot de passe" />
            <br /><br /> <br /><br />
            <input type="checkbox" name="rememberme" id="remembercheckbox" /><label class="label" for="remembercheckbox">Se souvenir de moi </label>
            <br /><br /> <br />
            <input type="submit" name="formconnexion" id='btn' value="Se connecter !"/>
        </form>

        


        <br /><br />    

            
            <br /><br /><br /><br /><br /><br /><br />

    </section>

    </>
    )

}

export default Connexion;