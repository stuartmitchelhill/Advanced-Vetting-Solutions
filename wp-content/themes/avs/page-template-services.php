
<?php
/*
 * Template Name: Vetting Services
 * Description: A Vetting Services Page Template.
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

Timber::render( array( 'page-template-services.twig', 'page.twig' ), $context );