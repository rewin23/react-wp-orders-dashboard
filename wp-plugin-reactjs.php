<?php
/*
Plugin Name: React option dashboard
Plugin URI: https://#
Description: A WordPress plugin to add orders dashaboard
Author URI: https://#
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Domain Path: /languages
*/


if ( ! function_exists( 'add_action' ) ){
  exit;
}

/*
* Adds a submenu to the Settings menu.
* the page will contain the ID of html element that hosts our JSX components.
*/
add_action( 'admin_menu', 'dro_create_menu' );
function dro_create_menu(){
  add_options_page( 'WP Plugin Using ReactJS', 'Reportes', 'manage_options', __FILE__,'dro_display_menu' );
}
function dro_display_menu(){
  echo '<div id="main-report"></div>';
}

/**
* we enqueue the Js script generated by WebPack.
*/
add_action( 'admin_enqueue_scripts', 'dro_enqueue_script' );
function dro_enqueue_script(){
  wp_enqueue_script(
    'dro-plugin-reactjs',
    plugins_url('/dist/public/bundle.js', __FILE__) ,
    ['wp-element', 'wp-components'],
    time(), // You can add the current datetime in production env.
    true );
}



function my_admin_menu() {
        add_menu_page(
            __( 'Reporte', 'my-textdomain' ),
            __( 'Reporte', 'my-textdomain' ),
            'manage_options',
            'sample-page',
            'dro_display_menu',
            'dashicons-schedule',
            3
        );
    }

add_action( 'admin_menu', 'my_admin_menu' );

