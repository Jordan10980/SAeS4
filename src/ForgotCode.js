import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './ForgotCode.css';
import { useNavigate } from 'react-router-dom';


const ForgotCode = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
 

  const sendEmail = (e) => {
    e.preventDefault();

    const code = Math.random().toString(36).substr(2, 6);
    
    
    emailjs
      .send('service_0jpl4ck', 'template_i0dhwyl', { email, code }, 'yy6DhbwkGUYuuA7is')
      .then(
        (response) => {
          console.log('Email sent successfully', response.status, response.text);
          fetch('http://localhost/php_saes4/updatePassword.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, code }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
          // nEnvoi = afalse;u
        },
        (error) => {
          console.log('Failed to send email', error);
        }
      );
    

  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <section className="connexion">
        <div className="boite-forgotCode">
          <h2>Votre email pour l'envoi du code</h2>
          <form onSubmit={sendEmail}>
            <br />
            <br />
            <input type="email" value={email} onChange={handleEmailChange} name="email" id="email" required />
            <br />
            <br />
            <Link to ="/forgot"><button type="submit" name="formconnexion" id="btn" value="Confirmer">Envoyer</button></Link>
            <br />
            <br />
          </form>
        </div>
      </section>
      <br /><br /><br /><br /><br /> <br /><br />
    </>
  );
};


export default ForgotCode;
