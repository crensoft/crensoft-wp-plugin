<?php
/**
 * Sends contact form email
 *
 * @since   1.0.0
 * @package crensoft
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function validateInputs($input) {
  if (!$input['name'] || !$input['email'] || !$input['message']) {
    return false;
  }
  if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    return false;
  }
  return true;
}

function cleanInput($input) {
  return htmlspecialchars(stripslashes(trim($input)));
}

function createTransport() {
  return (new \Swift_SmtpTransport(getenv('MAIL_HOST'), getenv('MAIL_PORT')))
  ->setUsername(getenv('MAIL_USER'))
  ->setPassword(getenv('MAIL_PASS'));
}

function createBody($data) {
  return "<strong>Name:</strong> {$data['name']} ({$data['email']})<br /><br />\n\n"
  . ($data['phone'] ? "<strong>Phone:</strong> {$data['phone']}<br /><br />\n\n" : "")
  . "<strong>Msg:</strong> {$data['message']}";
}

function crensoft_contact($data) {
  if (!validateInputs($data)) {
    return ['status' => 400];
  }
  // Create the Transport
  $transport = createTransport();

  // Create the Mailer using your created Transport
  $mailer = new \Swift_Mailer($transport);

  // get values
  $cleanData = array_map(cleanInput, $data);

  $body = createBody($cleanData);
  
  // Create a message
  $message = (new \Swift_Message('Contact Form: ' . $cleanData['name']))
    ->setFrom([getenv('CONTACT_FROM') => 'Contact Form'])
    ->setTo([getenv('CONTACT_EMAIL') => getenv('CONTACT_NAME')])
    ->setReplyTo([$cleanData['email'] => $cleanData['name']])
    ->setBody($body, 'text/html')
    ->addPart(strip_tags($body), 'text/plain');

  // Send the message
  $result = $mailer->send($message);
  $status = 500;
  if ($result) {
    $status = 200;
  }
  return ['data' => $result, 'status' => $status];
}