<?php


function contactApi(WP_REST_Request $request) {
  $parameters = $request->get_params();
  var_dump($parameters);

  $data = json_encode([
    'status' => 1
  ]);
  // Create the response object
  $response = new WP_REST_Response( $data );
  
  // Add a custom status code
  $response->set_status( 200 );
  
  // Add a custom header
  $response->header( 'Content-Type', 'application/json' );

}

add_action( 'rest_api_init', function () {
  register_rest_route( 'crensoft/v1', '/contact', array(
    'methods' => 'POST',
    'callback' => 'contactApi',
  ) );
} );