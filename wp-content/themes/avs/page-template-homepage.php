
<?php
/*
 * Template Name: Homepage
 * Description: A Homepage Template.
 */
$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
Timber::render( array( 'page-template-homepage.twig', 'page.twig' ), $context );