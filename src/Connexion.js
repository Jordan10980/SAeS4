import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './Connexion.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import FacebookAuth from 'react-facebook-auth';
import { FacebookLoginButton } from "react-social-login-buttons";


const Connexion=()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      if (window.myGlobalLogin === true) {
        setIsLoggedIn(true);
      }
    }, []);
    
      const navRef =useRef();
    
      const showNavbar =  ()=>{
          navRef.current.classList.toggle("responsive_nav"); 
      }
    

    const authHandler = (err, data) => {
        console.log(err, data);
    };

    const MyFacebookButton = ({ onClick }) => (
        <button onClick={onClick}>
            <FacebookLoginButton>
            Se connecter avec Facebook
            </FacebookLoginButton>
        </button>
    );

    const authenticate = (response) => {
        console.log(response);
        // Api call to server so we can validate the token
    };

    const [formData, setFormData] = useState({
        mailconnect: '',
        mdpconnect: '',
        rememberme: '',
      });
      const [response, setResponse] = useState(null);
      
      const navigate = useNavigate();
      
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
              const userId = data.substring(26);
              if(userId != 0){
                setIsLoggedIn(true);
                window.myGlobalLoginId = userId;
                window.myGlobalLogin = true;
                navigate(`/profil?id=${userId}`);}
              
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };

    return(
        <>


            <section className="connexion">

                <div className='boite'>

                    <h2>Connectez-vous</h2>

                    <form onSubmit={handleSubmit}>
                        <br/> <br/>
                        <input type="email"  className='champs' name="mailconnect" placeholder="E-mail" onChange={handleChange}/>
                        <br /><br />
                        <input type="password" className='champs'name="mdpconnect" placeholder="Mot de passe" onChange={handleChange}/>
                        <br /><br />
                        <input type="checkbox" name="rememberme" id="remembercheckbox" /><label class="label" for="remembercheckbox" onChange={handleChange}>Se souvenir de moi </label>
                        <br /><br />
                        <input type="submit" name="formconnexion" id='btn' value="Se connecter"/>
                        <br /><br /> <br />

                        {response ? <p>{response}</p> : null}    

                        <div className='btn-bas'>
                            <Link to ="#"><button className='btn-1'>Mot de passe oublié</button></Link>
                            <Link to ="/inscription"><button className='btn-2'>S'inscrire</button></Link>
                        </div>
                    </form>

                    <div align="center">
                        <br/><br/>
                            <FacebookAuth
                                appId="1258939371388102"
                                callback={authenticate}
                                component={MyFacebookButton}
                            />


                        <GoogleOAuthProvider clientId="586836053659-g0oo0l4r39q6sf3m2l18ibies53hmec4.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    const details = jwt_decode(credentialResponse.credential);
                                    console.log(details);
                                    console.log(credentialResponse);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            /></GoogleOAuthProvider>
                    </div>




                </div>

                <br /><br />


                <br /><br /><br /><br /><br /><br /><br />

            </section>

        </>
    )

}

export default Connexion;



