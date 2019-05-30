<?php
/**
 * Set up Crensoft Api methods
 *
 * @since   1.0.0
 * @package crensoft
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Symfony\Component\Dotenv\Dotenv;

if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/wp-content/.env')) {
  $dotenv = new Dotenv();
  $dotenv->load($_SERVER['DOCUMENT_ROOT'] . '/wp-content/.env');
}

require_once dirname(__DIR__) . '/vendor/autoload.php';
require __DIR__ . '/contact.php';

function contactMethod(WP_REST_Request $request) {
  $params = $request->get_params();
  $result = crensoft_contact($params);
  $response = new WP_REST_Response( json_encode($result['data']), $result['status'] );
  return $response;
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'crensoft/v1', '/contact', array(
    'methods' => 'POST',
    'callback' => 'contactMethod',
  ) );
} );