import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';
import "./Accueil.css";
import img1 from './image/accueil.jpeg';

function Accueil() {

    return(
        <body>
            <section className='premier'>
                <h3>Bienvenue</h3>
                <div className='bouton'>
                    <a href='#' className='bouton1'>En savoir Plus</a>
                </div>
            </section>

            <section className='actu'>
                <h3>Actualité</h3>

                <div class='box-card'>
                    <div class="card" href='#'>
                    
                        <div class="card-image"><img src="https://www.gekkode.com/wp-content/uploads/2021/08/orange.jpeg" alt="Orange" /></div>
                            
                        <div class="card-body">

                            <div class="card-date"><time>12 Janvier 2023</time></div>

                            <div class="card-title"><h3>Les 400 coups de pouce au permis</h3></div>
                    
                            <div class="card-excerpt">
                                <p> Depuis son lancement en 2014, le dispositif « Permis citoyen » de la Ville de Beauvais a bénéficié à 400 jeunes beauvaisiens, qui ont pu obtenir leur permis de conduire à moindre coût.</p>
                            </div>

                        </div>
                    </div>

                    <div class="card" href='#'>
                    
                        <div class="card-image"><img src="https://www.gekkode.com/wp-content/uploads/2021/08/orange.jpeg" alt="Orange" /></div>
                            
                        <div class="card-body">
                            
                            <div class="card-date"><time>2 Janvier 2023</time></div>

                            <div class="card-title"><h3>Beauvais poursuit son recensement - Du 19 janvier au 25 février 2023</h3></div>
                    
                            <div class="card-excerpt">
                                <p> Le recensement de la population aura lieu du 19 janvier au 25 février 2023. A Beauvais, Ville de plus de 10 000 habitants, il sera réalisé sur un échantillon d’environ 8% de ses logements. Si votre foyer est concerné, vous en serez prochainement informé(e) par courrier.</p>
                            </div>

                        </div>
                    </div>

                    <div class="card" href='#'>
                    
                        <div class="card-image"><img src="https://www.gekkode.com/wp-content/uploads/2021/08/orange.jpeg" alt="Orange" /></div>
                            
                        <div class="card-body">
                            
                            <div class="card-date"><time>13 Janvier 2023</time></div>

                            <div class="card-title"><h3>Made in Saint-Jean 2ème édition samedi 14 janvier 2023</h3></div>
                    
                            <div class="card-excerpt">
                                <p> Après une 1ère édition réussie, La Batoude fait le pari de la chaleur humaine pour contrer le froid de l’hiver ! Cette année, encore plus qu’en 2022, elle a misé sur les ressources créatives des habitants de Saint-Jean et sur le dynamisme associatif du quartier pour imaginer et créer ce temps fort qui mettra en lumière la vitalité de notre quartier.</p>
                            </div>

                        </div>
                    </div>

                    <div class="card" href='#'>
                    
                        <div class="card-image"><img src="https://www.gekkode.com/wp-content/uploads/2021/08/orange.jpeg" alt="Orange" /></div>
                            
                        <div class="card-body">
                            
                            <div class="card-date"><time>25 Janvier 2023</time></div>

                            <div class="card-title"><h3>Découvrez le nouveau portail de téléservices pour les familles</h3></div>
                    
                            <div class="card-excerpt">
                                <p> Depuis le lundi 23 janvier 2023, la Ville de Beauvais a ouvert un nouveau portail numérique pour permettre aux familles d’effectuer en ligne, 7j/7 et 24h/24, les inscriptions scolaires, les réservations aux services de restauration scolaire, la planification des présences en accueil de loisirs (en semaine et pendant les vacances).</p>
                            </div>

                        </div>
                    </div>

                </div>    
                </section>
            </body>
        
    );
}

export default Accueil;