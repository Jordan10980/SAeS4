<?php

// error_reporting(-1);
// ini_set('display_errors', 'On');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");


$data = json_decode(file_get_contents("php://input")); 

$bdd = new PDO('mysql:host=localhost;dbname=Mairie', 'root', '');

$name=$data->data->name;
$to= $data->data->to;
$subject= $data->data->subject;
$message= $data->data->message;



    if(isset($message)){

        $entete  = 'MIME-Version: 1.0' . "\r\n";

        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";

        $entete .= 'From: ' . $to. "\r\n";



        $messageV = '<h2>Message envoyé depuis la page Contact de la Mairie de Beauvais</h2>

        
        <p><b>Nom: </b>' . $name . '<br>

        <p><b>Mail : </b>' . $to . '<br>

        <b>objet : </b>' . $subject. '<br>

        <b>Message : </b>' . $message. '</p>';



        $retour = mail('testapi1098@gmail.com', 'Envoi Mairie de Beauvais', $messageV, $entete);

        if($retour) {

            $insertmbr = $bdd->prepare("INSERT INTO contact (name, mail, objet, message) VALUES (?,?,?,?)");
            $insertmbr->execute(array($name, $to, $subject, $messageV));

            echo 'Votre message a bien été envoyé.';

        }

      

    }





?>