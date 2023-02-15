import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';
import "./Connexion.css"

const Connexion=()=>{


    
    return( 
        <>

    <section className="connexion">

        <div className='boite'>

            <h2>Connectez-vous</h2>

            <form>
                <br/> <br/>
                <input type="email"  className='champs' name="mailconnect" placeholder="Nom d'utilisateur ou e-mail"/>
                <br /><br />
                <input type="password" className='champs'name="mdpconnect" placeholder="Mot de passe" />
                <br /><br />
                <input type="checkbox" name="rememberme" id="remembercheckbox" /><label class="label" for="remembercheckbox">Se souvenir de moi </label>
                <br /><br /> 
                <input type="submit" name="formconnexion" id='btn' value="Se connecter"/>
                <br /><br /> <br />

                <div className='btn-bas'>
                <Link to ="#"><button className='btn-1'>Mot de passe oublié</button></Link>
                <Link to ="/inscription"><button className='btn-2'>S'inscrire</button></Link>
                </div>
            </form>
            

        </div>


        <br /><br />    

            
            <br /><br /><br /><br /><br /><br /><br />

    </section>

    </>
    )

}

export default Connexion;