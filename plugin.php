<?php
/**
 * Plugin Name: Crensoft Plugin
 * Plugin URI: https://github.com/crensoft/crensoft-wp-plugin/
 * Description: crensoft — is a Gutenberg plugin created via create-guten-block.
 * Author: Crensoft
 * Author URI: https://crensoft.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'lib/init.php';
require_once plugin_dir_path( __FILE__ ) . 'lib/api.php';