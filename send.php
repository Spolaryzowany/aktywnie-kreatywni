<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try{
    $mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'pitko829@gmail.com';
    $mail->Password   = 'xfthjkmuecurrcau';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom($_GET['email'], $_GET['name']);
    $mail->addAddress('pitko829@gmail.com', 'Joe User');

    $mail->isHTML(true);
    $mail->Subject = "Wiadomość od ".$_GET_['name'];
    $mail->Body    = $_GET['message'];
    $mail->AltBody = $_GET['message'];

    $mail->send();

    echo 'Message has been sent';
}
catch(Exception $e){
    echo "Message could not be sent. Mailer Error.";
}