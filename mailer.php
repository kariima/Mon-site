<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once __DIR__."/vendor/autoload.php";

if(isset($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

    $mail = new PHPMailer();

    $mail->isSMTP();
    $mail->HOST = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Username   = 'ici mon adresse mail';
    $mail->Password   = 'ici mdp application';
    $mail->Port       = 587;

    $mail->setFrom($_POST['email'], $_POST['nom']);
    $mail->addAddress('ici mon adresse mail', 'mon nom');
    $mail->Subject = 'Email de mon site web';
    $mail->Body    = $_POST['message'];
    $mail->send();

    if (!$mail->send()) {
        echo "Erreur lors de l'envoi du message" . $mail->ErrorInfo();
    } else {
        echo "Votre message a bien été envoyé.";
    }
}



?>

