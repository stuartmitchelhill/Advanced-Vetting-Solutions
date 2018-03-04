
<?php
/*
 * Template Name: Homepage
 * Description: A Homepage Template.
 */
$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;

$args = array(
    'post_status' => 'publish',
    'post_type' => 'service',
    'posts_per_page' => -1,
);

$context['vetting_services'] = Timber::get_posts($args);

Timber::render( array( 'page-template-homepage.twig', 'page.twig' ), $context );