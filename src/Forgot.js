import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Forgot.css';


const Forgot=()=>{
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
      
        fetch('http://localhost/php_saes4/updatePassword.php', {
          method: 'POST',
          body: JSON.stringify({
            code: code,
            newPassword: newPassword,
            confirmPassword: confirmPassword,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      
      const handleCodeChange = (event) => {
        setCode(event.target.value);
      };
      
      const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
      };
      
      const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
      };
      

    return( 
        <>


    <section className="connexion">

        <div className='boite-forgot'>

            <h2>Modifiez votre mot de passe</h2>

            <form onSubmit={handleSubmit}>
                <br /><br />
                <input type="code" className='champs' name="code" placeholder="Code de confirmation" value={code} onChange={handleCodeChange} required />
                <br /><br />
                <input type="password" className='champs' name="newPassword" placeholder="Nouveau mot de passe" value={newPassword} onChange={handleNewPasswordChange} required />
                <br /><br />
                <input type="password" className='champs' name="confirmPassword" placeholder="Confirmer mot de passe" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                <br /><br />
                <input type="submit" name="formconnexion" id='btn' value="Confirmer" />
                <Link to="/forgotCode"><button className='btn-1'>Si vous n'avez pas reçu de code, cliquez ici.</button></Link>
                <br /><br /> <br />
            </form>

        </div>

    </section>

    <br /><br /><br /><br /><br /><br /><br />
    </>
    )

}

export default Forgot;