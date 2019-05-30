<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use Symfony\Component\Dotenv\Dotenv;

echo $_SERVER['DOCUMENT_ROOT'];

if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/wp-content/.env')) {
  $dotenv = new Dotenv();
  $dotenv->load($_SERVER['DOCUMENT_ROOT'] . '/wp-content/.env');
}

// Create the Transport
$transport = (new Swift_SmtpTransport('smtp.mailtrap.io', 25))
  ->setUsername($_ENV['MAIL_USER'])
  ->setPassword($_ENV['MAIL_PASS'])
;

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Create a message
$message = (new Swift_Message('Wonderful Subject'))
  ->setFrom(['noreply@crensoft.com' => 'Contact Form'])
  ->setTo(['edward@ad2soft.com' => 'EC'])
  ->setBody('Here is the message itself');

// Send the message
$result = $mailer->send($message);

echo json_encode($result);